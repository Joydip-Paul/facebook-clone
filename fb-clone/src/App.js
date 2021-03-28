import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import LoginHeader from './LoginHeader/LoginHeader';
import Login from './Login/Login';
import RegisterHeader from './RegisterHeader/RegisterHeader';
import Register from './Register/Register';
import HomeHeader from './HomeHeader/HomeHeader';


function App() {
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
          <HomeHeader></HomeHeader>
        </Route>

      </Switch>
     </Router>
    </div>
  );
}

export default App;
