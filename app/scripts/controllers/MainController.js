/**
 * Created by krisztinavajda on 24/02/16.
 */
app.controller('MainCtrl', function ($scope) {
  $scope.user = {};

  $scope.register = function(user) {
    console.log('in function register()', user);
  }
});
