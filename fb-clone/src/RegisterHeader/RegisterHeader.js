import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterHeader.css'

const RegisterHeader = () => {
    return (
        <div className = "header" >
            <div className = "header-left">
                <Link className = "link" to = "/">
                    <img src = "https://i.ibb.co/WzybLQK/del.png" alt = "Facebook Logo" className = "header-logo"></img>
                </Link>
            </div>
            <div className = "header-right">
                <form>
                    <input type = "email" placeholder = "Email" className = "header-input1"></input>
                    <input type = "password" placeholder = "password" className = "header-input2"></input>
                    <button type = "submit" className = "header-submit">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterHeader;