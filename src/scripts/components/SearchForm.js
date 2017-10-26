var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

class SearchForm extends React.Component {
    render() {
        return (
            <div className="search-form">
                <h1 classNam="text-center">Search for a Movie</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="enter a movie title..." />
                    </div>
                    <button className="btn btn-primary btn-block">Search Movies</button>
                </form>
            </div>
        )
    }
    onSubmit(e) {
        e.preventDefault();
        let movie = {
            title: this.refs.title.value
        };

        AppActions.searchMovies(movie);
    }
}

module.exports = SearchForm;