import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Connection from "./component/Connection";
import Menu from "./component/Menu";
import TableauGarage from "./component/Tableau";


function App() {
  return (
      <div className="App">
          <Connection/>
          <Menu/>
          <TableauGarage/>
      </div>
  );
}

export default App;