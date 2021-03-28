import React from 'react';
import './LoginHeader.css'
import {Link} from 'react-router-dom';

const LoginHeader = () => {
    return (
        <div className = "Header">
            <Link className = "link" to = "/">
                <img src = "https://i.ibb.co/WzybLQK/del.png" alt = "Facebook Logo" className = "header-logo"></img>
            </Link>
            
            <Link to = "/signup">
                <button className = "header-button">create new account</button>
            </Link>
        </div>
    );
};

export default LoginHeader;