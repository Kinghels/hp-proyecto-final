'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
// angular.module('myApp.services', []).
//   value('version', '0.1');

angular.module("myApp.services", [])
.service("SharedDataService", function() {
	var afiliados = [{
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
		"atenciones": []
	},
	{
		"AfiliadoId": 2,
		"NroAfiliado": 6599,
		"NroDocumento": 22222212,
		"NombreApellido": "Roberto Perez",
	
		"Domicilio": "Walt Disney 715",
		"Localidad": "Agua de Oro",
		"FechaNacimiento": "17/01/1958",
		"PlanId": 2,
		"Activo": true,
		"Habilitado": true,
		"Plan": {
			"PlanId": 2,
			"Descripcion": "Azul Plus",
			"Activo": true
		},
		"Autorizaciones": [
			{
			  "AutorizacionId": 1,
			  "NroAutorizacion": "0048-241835",
			  "AfiliadoId": 2,
			  "PrestadorId": 1,
			  "Prestacion": "TAC de Abdomen y Pelvis",
			  "Fecha": "02/09/2017",
			  "Observaciones": "",
			  "ObservacionesAudit": "",
			  "Activo": true,
			  "Vigente": true
			},
			{
			  "AutorizacionId": 2,
			  "NroAutorizacion": "5874-20593854",
			  "AfiliadoId": 2,
			  "PrestadorId": 1,
			  "Prestacion": "Hemograma",
			  "Fecha": "20170612",
			  "Observaciones": "",
			  "ObservacionesAudit": "",
			  "Activo": true,
			  "Vigente": true
			}
		],
		"atenciones": [
			{
				"Id": 1,
				"NroAtencion": "19473",
				"AfiliadoId": 2,
				"Diagnostico": "Gastroenterocolitis",
				"PrestadorId": 1,
				"Fecha": "01/02/2016",
			},
			{
				"Id": 1,
				"NroAtencion": "29473",
				"AfiliadoId": 2,
				"Diagnostico": "Anemia Cronica",
				"PrestadorId": 1,
				"Fecha": "31/03/2017",
			},
			{
				"Id": 1,
				"NroAtencion": "87654",
				"AfiliadoId": 2,
				"Diagnostico": "Hipertensión",
				"PrestadorId": 1,
				"Fecha": "16/05/2017",
			}
		]
	},
	{
		"AfiliadoId": 3,
		"NroAfiliado": 6600,
		"NroDocumento": 12543658,
		"NombreApellido": "Marta Pérez",
	
		"Domicilio": "Riobamba 2345",
		"Localidad": "Santa Fe",
		"FechaNacimiento": "17/01/1958",
		"PlanId": 2,
		"Activo": true,
		"Habilitado": false,
		"Plan": {
			"PlanId": 2,
			"Descripcion": "Azul Plus",
			"Activo": true
		},
		"Autorizaciones": [
			{
			  "AutorizacionId": 1,
			  "NroAutorizacion": "0048-241835",
			  "AfiliadoId": 2,
			  "PrestadorId": 1,
			  "Prestacion": "TAC de Abdomen y Pelvis",
			  "Fecha": "02/09/2017",
			  "Observaciones": "",
			  "ObservacionesAudit": "",
			  "Activo": true,
			  "Vigente": true
			},
			{
			  "AutorizacionId": 2,
			  "NroAutorizacion": "5874-20593854",
			  "AfiliadoId": 2,
			  "PrestadorId": 1,
			  "Prestacion": "Hemograma",
			  "Fecha": "20170612",
			  "Observaciones": "",
			  "ObservacionesAudit": "",
			  "Activo": true,
			  "Vigente": true
			}
		],
		"atenciones": [
			{
				"Id": 1,
				"NroAtencion": "19473",
				"AfiliadoId": 2,
				"Diagnostico": "Gastroenterocolitis",
				"PrestadorId": 1,
				"Fecha": "01/02/2016",
			},
			{
				"Id": 1,
				"NroAtencion": "29473",
				"AfiliadoId": 2,
				"Diagnostico": "Anemia Cronica",
				"PrestadorId": 1,
				"Fecha": "31/03/2017",
			},
			{
				"Id": 1,
				"NroAtencion": "87654",
				"AfiliadoId": 2,
				"Diagnostico": "Hipertensión",
				"PrestadorId": 1,
				"Fecha": "16/05/2017",
			}
		]
	},
	{
		"AfiliadoId": 4,
		"NroAfiliado": 7444,
		"NroDocumento": 35478207,
		"NombreApellido": "Priscila Inghels",
	
		"Domicilio": "Riobamba 2345",
		"Localidad": "Santa Fe",
		"FechaNacimiento": "17/01/1958",
		"PlanId": 2,
		"Activo": true,
		"Habilitado": false,
		"Plan": {
			"PlanId": 2,
			"Descripcion": "Azul Plus",
			"Activo": true
		},
		"Autorizaciones": [],
		"atenciones": []
	}];

	function getAfiliado(afiliado){
		var miAfiliado =  _.filter(afiliados, { 'NroAfiliado': afiliado.NroAfiliado})[0];
		return miAfiliado;
	};

	return { getAfiliado: getAfiliado};
});