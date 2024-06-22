import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./News.module.css";
import Loader from "../../Component/Loader/Loader";
import BackButton from '../../Component/BackButton/BackButton';
const NEWS_API_ENDPOINT =
  "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=75d982224e9440c69e6bc23c6f704fd6";
function  News() {
  const [articles, setArticles] = useState([]);
   const getNews = async () => {
    let response;
    try {
      response = await axios.get(NEWS_API_ENDPOINT);
      response = response.data.articles.slice(0, 15);
    } catch (error) {}
    return response;
  };
  useEffect(() => {
    (async function newsApiCall() {
      const response = await getNews();
      setArticles(response);
    })();
    setArticles([]);
  }, []);

  const handleCardClick = (url) => {
    window.open(url, "_blank");
  };

  if (articles.length == 0) {
    return <Loader text="homepage" />;
  }

  return (
  

<div>
<div className="flex  justify-between w-full px-5 bg-sky-500 ">
  <div className="my-10">
    <BackButton />
  </div>
  <div className="text-4xl mt-10 flex justify-center w-full absolute left-1/2 transform -translate-x-1/2">
    Latest Articles
  </div>
</div>


      <div className={styles.grid}>
        {articles.map((article) => (
          <div
            className={styles.card}
            key={article.url}
            onClick={() => handleCardClick(article.url)}
          >
            <img src={article.urlToImage} />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
</div>
  
   
      
  
  );
}

export default News;
