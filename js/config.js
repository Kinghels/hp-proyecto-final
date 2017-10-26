angular.module('myApp.config', function($routeProvider, $locationProvider) {                        
  $routeProvider                                                                
       .when('/', {                                            
         templateUrl: "search.html",                                               
         controller:'MainCtrl',                                
        })
        .when('/profile/', {
        	templateUrl: "profile.html",
        	controller: "ProfileController",
        })                                                                    
        .otherwise({                      
            template: 'does not exists'   
        });      
});