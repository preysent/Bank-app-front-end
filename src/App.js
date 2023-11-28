import './App.css';
import Banker from './pages/Banker';
import Home from './pages/Home';
import Customer from './pages/Customer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useContext, useEffect } from 'react';
import userContext from './Context/userContext';
import BankerLogin from './pages/BankerLogin';
import Nanbar from './components/Nanbar';

function App() {

  const {getUser, user} = useContext(userContext)

  useEffect(()=>{
    if(!user)
    getUser()
  },[getUser])
  return (
    <div >
      <Router>
        <Nanbar/>
        <Switch>
          <Route path="/customer">
            <Customer />
          </Route>
          <Route path="/banker">
            <Banker />
          </Route>
          <Route path="/BankerLogin">
            <BankerLogin/>
          </Route>
          <Route path="/">
            <Home user= {user}/>
          </Route>
        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
