import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Portfolio from './portfolio.js';
function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  //   <div className="container mt-5">
  //   <h1 className="text-center text-primary">Hello, Bootstrap in React!</h1>
    
  //   <div className="text-center">
  //     <button className="btn btn-success mt-3">
  //       Click Me
  //     </button>
  //   </div>
  // </div>
  <Portfolio />
  );
}

export default App;
