var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

let AppActions = {
    searchMovies(movie) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.SEARCH_MOVIES,
            movie: movie
        });
    },
    recieveMovieResults(movies) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.RECIEVE_MOVIE_RESULTS,
            movies: movies
        });
    }
};

module.exports = AppActions;