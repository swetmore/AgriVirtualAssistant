import React from "react"
import '../weather.css'
class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input className = "weatherinput" type="text" name="city" placeholder="City..." />
                <input className = "weatherinput" type="text" name="state" placeholder="State..." />
                <button>Show Weather</button>
            </form>
        );
    }
}

export default Form;
