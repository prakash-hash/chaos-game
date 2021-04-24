import React from 'react'
import './App.css'
import Square from './components/Fractals/Square'
import Square2 from './components/Fractals/Square2'
import Square3 from './components/Fractals/Square3'
import Square4 from './components/Fractals/Square4'
import Square5 from './components/Fractals/Square5'
import Square6 from './components/Fractals/Square6'
import Square7 from './components/Fractals/Square7'
import Square8 from './components/Fractals/Square8'
import Pentagon from './components/Fractals/Pentagon'
import Pentagon2 from './components/Fractals/Pentagon2'
import Pentagon3 from './components/Fractals/Pentagon3'
import Triangle from './components/Fractals/Triangle'
import Triangle2 from './components/Fractals/Triangle2'
import Home from './views/Home/Home'
import Header from './components/Header/Header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  
  return (
    
    <Router>
      <div>
        <Header />
        
        <Switch>
          
          <Route path="/triangle">
            <Triangle color="rgb(0, 182, 182)"/>
          </Route>
          <Route path="/triangle2">
            <Triangle2/>
          </Route>
          <Route path="/square">
            <Square color="rgb(177, 0, 0)"/>
          </Route>
          <Route path="/square2">
            <Square2 color="rgb(184, 184, 38)"/>
          </Route>
          <Route path="/square3">
            <Square3 color="rgb(52, 168, 83)"/>
          </Route>
          <Route path="/square4">
            <Square4 color="rgb(255, 100, 199)"/>
          </Route>
          <Route path="/square5">
            <Square5 color="rgb(33, 151, 245)"/>
          </Route>
          <Route path="/square6">
            <Square6 color="rgb(225, 76, 0)"/>
          </Route>
          <Route path="/square7">
            <Square7 />
          </Route>
          <Route path="/square8">
            <Square8 color="rgb(225, 76, 0)"/>
          </Route>
          <Route path="/pentagon">
            <Pentagon color="rgb(52, 168, 83)" n={5}/>
          </Route>
          <Route path="/pentagon2">
            <Pentagon2 color="rgb(196, 221, 121)" n={5} p={1 / 1.618033988749895}/>
          </Route>
          <Route path="/pentagon3">
            <Pentagon3 color="rgba(221, 46, 68,50)" n={5} p={0.5}/>
          </Route>
          <Route path="/pentagon4">
            <Pentagon2 color="rgba(159, 216, 223, 100)" n={5} p={0.5}/>
          </Route>
          <Route path="/pentagon5">
            <Pentagon3 color="rgba(117, 0, 117, 100)" n={5} p={0.6}/>
          </Route>
          <Route path="/hexagon">
            <Pentagon color="rgba(255, 113, 113,100)" n={6} p={0.5}/>
          </Route>
          <Route path="/hexagon2">
            <Pentagon2 color="rgba(159, 216, 223,100)" n={6} p={1/1.5}/>
          </Route>
          <Route path="/hexagon3">
            <Pentagon3 color="rgba(204, 242, 244, 100)" n={6} p={0.5}/>
          </Route>
          <Route path="/hexagon4">
            <Pentagon2 color="rgba(117, 100, 255, 100)" n={6} p={0.5}/>
          </Route>
          <Route path="/hexagon5">
            <Pentagon3 color="rgba(117, 0, 117, 100)" n={6} p={0.6}/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}



export default App
