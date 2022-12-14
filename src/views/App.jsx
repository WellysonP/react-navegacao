import React from "react";
import {BrowserRouter as Router } from "react-router-dom";
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import './App.css'
import Param from "./examples/Param";


const App = () => {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Content />
            </Router>
        </div>
    )
}
export default App