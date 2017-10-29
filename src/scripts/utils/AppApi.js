var AppActions = require('../actions/AppActions');

module.exports = {
    searchMovies(movie) {
        $.ajax({
            type:'GET',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=c2b3312&s='+ movie.title,
            dataType: 'json',
            cache: false,
            success: function(data) {
                AppActions.recieveMovieResults(data.Search);
            }.bind(this),
            error: function(xhr, status, error) {
                alert(error)
            }.bind(this)
        });
    }
}