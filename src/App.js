import React from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';

import Characters from './components/Characters.component'
import CharDetails from './components/CharDetails.component';
import MyNavbar from './components/MyNavbar'
import './App.css'





function App() {

  return (
    <div className="my-app">
      <Router>
        <MyNavbar/>
        
        <Route path="/" exact component={Characters}/> 
        
        <Route path="/characters/:name" component={CharDetails} />
      </Router>
    </div>
  );
}

export default App;
