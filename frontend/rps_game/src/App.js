import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


import HomePage from './view/pages/home';
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

     <Route path="/arcadeRPS" exact>
            <ArcadeRPS />
      </Route>
    
      <Redirect to="/" />

     </Switch>

     </Router>
   </div>
  );
}

export default App;
