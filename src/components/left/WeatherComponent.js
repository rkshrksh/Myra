/**
 * Created by Rksh on 31-Mar-17.
 */
import React, {Component} from 'react';
import moment from 'moment';

class WeatherComponent extends Component {

    constructor() {
        super();
        this.state = {
            temperature: '',
            summary: '',
            sunrise: '',
            sunset: '',
            iconId: '800'
        };
        let API_URL = "http://api.openweathermap.org/data/2.5/weather?appid=f5a2414f31bd9db23cf86aa52101eeef&units=metric";
        this.getWeatherFromApiAsync(API_URL);
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            (60 * 60 * 1000)
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.getWeatherFromApiAsync();
    }

    getWeatherFromApiAsync(API) {
        if ("geolocation" in navigator) { //check geolocation available
            //try to get user current location using getCurrentPosition() method
            navigator.geolocation.getCurrentPosition((position) => {
                this.fetchWeather(API, position.coords.latitude, position.coords.longitude);
            }, (err) => {
                this.fetchWeather(API, '28.31626', '76.91504');
                // this error to solve for chrome location
                console.error(err.message);
            });
        }
        else {
            console.log("Browser doesn't support geolocation!");
        }
    }

    fetchWeather(API_URL, lat, lang) {
        let URL = API_URL +
            "&lat=" + lat +
            "&lon=" + lang;
        fetch(URL)
            .then((response) => {
                return response.json();
            })
            .then((json) => {
                this.setState({
                    temperature: json.main.temp + "°C",
                    summary: json.weather[0].main,
                    sunrise: moment.unix(json.sys.sunrise).format('hh:mm A'),
                    sunset: moment.unix(json.sys.sunset).format('hh:mm A'),
                    iconId: json.weather[0].id
                });
            });
    }

    render() {
        let icon = "iconBig wi wi-owm-" + this.state.iconId;
        return (
            <div className="card-footer">
                <div className="row lead">
                    <div className="col-6 text-right"><i id="weatherIcon" className={icon}/></div>
                    <div className="col-6"><span id="temperature">{this.state.temperature}</span><br/>
                        <span id="summary">{this.state.summary}</span></div>
                </div>
                <hr/>
                <div className="row text-center">
                    <div className="col-6"><i className="iconMid wi wi-sunrise"/><br/>
                        <span id="sunrise"/>{this.state.sunrise}</div>
                    <div className="col-6"><i className="iconMid wi wi-sunset"/><br/>
                        <span id="sunset"/>{this.state.sunset}</div>
                </div>
            </div>
        );
    }
}

export default WeatherComponent;
