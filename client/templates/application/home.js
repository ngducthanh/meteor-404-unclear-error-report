Template.home.helpers({
  titles: function() {
    console.log(this.title);
    return Titles.find();
  }
});
Template.home.rendered = function() {
  console.log(this.data);
}

