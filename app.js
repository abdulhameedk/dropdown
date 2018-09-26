var app = angular.module('dropdown', []);

app.controller('MainCtrl', function($scope) {
  
 $scope.myFunction = function () {
    document.getElementById("myDropdown").classList.toggle("show");
}
$scope.label=[];
$scope.friends  = [{name:'Rahul',id:'1',isChecked:false},
                         {name:'Sudhan',id:'2',isChecked:false},
                         {name:'Mayank',id:'3'},
                         {name:'Arunraj',id:'4'},
                         {name:'Abdul',id:'5'},
                         {name:'Anupam',id:'6'}];
$scope.setLabel = function () {
	$scope.aaa = true;
  $scope.label=[];
  for(var i=0;i<$scope.friends.length;i++) {
      if($scope.friends[i].isChecked == true) {
      
          $scope.label.push($scope.friends[i]);
      }
  }
}

});
