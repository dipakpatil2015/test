    app.controller('mainController', function($scope) {// create the controller and inject Angular's $scope
        $scope.message = 'Everyone come and see how good I look!';// create a message to display in our view
    });
    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
		alert(window.localStorage['storageName']);
		$scope.hello = function() {
				alert('hello');
		};
    });
	app.controller('requestviewController', function($scope) {
		 $scope.message = 'Look! I am an about1 page.';

		 
 });
	
	
	app.controller('requestlistController', function($scope) {
        $scope.message = 'Look! I am an requestlistController page.';
		
		$scope.addRow = function(){		
		$scope.requests=JSON.parse(window.localStorage['storageName']);
	    $scope.message = 'Look! submited';
		var req={ 'requesterName':$scope.requesterName, 'approversName': $scope.approversName, 'requesterTeamName':$scope.requesterTeamName, 'domain':$scope.domain, 'requestDescription':$scope.requestDescription};
		$scope.message = req;
		$scope.requests.push({ 'requesterName':$scope.requesterName, 'approversName': $scope.approversName, 'requesterTeamName':$scope.requesterTeamName, 'domain':$scope.domain, 'requestDescription':$scope.requestDescription});
		
		
		
		};
    });
	

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
	
