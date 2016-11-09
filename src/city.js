import React, {Component} from 'react';
var RadarChart = require("react-chartjs").Radar;

class City extends Component {

    render() {

        var sanfrancisco = this.props.languages.map( (language) => {
            return this.props.results['San Francisco'] ? this.props.results['San Francisco'][language] : null
        });

        var denver = this.props.languages.map( (language) => {
            return this.props.results['Denver'] ? this.props.results['Denver'][language] : null
        });

        var chicago = this.props.languages.map( (language) => {
            return this.props.results['Chicago'] ? this.props.results['Chicago'][language] : null
        });

        var chartData = {
            labels: this.props.languages,
            type: 'radar',
            datasets: [{
                label: "San Francisco",
                fillColor: "rgba(153,255,51,0.4)",
                strokeColor: "rgba(153,255,51,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: sanfrancisco
            }, {
                label: "Denver",
                fillColor: "rgba(255,153,0,0.4)",
                strokeColor: "rgba(255,153,0,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: denver
            }, {
                label: "Chicago",
                fillColor: "rgba(200,20,20,0.4)",
                strokeColor: "rgba(200,20,20,0,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: chicago
            }]
        };

        var chartOptions = {
            responsive: true,
        };

        return (
            <div className="graph">
                <h2>City Comparison</h2>
                <RadarChart
                    data={chartData}
                    options={chartOptions}
                />
            </div>
        )
    };
}

export default City;
