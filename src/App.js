import './App.css';
import Navbar from './components/Navbar';
import Corousel from './components/Corousel';
import Info from './components/Info';
import Sign from "./pages/sign";
import {BrowserRouter as Router , Route, Switch} from "react-router-dom";

function App() {
  return <div className="App">
    <Router>
    <Navbar/>
    <Corousel/>
    <Info/>
    </Router>
  </div>
}

export default App;
