app.controller('MainController', ['$scope', function($scope) {
    $scope.apps = [
      { 
        icon: 'img/move.jpg',
        alt: 'MOVE app logo',
        title: 'MOVE', 
        developer: 'MOVE, Inc.', 
        price: 0.99 
      }, 
      { 
        icon: 'img/shutterbugg.jpg', 
        alt: 'Shutterbugg app logo',
        title: 'Shutterbugg', 
        developer: 'Shutter, Inc.', 
        price: 2.99 
      },
      { 
        icon: 'img/forecast.jpg',
        alt: 'Forecast app logo',
        title: 'Forecast',
        developer: 'Forecast, Inc.',
        price: 2.99
      }, 
      { 
        icon: 'img/gameboard.jpg',
        alt: 'Gameboard app logo',
        title: 'Gameboard',
        developer: 'Gameboard, Inc.',
        price: 1.99
      } 
    ];
  }]);