App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        controller: 'DeliveryController',
        templateUrl: 'app/templates/delivery.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});