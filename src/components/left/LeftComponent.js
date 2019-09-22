/**
 * Created by Rksh on 31-Mar-17.
 */
import React, { Component } from 'react';
import DateComponent from "./DateComponent";
import TimeComponent from "./TimeComponent";
import WeatherComponent from "./WeatherComponent";
import DistanceComponent from "./DistanceComponent";

class LeftComponent extends Component {

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.forceUpdate();
    }

    render() {
        return (
            <div className="col-md-4 col-lg-3">
                <div className="card card-inverse bg-inverse text-white mb-2">
                    <DateComponent />
                    <TimeComponent />
                    <WeatherComponent />
                </div>
                <DistanceComponent />
            </div>
        );
    }
}

export default LeftComponent;
