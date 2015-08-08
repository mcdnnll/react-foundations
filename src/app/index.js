
var React = require('react');
var Greeting = require('./components/greeting/greeting.react');

React.render(
    <Greeting name="World" />,
    document.getElementById('app')
);