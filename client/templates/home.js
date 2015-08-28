Template.home.helpers({
   appsList: function(){
       return Apps.find({}, {sort: {title: 0}});
   }
});
Template.home.events({
   'click button.lazyload': function(e, template){
   var currentLimit = Session.get('lazyloadLimit');

   Session.set('lazyloadLimit', currentLimit + 2);
   }
}); 
