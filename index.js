import react from 'react';

import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <Router>
      <App />
    </Router>

  
);