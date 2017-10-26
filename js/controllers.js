'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('SearchController', function($rootScope,$scope,Notification) {
	$scope.nroAfiliadoSearch = "";
	$scope.nombreYApellidoSearch = "";
	$scope.nroDocumentoSearch = "";
	$scope.existenAfiliadosInhabilitados = false;
	
	$scope.filtrarAfiliados = function() {
		
		$scope.existenAfiliadosInhabilitados = false;
		$scope.afiliadosFiltrados = _.filter($scope.afiliados, function(afiliado) {
				if (_.includes(String(afiliado.NroAfiliado),$scope.nroAfiliadoSearch) 
					&& _.includes(String(afiliado.NombreApellido),$scope.nombreYApellidoSearch)
					&& _.includes(String(afiliado.NroDocumento),$scope.nroDocumentoSearch)
					&& afiliado.Activo
					)
					{
						if (!afiliado.Habilitado)
				{$scope.existenAfiliadosInhabilitados = true;}
					return afiliado;
					}
		} );	
		if($scope.afiliadosFiltrados.length == 0){
			$rootScope.afiliado = undefined;
		Notification.primary({
                    message: "No Hay Resultados.",
                    positionY: 'top',
                    positionX: 'right',
                    delay: 2000
                });
		}
		if($scope.existenAfiliadosInhabilitados == true){
			Notification.warning({
                    message: "Hay afiliados Inhabilitados.",
                    positionY: 'top',
                    positionX: 'right',
                    delay: 2000
                });
		}
	}

	$scope.afiliados = [
		{
			"NroAfiliado": 6598,
			"NroDocumento": 22222222,
			"NombreApellido": "Andres Perez",
			"Activo": true,
			"Habilitado": true
		},
		{
			"NroAfiliado": 6599,
			"NroDocumento": 22222212,
			"NombreApellido": "Roberto Perez",
			"Activo": true,
			"Habilitado": true
		},
		{
			"NroAfiliado": 6600,
			"NroDocumento": 12543658,
			"NombreApellido": "Marta Perez",
			"Activo": true,
			"Habilitado": false
		},
		{
			"NroAfiliado": 7463,
			"NroDocumento": 12458956,
			"NombreApellido": "Omar Inghels",
			"Activo": false,
			"Habilitado": true
		},
		{
			"NroAfiliado": 7654,
			"NroDocumento": 35999254,
			"NombreApellido": "Patricia Aguzzi",
			"Activo": false,
			"Habilitado": false
		},
		{
			"NroAfiliado": 7444,
			"NroDocumento": 35478207,
			"NombreApellido": "Priscila Inghels",
			"Activo": true,
			"Habilitado": false
		}
	];
	
	$scope.verAfiliado = function(afiliado){
		$rootScope.afiliado = afiliado;
	};
})
.controller('ProfileController', function($rootScope,$scope, SharedDataService){
	//$scope.afiliado = SharedDataService.getAfiliado();
	$scope.$watch('$root.afiliado', function(newValue) {
		if(newValue != undefined)
		{
		$scope.afiliado = SharedDataService.getAfiliado(newValue);
		}
		else
		{
			$scope.afiliado = undefined;
		}
	});

	$scope.showModal = false;
	$scope.showModalAtencion = false;
	
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };

	$scope.toggleModalAtencion = function(){
        $scope.showModalAtencion = !$scope.showModalAtencion;
    };

    $scope.changeAfiliado = function(id){
    	$scope.afiliado = SharedDataService.getAfiliado(id);
    }

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
});