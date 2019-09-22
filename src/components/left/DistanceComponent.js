import React, { Component } from 'react';

class DistanceMatrix extends Component {

    constructor() {
        super();
        this.state = {
            distance: '...',
            duration: '...'
        }
    }
    getDistanceFromApi() {
        let URL = "http://localhost:3001/api/distance";
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                this.setState({
                    distance: response.json.rows[0].elements[0].distance.text,
                    duration: response.json.rows[0].elements[0].duration.text
                })
            });
    }

    componentWillMount() {
        this.getDistanceFromApi();
    }

    render() {
        return (
            <div className="card card-inverse bg-inverse text-white mb-2">
                <div className="card-block text-center text-justify">
                    <span className="lead"><i className="fa fa-car fa-lg" aria-hidden="true" /> {this.state.distance} in {this.state.duration}</span>
                </div>
            </div>
        )
    }
}

export default DistanceMatrix;