Meteor.publish('titles', function() {
  return Titles.find();
});