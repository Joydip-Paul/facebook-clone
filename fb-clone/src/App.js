import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import LoginHeader from './LoginHeader/LoginHeader';
import Login from './Login/Login';
import RegisterHeader from './RegisterHeader/RegisterHeader';
import Register from './Register/Register';
import HomeHeader from './HomeHeader/HomeHeader';
import { auth } from './firebase';
import { useState } from 'react';
import SideBar from './SideBar/SideBar';
import Sidebar2 from './SideBar2/SideBar2';

function App() {
  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser)
    } else {
      setUser(false);
    }
  })
  return (
    <div className="App">
     <Router>
     <Switch>

        <Route path = "/login">
          <LoginHeader></LoginHeader>
          <Login></Login>
        </Route>

        <Route path = "/signup">
          <RegisterHeader></RegisterHeader>
          <Register></Register>
        </Route>

        <Route path = "/">
          <HomeHeader user={user}></HomeHeader>
          <div className="app__page">
              <SideBar  user={user} ></SideBar>
              <div className="app__posts">
               
              </div>
              <Sidebar2></Sidebar2>
          </div>
        </Route>

      </Switch>
     </Router>
    </div>
  );
}

export default App;
