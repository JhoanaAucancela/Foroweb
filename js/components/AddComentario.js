var React = require('react');
var ReactPropTypes = React.PropTypes;

var DiscussionActions = require('../actions/DiscussionActions');

var AddComentario = React.createClass({
    propTypes: {
    },
    getInitialState : function(){
        return  {
            value : ""
        };
    },
    render: function(){
        return (
            <form onSubmit={this._onSubmit} className="ComentarioForm">
                <textarea name="description" autoFocus onChange={this._onChange} value={this.state.value} placeholder="Qué estas pensando?" className="ComentarioForm-area"></textarea>
                <input type="submit" value="send" className="ComentarioForm-submit"/>
            </form>
        )
    },
    _onChange: function(event) {
      this.setState({
        value: event.target.value
      });
    },
    _onSubmit : function(e){
        e.preventDefault();
        DiscussionActions.create(this.state.value);
        
        this.setState({
          value: ''
        });
    }
});

module.exports = AddComentario;