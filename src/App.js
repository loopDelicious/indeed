import React, {Component} from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {

    languages = ['Python', 'Java', 'JavaScript', 'Ruby', 'PHP', 'C', 'C++', 'C#', 'Objective-C', '.NET', 'Go', 'Golang', 'Rust', 'Elm', 'Lisp', 'Scala', 'Swift', 'iOS', 'Android', 'R', 'SQL', 'VB', 'HTML', 'CSS'];
    locations = ['Seattle', 'San Francisco', 'Los Angeles', 'Chicago', 'Denver', 'Austin', 'New York City', 'Boston'];

    state = {};

    componentDidMount = () => {

        var site_type = "employer";
        var job_type = "fulltime";
        var limit = 3000;
        var fromage = 15;
        var filter = 0;
        var latlong = 0;
        var country = "us";
        var userip = '1.2.3.4';
        var version = 2;
        var format = "json";

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
                        this.setState({
                            [location + language]: res.totalResults
                        });
                        console.log(location, language, res.totalResults);
                    }
                });
            });
        });

        console.log('done');
    };

    render() {

        var columnHeaders = this.languages.map( (language) => {
           return <td key={language}>{language}</td>;
        });

        var rows = this.locations.map( (location) => {

            var languageValues = this.languages.map( (language) => {
                return <td key={language}>{this.state[location + language]}</td>
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
            </div>
        );
    }
}

export default App;
