import React, {Component} from 'react';
import LeftComponent from "./components/left/LeftComponent";

import CenterComponent from "./components/center/CenterComponent";
import RightComponent from "./components/right/RightComponent";
import FooterComponent from "./components/FooterComponent";

import './App.css'
require('dotenv').config()

class App extends Component {
    render() {
        return (
            <div className="container-fluid mt-2">
                <div className="row justify-content-between">
                    <LeftComponent/>
                    <CenterComponent/>
                    <RightComponent/>
                </div>
                <FooterComponent/>
            </div>
        );
    }
}

export default App;
