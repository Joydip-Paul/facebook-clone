import React from 'react';

const Register = () => {
    return (
        <div className = "register">
            <div className = "register-container">
                <h1>Create A New Account</h1>
                <h3>It's quick and easy</h3>

                <form>
                    <center>
                        <input type = "name" placeholder = "First Name" className = "register-name"/>
                        <input type = "name" placeholder = "Last  Name" className = "register-name"/>
                    </center>
                    <center>
                        <input type = "email" placeholder = "email" className = ""/>
                    </center>
                    <center>
                        <input type = "password" placeholder = "password" className = ""/>
                    </center>
                    <h5 className = "register-date">Date of Birth</h5>
                    <select>
                        <option value = "1997">1997</option>
                        <option value = "1998">1998</option>
                        <option value = "1999">1999</option>
                        <option value = "2000">2000</option>
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
                        <button type = "submit" className = "register-register">Sign up</button>
                    </center>
                </form>
            </div>
        </div>
    );
};

export default Register;