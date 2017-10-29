var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var Movie = require('./Movie.js');

class MovieResults extends React.Component {
    render() {
        return (
            <div>
                <h3 className="text-center"> 
                    Results
                </h3>
                {
                    this.props.movies.map((movie, i) => {
                        return (
                            <Movie movie={movie} key={i} />
                        );
                    })
                }
            </div>
        )
    }
}

module.exports = MovieResults;