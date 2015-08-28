Meteor.startup(function(){

   console.log('Server started');

   if(Apps.find().count() === 0){

   console.log('Adding dummy data');

   var dummyData = [
     {
      title : 'App 1',  
      url: 'http://sautimtaani.co.ke',
      host: 'godaddy',
      framework: 'django',
      server_username: 'sauti',
      server_password: 'sauti',
      registered: moment().format('LL'),
      expiry: moment().add(1, 'years').calendar,
      client: 'The client',
      phone : '+254720200560',
      email: 'info@theclient.com'
      
   },
   {
      title: 'App 2',
      url: 'http://customerfeedback.com',
      host: 'godaddy',
      framework: 'django',
      server_username: 'sauti',
      server_password: 'sauti',
      registered: moment().format('LL'),
      expiry: moment().add(1, 'years').calendar,
      client: 'The client',
      phone : '+254720200560',
      email: 'info@theclient.com'
   },
   {
      title: 'App 3',
      url: 'http://mzikihalisi.co.ke',
      host: 'godaddy',
      framework: 'django',
      server_username: 'sauti',
      server_password: 'sauti',
      registered: moment().format('LL'),
      expiry: moment().add(1, 'years').calendar,
      client: 'The client',
      phone : '+254720200560',
      email: 'info@theclient.com'
    }
  ];
  _.each(dummyData, function(app){
    Apps.insert(app);
  });
 }
});


