Titles = new Mongo.Collection('titles');
if ( !Titles.find().fetch().length ) {
  Meteor.call('titleInsert','I lay my love on you');
  Meteor.call('titleInsert','Unbreak my heart');
  Meteor.call('titleInsert','Only love');
}
