import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
          <div><Header/></div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
     
      </header>
    </div>

  );
}


const Header = () => {
  return (
    <div className="header">
      <a href="#" >Home-</a>
      <a href="#" >services-</a>
      <a href="#" >about-</a>
      <a href="#" >Pricing</a>
  </div>
  )
}

export default App;
