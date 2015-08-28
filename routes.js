if(Meteor.isClient){
Session.setDefault('lazyloadLimit', 2);
}

Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',

    onAfterAction: function(){
        var data = Apps.findOne({_id: this.params._id});

        if(_.isObject(data) && !_.isArray(data))
              document.title = 'Web Briefcase |' + data.title;
        else
              document.title = 'Web Briefcase |' + this.route.getName();
    }
});
AppController = RouteController.extend({
    waitOn: function(){
        return Meteor.subscribe('single-app', this.params._id);
    },
    data: function(){
        return Apps.findOne({_id: this.params._id});
    }
});
Router.map(function(){
  
  this.route('Home', {
      path: '/',
      template: 'home',
      subscriptions
      : function(){
             return Meteor.subscribe("lazyload-apps",
                 Session.get('lazyloadLimit'));
        }
  });
  this.route('News', {
      path: '/news',
      template: 'news'
  });
  this.route('Jobs', {
      path: '/jobs',
      template: 'jobs'
  });
  this.route('About',{
      path: '/about',
      template: 'about'
  });
 this.route('App', {
      path: '/apps/:_id',
      template: 'app',
      controller: 'AppController'
  });
  this.route('Create App', {
      path: '/add-app',
      template: 'editApp',
      controller: 'AppController'
  });
  this.route('Edit App', {
      path: '/edit-app/:_id',
      template: 'editApp',
      controller: 'AppController'
  })
});

var requiresLogin = function(){
    if(!Meteor.user()){
        this.render('notFound');
    } else {
        this.next();
    }
};
Router.onBeforeAction(requiresLogin, {only: ['Create App', 'Edit App']});
