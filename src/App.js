import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/Sign-up";
import Error from "./components/Error";
import Success from './components/Success';
import UserHome from './components/user/UserHome';

class App extends Component{
  render(){
    return (
      <div>
        <Switch>
          <Route exact path='/'component={Home}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/sign-up' component={SignUp} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/user' component={UserHome} />
          <Route component={Error} />
        </Switch>
        {/* 
        <center>
        <form>
        
        {/*<Link href="#/sign-up">Don`t have account Sign Up</Link>
      </form>
        </center> */}
      </div>
    )
  }
}     

export default App;