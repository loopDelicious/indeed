import React, {Component} from 'react';

class Legend extends Component {

    propTypes: {
        data: React.PropTypes.array.isRequired
    };

    render() {
        var datasets = this.props.data.datasets.map( (ds) => {
            return (
                <li key={ds.label}>
                    <div className="legend-color-box" style={{ backgroundColor: ds.strokeColor }} ></div>
                    { ds.label }
                </li>
            );
        });

        return (
            <ul className={ this.props.title }>
                { datasets }
            </ul>
        );
    }
}

export default Legend;
