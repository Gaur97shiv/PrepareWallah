import React, { useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import BackButton from '../Component/BackButton/BackButton';
export default function Practice() {
  const [selectedDomain, setSelectedDomain] = useState('Backend');
  const [questionType, setQuestionType] = useState('Mcqs');
  const [company, setCompany] = useState('Oracle');
  const [responsefromAi, setResponseFromAi] = useState("");
  
  let prompt = `I want Some Qustion related to ${selectedDomain} and the qustion should be of type ${questionType} and the qustion should be previously asked in ${company}`;

  async function handleClick() {
    const genAI = new GoogleGenerativeAI(import.meta.env.VITE_Gemini_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setResponseFromAi(text);
  }

  return (
    <>
      <div className="flex  justify-between w-full px-5 bg-sky-600 ">
  <div className="my-10">
    <BackButton />
  </div>
  <div className="text-4xl mt-10 flex justify-center w-full absolute left-1/2 transform -translate-x-1/2">
    Practice with Gen-AI
  </div>
</div>
      
      <div className=" my-20 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="flex mb-4">
            <div className="mx-6">
              <label className="block mb-2">
                Pick a Domain:
                <select
                  value={selectedDomain}
                  onChange={e => setSelectedDomain(e.target.value)}
                  className="block border border-gray-300 rounded px-4 py-2 mt-1 w-full"
                >
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Datascience">Datascience</option>
                </select>
              </label>
            </div>
            <div className="mx-6">
              <label className="block mb-2">
                Pick a Question Type:
                <select
                  value={questionType}
                  onChange={e => setQuestionType(e.target.value)}
                  className="block border border-gray-300 rounded px-4 py-2 mt-1 w-full"
                >
                  <option value="Mcqs">Mcqs</option>
                  <option value="Coding">Coding</option>
                  <option value="Subjective">Subjective</option>
                </select>
              </label>
            </div>
            <div className="mx-6">
              <label className="block mb-2">
                Pick a Company:
                <select
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  className="block border border-gray-300 rounded px-4 py-2 mt-1 w-full"
                >
                  <option value="Oracle">Oracle</option>
                  <option value="Google">Google</option>
                  <option value="GlobalLogic">Global Logic</option>
                </select>
              </label>
            </div>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleClick}>
            Get the Questions
          </button>
        </div>
      </div>
      <div className=" my-20 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-1/2 h-1/2">
          <p>{responsefromAi}</p>
        </div>
      </div>
    </>
  );
}
