"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Sample App</h1>
                <p>React, React Router, and Flux for ultra-responisive web page.</p>
            </div>
        );
    }
});

module.exports = Home;