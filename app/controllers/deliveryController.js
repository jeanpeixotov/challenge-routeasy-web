App.controller('DeliveryController', [
  '$scope', '$timeout', 'DeliveryFactory',
  function ($scope, $timeout, DeliveryFactory) {
    $scope.deliveries = DeliveryFactory.getDeliveries();
    $scope.addDelivery = function() {
      Facebook.api('/me/delivery?fields=name,location', function (response) {
        $scope.$apply(function () {
          $scope.delivery = response;
        });
      });
    };
  }
]);