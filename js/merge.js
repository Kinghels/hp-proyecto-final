.controller('ProfileController', function($scope, $http){
	$scope.afiliado = {
	    "AfiliadoId": 1,
		"NroAfiliado": 6598,
		"NroDocumento": 22222222,
		"NombreApellido": "Andrés Perez",
		"Domicilio": "Zeballos 1354",
		"Localidad": "Rosario",
		"FechaNacimiento": "27/01/1957",
		"PlanId": 1,
		"Activo": true,
		"Habilitado": true,
		"Plan": {
	        "PlanId": 1,
	        "Descripcion": "DEMI I",
	        "Activo": true
	    },
	    "Autorizaciones": [
		    {
		      "AutorizacionId": 1,
		      "NroAutorizacion": "1111-11111111",
		      "AfiliadoId": 1,
		      "PrestadorId": 1,
		      "Prestacion": "ERGOMETRIA COMPUTADA",
		      "Fecha": "20170522",
		      "Observaciones": "aasdasdad",
		      "ObservacionesAudit": "",
		      "Activo": true,
		      "Vigente": true
		    },
		    {
		      "AutorizacionId": 2,
		      "NroAutorizacion": "2222-22222222",
		      "AfiliadoId": 1,
		      "PrestadorId": 1,
		      "Prestacion": "ERGOMETRIA COMPUTADA",
		      "Fecha": "20170612",
		      "Observaciones": "",
		      "ObservacionesAudit": "",
		      "Activo": true,
		      "Vigente": true
		    },
		    {
		      "AutorizacionId": 3,
		      "NroAutorizacion": "3333-33333333",
		      "AfiliadoId": 1,
		      "PrestadorId": 2,
		      "Prestacion": "ERGOMETRIA COMPUTADA",
		      "Fecha": "20170615",
		      "Observaciones": "",
		      "ObservacionesAudit": "asdasdasdasdadad",
		      "Activo": true,
		      "Vigente": true
		    }
		],
		atenciones: []
	}

	$scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
    $scope.prestacionToAdd = "";
    $scope.newAutorizacionesIndex = [0];
    $scope.newAutorizaciones = [];
    $scope.addPrestacionClick = function(i){
    	var nroPrestacion = '1212-12121212'+i;
    	var fecha = ''+new Date().getFullYear()+'0'+(new Date().getMonth()+1)+''+new Date().getDate()
    	$scope.newAutorizaciones.push(
    		{ 	"NroAutorizacion": nroPrestacion,
    			"Fecha": fecha,
    			"Activo": true, 
    			"Vigente": true, 
    			"Prestacion": $("#prestacionToAdd").val() 
    		});
    	$scope.newAutorizacionesIndex.push(++i);
    }
    $scope.removePrestacion = function(i){
    	$scope.newAutorizaciones = $scope.newAutorizaciones.splice(i-1,1);
    }
    $scope.saveAutorizaciones = function(){
    	for (var i = $scope.newAutorizaciones.length - 1; i >= 0; i--) {
    		$scope.afiliado.Autorizaciones.push($scope.newAutorizaciones[i]);
    	}
    	$scope.showModal = false;
    }
})


/* Directives */


angular.module('myApp.directives', [])
	.directive('appVersion', ['version', function(version) {
    	return function(scope, elm, attrs) {
      		elm.text(version);
    }}])
    .directive('modal', function () {
    return {
      template: 
      '<div class="modal fade">' + 
          	'<div class="modal-dialog">' + 
            	'<div class="modal-content">' + 
              		'<div class="modal-header">' + 
                		'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                		'<h4 class="modal-title">Nueva Autorización</h4>' + 
              		'</div>' + 
	              	'<div class="modal-body" ng-transclude>'+
	              	'</div>' + 
            	'</div>' + 
          	'</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

