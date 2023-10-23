var React = require('react');

var Discusion = require('./Discusion');
var DiscussionStores = require('../stores/DiscussionStores');

var user = DiscussionStores.getUser();

var ComentarioForm = React.createClass({
    getInitialState : function(){
        return  {
            value : ""
        }
    },
    render: function(){
        return (
            <form onSubmit={this._onSubmit.bind(this)} className="ComentarioForm">
                <textarea name="description" autoFocus onChange={this._onChange} value={this.state.value} placeholder="Comentario" className="ComentarioForm-area"></textarea>
                <input type="submit" value="Publicar" className="ComentarioForm-submit"/>
            </form>
        )
    },
    _onChange: function(event) {
      this.setState({
        value: event.target.value
      });
    },
    _onSubmit : function(e){
        e.preventDefault()
        var user = DiscussionStores.getUser();
        var answers = this._owner.state.answers;
        var level = this._owner.props.level + 1;
        var date = Date();
        var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);

        answers.push(<Discusion key={id} text={this.state.value} user={user} level={level} date={date}/>);
        this._owner.setState({
            answers : answers,
            isReplying : false,
        })
    },

});

module.exports = ComentarioForm;