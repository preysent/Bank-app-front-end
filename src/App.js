import './App.css';
import Banker from './pages/Banker';
import Home from './pages/Home';
import Customer from './pages/Customer'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BankerLogin from './pages/BankerLogin';
import Nanbar from './components/Nanbar';

function App() {


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
            <Home />
          </Route>
        </Switch>
        
      </Router>

    </div>
  );
}

export default App;
