import React, {Component} from 'react';
var BarChart = require("react-chartjs").Bar;

class Graph extends Component {

    render() {

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

        // ['Python', 'Java', 'JavaScript', 'Ruby', 'C', 'C++', 'C#', 'SQL']
        // var python = this.props.locations.map( (location) => {
        //     return this.props.results['Python'] ? this.props.results['Python'][location] : null
        // });
        // var java = this.props.locations.map( (location) => {
        //     return this.props.results['Java'] ? this.props.results['Java'][location] : null
        // });
        // var javascript = this.props.locations.map( (location) => {
        //     return this.props.results['JavaScript'] ? this.props.results['JavaScript'][location] : null
        // });
        // var ruby = this.props.locations.map( (location) => {
        //     return this.props.results['Ruby'] ? this.props.results['Ruby'][location] : null
        // });
        // var c = this.props.locations.map( (location) => {
        //     return this.props.results['C'] ? this.props.results['C'][location] : null
        // });
        // var cplusplus = this.props.locations.map( (location) => {
        //     return this.props.results['C++'] ? this.props.results['C++'][location] : null
        // });
        // var csharp = this.props.locations.map( (location) => {
        //     return this.props.results['C#'] ? this.props.results['C#'][location] : null
        // });
        // var sql = this.props.locations.map( (location) => {
        //     return this.props.results['SQL'] ? this.props.results['SQL'][location] : null
        // });
        //
        // var chartData = {
        //     labels: this.props.languages,
        //     type: 'line',
        //     datasets: [{
        //         label: "Python",
        //         fillColor: "rgba(153,255,51,0.4)",
        //         strokeColor: "rgba(153,255,51,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: python
        //     }, {
        //         label: "Java",
        //         fillColor: "rgba(153,255,51,0.4)",
        //         strokeColor: "rgba(153,255,51,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: java
        //     }, {
        //         label: "JavaScript",
        //         fillColor: "rgba(153,255,51,0.4)",
        //         strokeColor: "rgba(153,255,51,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: javascript
        //     }, {
        //         label: "Ruby",
        //         fillColor: "rgba(200,20,20,0.4)",
        //         strokeColor: "rgba(200,20,20,0,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: ruby
        //     }, {
        //         label: "C",
        //         fillColor: "rgba(255,153,0,0.4)",
        //         strokeColor: "rgba(255,153,0,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: c
        //     }, {
        //         label: "C++",
        //         fillColor: "rgba(255,153,0,0.4)",
        //         strokeColor: "rgba(255,153,0,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: cplusplus
        //     }, {
        //         label: "C#",
        //         fillColor: "rgba(255,153,0,0.4)",
        //         strokeColor: "rgba(255,153,0,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: csharp
        //     }, {
        //         label: "SQL",
        //         fillColor: "rgba(255,153,0,0.4)",
        //         strokeColor: "rgba(255,153,0,1)",
        //         pointColor: "rgba(220,220,220,1)",
        //         pointStrokeColor: "#fff",
        //         pointHighlightFill: "#fff",
        //         pointHighlightStroke: "rgba(220,220,220,1)",
        //         data: sql
        //     }]
        // };
        var seattle = this.props.results ? this.props.languages.map( (language) => {
                return this.props.results['Seattle'] ? this.props.results['Seattle'][language] : null
        }) : null;
        var sanfrancisco = this.props.results ? this.props.languages.map( (language) => {
                return this.props.results['San Francisco'] ? this.props.results['San Francisco'][language] : null
        }) : null;
        var losangeles = this.props.results ? this.props.languages.map( (language) => {
                return this.props.results['Los Angeles'] ? this.props.results['Los Angeles'][language] : null
        }) : null;
        var chicago = this.props.results ? this.props.languages.map( (language) => {
                return this.props.results['Chicago'] ? this.props.results['Chicago'][language] : null
        }) : null;
        var denver = this.props.results ? this.props.languages.map( (language) => {
                return this.props.results['Denver'] ? this.props.results['Denver'][language] : null
        }) : null;
        var austin = this.props.results ? this.props.languages.map( (language) => {
                return this.props.results['Austin'] ? this.props.results['Austin'][language] : null
        }) : null;
        var newyorkcity = this.props.results ? this.props.languages.map( (language) => {
                return this.props.results['New York City'] ? this.props.results['New York City'][language] : null
        }) : null;
        var boston = this.props.results ? this.props.languages.map( (language) => {
                return this.props.results['Boston'] ? this.props.results['Boston'][language] : null
        }) : null;

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
                fillColor: "rgba(154,205,50,0.4)",
                strokeColor: "rgba(154,205,50,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: losangeles
            }, {
                label: "Chicago",
                fillColor: "rgba(0,0,255,0.4)",
                strokeColor: "rgba(0,0,255,0,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: chicago
            }, {
                label: "Denver",
                fillColor: "rgba(255,153,0,0.4)",
                strokeColor: "rgba(153,50,204,1)",
                pointColor: "rgba(153,50,204,1)",
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
                fillColor: "rgba(255,50,147,0.4)",
                strokeColor: "rgba(255,50,147,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: newyorkcity
            }, {
                label: "Boston",
                fillColor: "rgba(255,215,0,0.4)",
                strokeColor: "rgba(255,215,0,1)",
                pointColor: "rgba(220,220,220,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: boston
            }]
        };

        var chartOptions = {
            responsive: true,
            // legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
        };

        return (
            <div className="graph">
                <h2>Total Postings</h2>
                <BarChart
                    data={chartData}
                    options={chartOptions}
                />
            </div>
        )
    };
}

export default Graph;
