angular.module('docsSimpleDirective', [])
  .controller('Ctrl', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  })
  .directive('myCustomer', function() {
    return {
    //   template: '姓名:  地址: '
      templateUrl: 'hellow.html'
    };
  });