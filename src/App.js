import React from "react";
import {useState, useEffect} from "react";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-material.css'
import './App.css';

function App() {
  const [gloves, setGloves] = useState([]);


  useEffect(() => {
    fetch("http://localhost:8080/api/gloveses")
    .then(response => response.json())
    .then(data => setGloves(data._embedded.gloveses))
    .catch(err => console.error(err))
  }, [])
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
