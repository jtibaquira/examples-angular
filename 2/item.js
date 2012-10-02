function ItemCtrl($scope) {
  $scope.items = [
              {text:'Ball', done:true},
              {text:'Car', done:true}];
  
  $scope.addItem = function () {
    $scope.items.push({text:$scope.itemText, done:true});
    $scope.itemText = '';
  };
};