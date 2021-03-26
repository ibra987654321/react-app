import './App.css';
import About from './Components/jsx/About';
import Content from './Components/jsx/Content';
import Header from './Components/jsx/Header';
import Navbar from './Components/jsx/Navbar';
import Sidbar from "./Components/jsx/Sidbar";
import { BrowserRouter, Route, Switch  } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter >
    <Switch>
          <div className="wrapper">
            <Header/>
            <Navbar/>
      <Route exact  path="/About" component={About}/>
      <Route exact  path="/Content" component={Content}/>
      <Route   path="/Sidbar" render={() => <Sidbar 
        review={props.state.ReviewsData} 
        message={props.state.MessageData} 
        dispatch={props.dispatch}
        />}/>
          </div>
      </Switch>    
    </BrowserRouter>
  );
}
export default App;
