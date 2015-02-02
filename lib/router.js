Router.configure({
  layoutTemplate: 'layout',
});
Router.route( '/', {
  name:'home',
  waitOn: function() {
    return Meteor.subscribe('titles');
  }
});
