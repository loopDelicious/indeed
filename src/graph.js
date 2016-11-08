import React, {Component} from 'react';
var LineChart = require("react-chartjs").Line;

class Graph extends Component {

    render() {

        var datasets = this.props.languages.map( (language) => {

            var data = this.props.locations.map( (location) => {
                return this.props.results[location] ? this.props.results[location][language] : null
            });
            return {
                type: 'line',
                label: language,
                fillColor: 'rgba(220,220,220,0.2)',
                strokeColor: 'rgba(153,50,204,0.2)',
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: data,
            }
        });

        var chartData = {
            labels: this.props.locations,
            datasets: datasets
        };

        var chartOptions = {
            responsive: true,
            // legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
        };

        return (
            <div className="graph">
                <h2>Total Postings</h2>
                <LineChart
                    data={chartData}
                    options={chartOptions}
                />
            </div>
        )
    };
}

export default Graph;
