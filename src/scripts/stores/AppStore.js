var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppApi = require('../utils/appApi');

var CHANGE_EVENT = 'change';

var _movies = [];
var _selected = '';

var AppStore = assign({}, EventEmitter.prototype, {

    setMovieResults(movies) {
        _movies = movies;
    },

    getMovieResults() {
        return _movies;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on('change', callback);
    },

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register((payload) => {
    var action = payload.action;

    switch(action.actionType) {
        case AppConstants.SEARCH_MOVIES: 
            AppApi.searchMovies(action.movie);
            AppStore.emit(CHANGE_EVENT);
            break; 
        case AppConstants.RECIEVE_MOVIE_RESULTS: 
            AppStore.setMovieResults(action.movies);
            AppStore.emit(CHANGE_EVENT);
            break; 
    }


    return true;
});

module.exports = AppStore;