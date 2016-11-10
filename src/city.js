import React, {Component} from 'react';
var RadarChart = require("react-chartjs").Radar;

class City extends Component {

    render() {

        var seattle = this.props.languages.map( (language) => {
            return this.props.results['Seattle'] ? this.props.results['Seattle'][language] : null
        });
        var sanfrancisco = this.props.languages.map( (language) => {
            return this.props.results['San Francisco'] ? this.props.results['San Francisco'][language] : null
        });
        var losangeles = this.props.languages.map( (language) => {
            return this.props.results['Los Angeles'] ? this.props.results['Los Angeles'][language] : null
        });
        var chicago = this.props.languages.map( (language) => {
            return this.props.results['Chicago'] ? this.props.results['Chicago'][language] : null
        });
        var denver = this.props.languages.map( (language) => {
            return this.props.results['Denver'] ? this.props.results['Denver'][language] : null
        });
        var austin = this.props.languages.map( (language) => {
            return this.props.results['Austin'] ? this.props.results['Austin'][language] : null
        });
        var newyorkcity = this.props.languages.map( (language) => {
            return this.props.results['New York City'] ? this.props.results['New York City'][language] : null
        });
        var boston = this.props.languages.map( (language) => {
            return this.props.results['Boston'] ? this.props.results['Boston'][language] : null
        });

        var chartData = {
            labels: this.props.languages,
            type: 'radar',
            datasets: [{
                label: "Chicago",
                fillColor: "rgba(0,206,209,0.4)",
                strokeColor: "rgba(0,206,209,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: chicago
            }, {
                label: "Boston",
                fillColor: "rgba(255,50,147,0.4)",
                strokeColor: "rgba(255,50,147,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: boston
            }]
        };

        var chartOptions = {
            responsive: true,
        };

        return (
            <div className="graph">
                <h2>City Comparison</h2>
                <p>Raw popularity of languages - the shape of the radar indicates proportional differences between cities.</p>
                <RadarChart
                    data={chartData}
                    options={chartOptions}
                />
            </div>
        )
    };
}

export default City;
