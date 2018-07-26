App.factory('DeliveryFactory', function () {
  var factory = {};
  var deliveries = [
    { name : 'Steve Jobs', city : 'San Francisco' },
    { name : 'Bill Gates', city : 'Medina' },
    { name : 'Mark Zuckerberg', city : 'Palo Alto' },
    { name : 'Lucy the Samoyed', city : 'Governador Valadares' },
    { name : 'William Oliveira', city : 'Governador Valadares' },
    { name : 'Juliana Oliveira', city : 'Governador Valadares' }
  ];

  factory.getDeliveries = function () {
    return deliveries;
  }
  return factory;
});