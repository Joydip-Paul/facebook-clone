import React, { useState } from 'react';
import './Register.css'
import { auth } from '../firebase'
import { useHistory } from 'react-router';
const Register = () => {
    const history = useHistory('');
    const[firstName,setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log("sign in");
            if(auth.user){
                auth.user.updateProfile({
                    displayName: firstName + " " + lastName
                }).then((s) => {
                    history.push("/")
                })
            }
        })
        .catch((err) => {
            alert(e.message);
        });
    }
    return (
        <div className = "register">
            <div className = "register-container">
                <h1>Create A New Account</h1>
                <h3>It's quick and easy</h3>

                <form>
                    <center>
                        <input onChange = {(e) => setFirstName(e.target.value)} type = "name" placeholder = "First Name" className = "register-name"/>
                        <input  onChange = {(e) => setLastName(e.target.value)} type = "name" placeholder = "Last  Name" className = "register-name"/>
                    </center>
                    <center>
                        <input  onChange = {(e) => setEmail(e.target.value)} type = "email" placeholder = "email" className = ""/>
                    </center>
                    <center>
                        <input  onChange = {(e) => setPassword(e.target.value)} type = "password" placeholder = "password" className = ""/>
                    </center>
                    <h5 className = "register-date-title">Date of Birth</h5>
                    <select className = "register-date">
                        <option value = "1997">1997</option>
                        <option value = "1998">1998</option>
                        <option value = "1999">1999</option>
                        <option value = "2000">2000</option>
                    </select>
                    <select className = "register-date">
                        <option value = "1997">Jan</option>
                        <option value = "1998">Feb</option>
                        <option value = "1999">March</option>
                        <option value = "2000">April</option>
                    </select>
                    <select className = "register-date">
                        <option value = "1997">1</option>
                        <option value = "1998">2</option>
                        <option value = "1999">3</option>
                        <option value = "2000">4</option>
                    </select>
                    <h5 className = "register-gender">Gender</h5>
                    <div className = "register-radioContainer">
                        <input type = "radio" name = "gender" value = "Male"/>
                        <label>Male</label>
                        <input type = "radio" name = "gender" value = "Female"/>
                        <label>Female</label>
                        <input type = "radio" name = "gender" value = "Other"/>
                        <label>Other</label>
                    </div>
                    <p className = "register-policy">
                        By clicking Sign Up, you agree to our (" ")
                        <span>Terms,Data policy</span> and <span>Cookie Policy</span> You may receive SMS and notifications from us and can opt out at any time.
                    </p>
                    <center>
                        <button onClick = {handleRegister} type = "submit" className = "register-register">Sign up</button>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default Register;