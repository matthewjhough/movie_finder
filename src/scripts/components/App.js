var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('../components/SearchForm');
var MovieResults = require('../components/MovieResults');

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            movies: AppStore.getMovieResults()
        };

        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    render() {
        let movieResults;
        if(this.state.movies == '') {
            movieResults = '';
        } else {
            movieResults = <MovieResults movies={this.state.movies} />
        }
        return (
            <div>
                <SearchForm />
                {movieResults}
            </div>
        );
    }

    _onChange() {
        this.setState({
            movies: AppStore.getMovieResults()
        });
    }

}

module.exports = App;