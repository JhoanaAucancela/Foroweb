var React = require('react')
var DiscussionStores = require('../stores/DiscussionStores');


var Footer = React.createClass({
    getInitialState : function(){
        return {
            user : DiscussionStores.getUser()
        }
    },
    render : function(){
        return (
            <footer className="Footer">Hi {this.state.user.name} <img src={this.state.user.avatar} alt="40" with="40" /></footer>
        )
    }
})

module.exports = Footer;