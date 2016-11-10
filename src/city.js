import React, {Component} from 'react';
var RadarChart = require("react-chartjs").Radar;

class City extends Component {

    city1 = "San Francisco";
    city2 = "Seattle";

    state = {
        city1: this.city1,
        city2: this.city2
    };

    handleSelection1 = (event) => {
        this.setState({
            city1: event.target.value
        });
    };

    handleSelection2 = (event) => {
        this.setState({
            city2: event.target.value
        });
    };

    render() {

        var city1data = this.props.languages.map( (language) => {
            return this.props.results[this.state.city1] ? this.props.results[this.state.city1][language] : null
        });

        var city2data = this.props.languages.map( (language) => {
            return this.props.results[this.state.city2] ? this.props.results[this.state.city2][language] : null
        });

        var chartData = {
            labels: this.props.languages,
            type: 'radar',
            datasets: [{
                label: this.state.city1,
                fillColor: "rgba(0,206,209,0.4)",
                strokeColor: "rgba(0,206,209,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: city1data
            }, {
                label: this.state.city2,
                fillColor: "rgba(255,50,147,0.4)",
                strokeColor: "rgba(255,50,147,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: city2data
            }]
        };

        var chartOptions = {
            responsive: true,
        };

        return (
            <div className="radar graph">
                <h2>City Comparison</h2>
                <p>Raw popularity of programming languages - select 2 cities to compare.</p>
                <p>Does not account for population variance, the shape of the radar indicates proportional differences between cities.</p>
                <select className="city-selection" ref="city1" onChange={this.handleSelection1.bind(this)}>
                    { this.props.locations.map((location) => {
                        return <option value={location} selected={location == this.city1 ? 'selected' : null }>{location}</option>
                        })
                    }
                </select>
                <select className="city-selection" ref="city2" onChange={this.handleSelection2.bind(this)}>
                    { this.props.locations.map((location) => {
                        return <option value={location} selected={location == this.city2 ? 'selected' : null }>{location}</option>
                    })
                    }
                </select>
                <h3>{this.state.city1} vs. {this.state.city2}</h3>
                <RadarChart
                    data={chartData}
                    options={chartOptions}
                    redraw
                />
            </div>
        )
    };
}

export default City;
