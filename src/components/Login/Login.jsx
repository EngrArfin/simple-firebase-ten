import React from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../assets/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    console.log(app);
    const provider = new GoogleAuthProvider();


    const handlerGoogleSignIn =() => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(error =>{
            console.log('error', error.message)

        })
    }

    return (
        <div>
            <button onClick={handlerGoogleSignIn} >Google Login</button>
        </div>
    );
};

export default Login;