import React, {Component} from 'react';
var BarChart = require("react-chartjs").Bar;
import Legend from './legend.js';

class Graph extends Component {

    componentDidMount = () => {
        var legend = this.refs.chart.getChart().generateLegend();

        this.setState({
            legend: legend
        });
    };

    render() {

        var legend = this.state && this.state.legend || '';

        // var datasets = this.props.languages.map( (language) => {
        //
        //     var data = this.props.locations.map( (location) => {
        //         return this.props.results[location] ? this.props.results[location][language] : null
        //     });
        //     return {
        //         type: 'bar',
        //         label: language,
        //         fillColor: 'rgba(220,220,220,0.2)',
        //         strokeColor: 'rgba(153,50,204,0.2)',
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: data,
        //     }
        // });
        //
        // var chartData = {
        //     labels: this.props.locations,
        //     datasets: datasets
        // };

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
            type: 'line',
            datasets: [{
                label: "Seattle",
                fillColor: "rgba(153,255,51,0.4)",
                strokeColor: "rgba(153,255,51,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: seattle
            }, {
                label: "San Francisco",
                fillColor: "rgba(0,206,209,0.4)",
                strokeColor: "rgba(0,206,209,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: sanfrancisco
            }, {
                label: "Los Angeles",
                fillColor: "rgba(255,215,0,0.4)",
                strokeColor: "rgba(255,215,0,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: losangeles
            }, {
                label: "Chicago",
                fillColor: "rgba(255,50,147,0.4)",
                strokeColor: "rgba(255,50,147,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: chicago
            }, {
                label: "Denver",
                fillColor: "rgba(153,50,204,0.4)",
                strokeColor: "rgba(153,50,204,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: denver
            }, {
                label: "Austin",
                fillColor: "rgba(255,153,0,0.4)",
                strokeColor: "rgba(255,153,0,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: austin
            }, {
                label: "New York City",
                fillColor: "rgba(218,112,214,0.4)",
                strokeColor: "rgba(218,112,214,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: newyorkcity
            }, {
                label: "Boston",
                fillColor: "rgba(0,0,255,0.4)",
                strokeColor: "rgba(0,0,255,1)",
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
            <div className="graph clearfix">
                <h2>Software Engineering Jobs by Programming Language</h2>
                <BarChart
                    ref="chart"
                    data={chartData}
                    options={chartOptions}
                />
                <Legend
                    data={chartData}
                    title="city-languages"
                    dangerouslySetInnerHTML={{ __html: legend }}
                />
            </div>
        )
    };
}

export default Graph;
