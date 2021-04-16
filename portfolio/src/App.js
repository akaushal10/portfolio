import React from "react";
import "./static/styles/App.css";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
function App() {
  return (
  <Router>
    <Provider store = {store}>
    <Portfolio/>      
    </Provider>
  </Router>
  );
}

export default App;
