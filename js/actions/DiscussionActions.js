
var DiscussionDispatcher = require('../dispatchers/DiscussionDispatcher');
var DiscussionConstans = require('../constans/DiscussionConstans');

var DiscussionActions = {
    create : function(text){
        DiscussionDispatcher.dispatch({
          actionType: DiscussionConstans.DISCUSSION_CREATE,
          text: text
        });
    },
    setUser : function(user){
        DiscussionDispatcher.dispatch({
          actionType: "SET_USER",
          user : user
        });
    }
}

module.exports = DiscussionActions;

