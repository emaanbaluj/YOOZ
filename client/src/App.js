import React from 'react';
import './App.css';
import img1 from './images/collage1.jpg'; 
import logo from './images/yoozlogo.png'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
        <a className="App-link" href="http://localhost:5000/">Login with Spotify</a>
        <div className="Y letter">Y</div> {/* Display the letter "Y" */}
        <div className="O1 letter">O</div> {/* Display the letter "O" */}
        <div className="O2 letter">O</div> {/* Display the letter "O" */}
        <div className="Z letter">Z</div> {/* Display the letter "Z" */}
      </header>
      <div className="Image-container">
        <img src={img1} alt="Collage 1" className="App-image" />
      </div>
    </div>
  );
}

export default App;
