import React from 'react';
import { Link } from "react-router-dom"
import WeatherForm from "../Components/weatherform"
import WeatherDisplay from '../Components/weatherdisplay'
const API_KEY = 'a227a4a6ad7840f1b5182a07809af609';

class WeatherPage extends React.Component {
    state = {
        forecast: [],
        error: ""
    }
    getWeather = async (e) => {
        e.preventDefault();
        e.persist();

        const city = e.target.elements.city.value;
        var state = e.target.elements.state.value;

        //dict of states for state validation
        var dict = {
            "AL": "alabama", "AK": "alaska", "AZ": "arizona", "AR": "arkansas",
            "CA": "california", "CO": "colorado", "CT": "connecticut", "DE": "delaware", "DC": "district Of columbia",
            "FL": "florida", "GA": "georgia", "HI": "hawaii", "ID": "idaho", "IL": "illinois", "IN": "indiana", "IA": "iowa",
            "KS": "kansas", "KY": "Kentucky", "LA": "louisiana", "ME": "maine", "MD": "maryland", "MA": "massachusetts", "MI": "michigan",
            "MN": "minnesota", "MS": "mississippi", "MO": "missouri", "MT": "montana", "NE": "nebraska", "NV": "nevada", "NH": "new hampshire",
            "NJ": "new jersey", "NM": "new mexico", "NY": "new york",
            "NC": "north carolina", "ND": "north dakota", "OH": "ohio", "OK": "oklahoma", "OR": "oregon",
            "PA": "pennsylvania", "RI": "rhode Island", "SC": "south carolina", "SD": "south dakota", "TN": "tennessee", "TX": "texas",
            "UT": "utah", "VT": "vermont", "VA": "virginia", "WA": "washington", "WV": "west virginia", "WI": "wisconsin", "WY": "wyoming"
        };
        var isState = false;

        //validate state
        for (var key in dict) {
            var value = dict[key];
            if (state.toUpperCase() === key) {
                state = dict[state.toUpperCase()];
                isState = true;
            }

            if (state.toLowerCase() === value) {
                isState = true;
            }
        }

        var data = undefined;

        //fetching forecast
        if (city && isState) {
            const forecast_api_call = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&state=${state}&country=US&key=${API_KEY}&units=I`);
            data = await forecast_api_call.json();
            
            //we only want 10 days, data is 16 days
            var spliced = (data.data).splice(0, 10);
            console.log(data);

            this.setState({
                forecast: spliced,
                city_name: data.city_name,
                state_code: data.state_code,
                timezone: data.timezone,
                error: ""
            }, () => console.log(this.state))
        }
        else {
            this.setState({
                forecast: undefined,
            })
            //error messages if input is wrong
            if (city && state && !isState)
                this.setState({ error: 'Whoops! State is not valid' })
            else if (city)
                this.setState({ error: 'Whoops! You forgot a state' })
            else if ((isState))
                this.setState({ error: 'Whoops! You forgot a city' })
            else
                this.setState({ error: 'Whoops! You forgot a city and state' })
            console.log(this.state)
        }
    }

    //format the days of forecast
    formatDays = () => {
        //only do so if no error
        if (this.state.error === "")
            return this.state.forecast.map((reading, index) => <WeatherDisplay reading={reading} key={index} />);
        else
            return this.state.error;

    }

    render() {
        return (
            <div className="App">
                <h4>Weather Forecast</h4>
                <WeatherForm getWeather={this.getWeather} />
                <div className="row justify-content-center">
                    <h3>{this.state.city_name},{this.state.state_code}</h3>
                </div>
                <div className="row justify-content-center">
                    {this.formatDays()}
                </div>
            </div>
        );
    }
}

export default WeatherPage;