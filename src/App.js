import React from "react";
import { 
  BrowserRouter,
  Switch,
  Route
 } from 'react-router-dom'
import './App.css';
import Home from './Component/Home/Home';
 import Login from './Component/Login/Login';
 import Main from "./Component/Main/Main";
 import Emergency from "./Component/Emergency/Emergency";
import Signup from "./Component/Signup/Signup";
import Relaxme from "./Component/Relaxme/Relaxme";
function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/main" exact component={Main} />
      <Route path="/emergency" exact component={Emergency} />
      <Route path="/relaxme" exact component={Relaxme} />

    </Switch>
  </BrowserRouter>

  // <div>
  //   <Home />

  //   {/* <Login /> */}

  //   {/* <Signup /> */}

  //   {/* <Main /> */}

  //   {/* <Emergency />  */}

  //    {/* <Relaxme /> */}

  // </div>

  );
}

export default App;
