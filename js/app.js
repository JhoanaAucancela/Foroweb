var React = require('react/addons');

var addons = React.addons;
var CSSTransitionGroup =  addons.CSSTransitionGroup;

var DiscussionStores = require('./stores/DiscussionStores');


var DiscusionUser = require('./components/DiscusionUser');


var App = React.createClass({
    render : function(){
        return (
            <div>
                <DiscusionUser />
            </div>
        )
    },
});

React.render(<App/>, document.getElementById('discussions'));