function vocabCtrl($scope, $location, $timeout) {
  $scope.vocabList = ["test1", "test2"];

  $scope.addVocab = function(){
  	console.log("test");
  	$scope.vocabList.push(currentVocab);
  }
}