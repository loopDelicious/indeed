import React, {Component} from 'react';
var {Bar} = require("react-chartjs");

class Graph extends Component {

    render() {

        var datasets = this.props.languages.map( (language) => {

            var data = this.props.locations.map( (location) => {
                return this.props.results[location] ? this.props.results[location][language] : null
            });
            return {
                type: 'bar',
                label: language,
                backgroundColor: 'rgba(220,220,220,0.2)',
                data: data,
                borderColor: 'rgba(255,99,132,0.2)',
                borderWidth: 1,
                yAxisID: "y-axis-1"
            }
        });

        var chartData = {
            labels: this.props.locations,
            datasets: datasets
        };

        var chartOptions = {
            title: {
                display: true,
                text: '# of Job Postings by Programming Language'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(255,99,132,0.2)'
            },
            responsive: true,
            legend: {
                display: true,
            },
            hover: {
                animationDuration: 600
            },
            scales: {
                xAxes: [{
                    type: "linear",
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Location'
                    },
                    categoryPercentage: 0.8,
                    barPercentage: 0,
                    stacked: true
                }],
                yAxes: [{
                    type: "linear",
                    display: true,
                    position: "left",
                    scaleLabel: {
                        display: true,
                        labelString: '# postings'
                    },
                    stacked: true
                }]
            }
        };

        return (
            <div className="graph">
                <Bar
                    data={chartData}
                    options={chartOptions}
                />
            </div>
        )
    };
}

export default Graph;
