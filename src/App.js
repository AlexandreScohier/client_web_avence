import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Connection from "./component/Connection";
import Menu from "./component/Menu";


function App() {
  return (
      <div className="App">
          <Connection/>
          <Menu/>
      </div>
  );
}

export default App;