import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './HomeHeader.css'
import SearchIcon from '@material-ui/icons/Search'
import GroupAddIcon from '@material-ui/icons/GroupAdd'
import NotificationIcon from '@material-ui/icons/Notifications'
import AssignmentIcon from '@material-ui/icons/Assignment'
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import { auth } from '.././firebase'
import { Avatar } from '@material-ui/core';
import './HomeHeader.css'
import { useState } from 'react';

const HomeHeader = ({ user }) => {

    const history = useHistory('');
    if(user === false){
        history.push('/login')
    }
    const Logout = (e) => {
        console.log("Logout");
        e.preventDefault();
        auth.signOut();
        history.push('/login')
    }
    return (
        <div className = "HomeHeader">
            <div className = "HomeHeader-left">
                <Link className = "link" to = "/">
                    <img src = "https://i.pinimg.com/736x/ac/57/3b/ac573b439cde3dec8ca1c6739ae7f628.jpg" alt = "Facebook Logo" className = "header-logo"></img>
                </Link>
            </div>

            <div className = "HomeHeader-inputSearch">
                <input type = "text" placeholder = "search"/>
                <SearchIcon className = "HomeHeader-inputButton"/>
            </div>

            <div className = "HomeHeaderIcon">
                <section>
                    <Avatar className = "homeHeader-avatar" alt = "" src = ""></Avatar>
                    <h3 className = "homeHeader-name">{user?.displayName}</h3>
                </section>
                    <h3 className = "homeHeader-dash">|</h3>
                <section>
                    <h3 className = "homeHeader-name">Group</h3>

                </section>
                    <h3 className = "homeHeader-dash">|</h3>

                    <section>
                    <h3 className = "homeHeader-name">Find Friends</h3>
                </section>
                    <h3 className = "homeHeader-dash">|</h3>

                    <section>
                    <h3 className = "homeHeader-name">Create</h3>
                </section>
                    <h3 className = "homeHeader-dash">|</h3>

                    <section>
                        <GroupAddIcon/>
                    </section>
                    <h3 className = "homeHeader-dash">|</h3>

                    <section>
                        <NotificationIcon/>
                    </section>
                    <h3 className = "homeHeader-dash">|</h3>

                    <section>
                        <AssignmentIcon/>
                    </section>
                    <h3 className = "homeHeader-dash">|</h3>

                   <section>
                        <div className = "dropDown">
                            <ArrowDropDown className = "dropDown-icon"/>
                            <div className = "dropDown-content">
                            <a><p>General</p></a>
                            <a><p>Security</p></a>
                            <a><p>Privacy</p></a>
                            <a><p>Language</p></a>
                            <a><p>Settings</p></a>
                            <a onClick={Logout}><p>Logout</p></a>
                            </div>
                        </div>
                   </section>
                   <h3 className = "homeHeader-dash">|</h3>
            </div>
        </div>

        
    );
};

export default HomeHeader;