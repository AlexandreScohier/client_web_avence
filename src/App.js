import React from 'react';
import './App.css';
import Routes from "./routes/Routes";
import SelectMechanics from "./component/SelectMechanics";
import TableauGarage from "./component/Garage/GarageTable";
function App() {
  return (
    <div className="App" >
      <SelectMechanics/>
    </div>
  );
}

export default App;
