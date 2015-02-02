Meteor.methods({
  'titleInsert': function(title) {
    var item = {title: title};
    Titles.insert(item);
  }
});