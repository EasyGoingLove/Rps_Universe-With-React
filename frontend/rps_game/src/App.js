import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import ProtectedRoute from './auth/protectedRoute';

import HomePage from './view/pages/home';
import Login from './view/pages/login';
import StoryTeller from './view/pages/storyTeller';
import ArcadeRPS from './view/pages/arcadeRps';
import NavMenu from './view/components/navMenu';




function App() {
  return (
   <div>
     <NavMenu/>
     <Router>

     <Switch>

     <Route path="/" exact>
     <HomePage/>
     </Route>

     <Route path="/storyRPS" exact>
     <StoryTeller/>
     </Route>

     <Route path="/loginRps" exact>
     <Login/>
     </Route>
   
     <Route path="/arcadeRPS" exact>
            <ArcadeRPS />
      </Route>

      <Route path="/profileRps" exact>
            <ProtectedRoute />
      </Route>

      
     
     
      <Redirect to="/" />

     </Switch>

     </Router>
   </div>
  );
}

export default App;
