import React from 'react';
import { Router } from './app/router/router';
import {Nav} from './app/Component/Nav';
import {LoginScreen} from './app/screens/authscreens/LoginScreen';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3>

     <Navigation/>

     <Switch>
       <Route path='/' component={Home} exact/>
       <Route path='/department' component={Department}/>
       <Route path='/employee' component={Employee}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
