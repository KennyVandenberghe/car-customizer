FlowRouter.route('/', {
  action(params) {
    BlazeLayout.render('appLayout', {main: 'carSplash'});
  }
});

FlowRouter.route('/new/:carId', {
  action(params) {
   BlazeLayout.render('appLayout', {main: 'carCustomizer'}); 
  }
});

FlowRouter.route('/cars', {
  action(params) {
   BlazeLayout.render('appLayout', {main: 'carsList'}); 
  }
});