var App = require('./components/App');
var React = require('react');
var ReactDom = require('react-dom');
var AppApi = require('./utils/appApi.js');

ReactDom.render(
    <App />,
    document.getElementById('app')
);

