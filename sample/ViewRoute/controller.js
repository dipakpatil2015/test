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
	
	app.controller('customersCtrl', function($scope, $http) {
    
});


	app.controller('requestviewController', function($scope,$http) {
		 $scope.message = 'Look! I am an requestviewController 222 page.';
		 $scope.data = "test";
		$scope.requests=[];		
		$http.get("http://localhost:8089/Requests")
    .then(function (response) {
		$scope.requests = JSON.stringify(response.data.requests);
		
	});
	
		
		$scope.addRow = function(){		
		
	    $scope.message = 'Look! submited';
		var req={ 'requesterName':$scope.requesterName, 'approversName': $scope.approversName, 'requesterTeamName':$scope.requesterTeamName, 'domain':$scope.domain, 'requestDescription':$scope.requestDescription};
		$scope.message = req;
		$scope.requests.push({ 'requesterName':$scope.requesterName, 'approversName': $scope.approversName, 'requesterTeamName':$scope.requesterTeamName, 'domain':$scope.domain, 'requestDescription':$scope.requestDescription});
		
		alert('test');
		
};


 $scope.SendData = function () {
           // use $.param jQuery function to serialize data from JSON 
		   $scope.message = "called ";
		   var req={ 'requesterName':$scope.requesterName, 'approversName': $scope.approversName, 'requesterTeamName':$scope.requesterTeamName, 'domain':$scope.domain, 'requestDescription':$scope.requestDescription};
            var data = req;
        
            var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded',
					'Access-Control-Allow-Origin':'*'
					
                }
            }
$scope.message = "sending";
            $http.post('http://localhost:8089/addRequest', data, config)
            .success(function (data, status, headers, config) {
                $scope.message = "data is posted sucess fully";
            })
            .error(function (data, status, header, config) {
				
                   $scope.message = "data is  not posted sucess fully";
            });
        };









		 
 });
	
	
	app.controller('requestlistController', function($scope,$http) {
		$scope.data = "test";
		$scope.requests=[];		
		$http.get("http://localhost:8089/requests")
		.then(function (response) {
		$scope.requests = response.data.requests;
		},function (err) {
		$scope.message = err;
	});
	
		
    });
	

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
	
