import { signOut } from "firebase/auth";
import { auth } from "../../Validations/firebase";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SignOut = () => {
    const navigate = useNavigate();

    useEffect(() => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            console.log(error);
        });
    }, []);


}

export default SignOut;
