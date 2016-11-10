import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';
import Graph from './graph.js';
import City from './city.js';

class App extends Component {

    // languages = ['Python', 'Java', 'JavaScript', 'Ruby', 'PHP', 'C', 'C++', 'C#', '.NET', 'Go', 'Scala', 'Objective-C', 'Swift', 'iOS', 'Android', 'R', 'SQL', 'HTML', 'CSS'];
    // remove lisp, elm, rust, VB, Golang from full set
    languages = ['Python', 'Java', 'JavaScript', 'Ruby', 'C', 'C++', 'C#', 'SQL'];  // test set
    locations = ['Seattle', 'San Francisco', 'Los Angeles', 'Chicago', 'Denver', 'Austin', 'New York City', 'Boston'];

    state = {};
    count=0;

    componentWillMount = ()  =>{
        // library is mutating original language array
        this.langs = JSON.parse(JSON.stringify(this.languages));
    };

    componentDidMount = () => {

        var site_type = "employer";  // Site type. To show only jobs from job boards use "jobsite". For jobs from direct employer websites use "employer".
        var job_type = "fulltime";  // 	Job type. Allowed values: "fulltime", "parttime", "contract", "internship", "temporary".
        var limit = 3000;  // Maximum number of results returned per query. Default is 10
        var fromage = 15;  // Number of days back to search.
        var filter = 1;  // Filter duplicate results. 0 turns off duplicate job filtering. Default is 1.
        var latlong = 0;  // If latlong=1, returns latitude and longitude information for each job result. Default is 0.
        var country = "us";  // Search within country specified. Default is us See below for a complete list of supported countries.
        var userip = '1.2.3.4';  // The IP number of the end-user to whom the job results will be displayed. This field is required.
        var version = 2;  // Version. Which version of the API you wish to use. All publishers should be using version 2.
        var format = "json";  // Format. Which output format of the API you wish to use. The options are "xml" and "json". If omitted or invalid, the XML format is used.

        this.languages.forEach( (language) => {
            var query = "software engineer " + language;
            this.locations.forEach( (location) => {
                $.ajax({
                    url: "http://localhost:5000",
                    method: 'get',
                    data: {
                        q: query,
                        l: location,
                        sort: null,
                        radius: null,
                        st: site_type,
                        jt: job_type,
                        start: null,
                        limit: limit,
                        fromage: fromage,
                        filter: filter,
                        latlong: latlong,
                        co: country,
                        chnl: null,
                        userip: userip,
                        useragent: null,
                        v: version,
                        format: format
                    },
                    success: (res) => {
                        if (!this.state[location]) {
                            this.state[location] = {}
                        }
                        this.state[location][language] = res.totalResults;

                        this.count++;
                        this.setState(this.state);
                    }
                });
            });
        });
    };

    render() {

        var columnHeaders = this.languages.map( (language) => {
           return <td key={language}>{language}</td>;
        });

        var rows = this.locations.map( (location) => {

            var languageValues = this.languages.map( (language) => {
                return <td key={'table'+language}>{this.state[location] ? this.state[location][language] : null}</td>
            });

            return (
                <tr key={location}>
                    <td>{location}</td>
                    {languageValues}
                </tr>
            )
        });

        return (
            <div className="App">
                <h2>Software Engineering Jobs by Programming Language</h2>
                <p>Raw number of job postings within the last 15 days on indeed.com (results cached daily). Full time positions from direct employer websites.  </p>
                <table>
                    <thead>
                        <tr>
                            <td />
                            {columnHeaders}
                        </tr>
                    </thead>

                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <hr />
                <Graph
                    languages={this.languages}
                    locations={this.locations}
                    results={this.state}
                />
                <hr />
                {this.count === this.languages.length * this.locations.length ?
                    <City
                    languages={this.langs}
                    locations={this.locations}
                    results={this.state}
                    /> : null}
                <hr />
            </div>
        );
    }
}

export default App;
