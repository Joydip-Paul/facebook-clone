import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css'
import { auth } from '../firebase.js'



const Login = () => {
    const[email,setEmail] = useState ('');
    const history  = useHistory('');
    const[password,setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log("Log in");
            console.log(auth);
            history.push('/');
        })
        .catch((e) => {
            if (
                e.message ===
                "The password is invalid or the user does not have a password."
            ) {
                alert("Please check your credentials again");
            } else if (
                e.message ===
                "There is no user record corresponding to this identifier. The user may have been deleted."
            ) {
                history.push("/register");
                window.scrollTo({
                    top: document.body.scrollHeight,
                    left: 0,
                    behavior: "smooth",
                });
            } else {
                alert(e.message);
            }
        });
    }
    return (
        <div className = "login">
            <div className = "login-container">
                <h3>Login to Facebook</h3>
                <form>
                    <center>
                        <input onChange = {(e)=> setEmail(e.target.value)} type = "text" placeholder = "Email Address"></input>
                    </center>
                    <center>
                        <input onChange = {(e)=> setPassword(e.target.value)} type = "password" placeholder = "Password"></input>
                    </center>
                    <center>
                        <button onClick = {login} type = "submit" className = "login-login">Log in</button>
                    </center>
                    <center>
                        <h6>Forgotten Password</h6>
                    </center>
                    <center>
                        <hr />
                    </center>
                    <center>
                        <Link to = "/signup">
                           <button className = "loginCreateAccount">Create new account</button>
                        </Link>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default Login;