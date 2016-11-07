import React, {Component} from 'react';
var {Bar} = require("react-chartjs");

class Graph extends Component {

    render() {

        var chartData = {
            labels: this.props.languages,
            datasets: [{
                type: 'bar',
                label: '# of postings',
                backgroundColor: 'rgba(255,99,132,0.2)',
                data: this.props.results,
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                yAxisID: "y-axis-1",
            },]
        };

        var chartOptions = {
            responsive: true,
            title: {
                display: true,
                text: 'Popularity of Programming Languages by US city'
            },
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        };

        return (
            <div className="graph">
                <Bar
                    data={chartData}
                    options={chartOptions}
                    width="600"
                    height="250"
                    redraw
                />
            </div>
        )
    };
}

export default Graph;
