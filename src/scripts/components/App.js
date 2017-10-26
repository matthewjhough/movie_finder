var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var SearchForm = require('../components/SearchForm');

let getAppState = function() {
    return {

    };
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    render() {
        return (
            <div>
                <SearchForm />
            </div>
        );
    }

    _onChange() {
        //this.setState({});
    }

}

module.exports = App;