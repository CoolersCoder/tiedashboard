/**
 * 
 */
app
		.controller(
				'writeController',
				[
						'$scope',
						'$timeout',
						'$interval',
						'uiGridConstants',
						'$templateCache',
						function($scope, $timeout, $interval, uiGridConstants,
								$templateCache) {
							// $scope.myOtherData = DocArray;

							$scope.refData = function() {
								$scope.gridOptions.data.length = 0;

								for (var i = 0; i < DocArray.length; i++) {
									$scope.gridOptions.data.push(DocArray[i]);
								}

								var newHeight = Math.floor(Math.random()
										* (300 - 100 + 1) + 300);

								angular
										.element(
												document
														.getElementsByClassName('grid')[0])
										.css('height', newHeight + 'px');

								// $scope.gridApi.grid.modifyRows($scope.gridOptions.data);
								// $scope.gridApi.selection.selectRow($scope.gridOptions.data[0]);
								firstRow();
								$scope.refOtherTable();
							};

							$scope.gridOptions = {
								enableRowSelection : true,
								enableRowHeaderSelection : false

							};

							$scope.myRow = [];

							$scope.gridOptions = {
								// enableSorting: true,
								columnDefs : [ {
									name : 'docId',
									field : 'id',
									visible : false
								}, {
									name : 'code',
									field : 'code'
								}, {
									name : 'title',
									field : 'title'
								}, {
									name : 'docType',
									field : 'docType'
								}, {
									name : 'reportingEntity',
									field : 'reportingEntity',
								}, {
									name : 'currency',
									field : 'currency',
								}, {
									name : 'residentCountry',
									field : 'residentCountry',
								}, {
									name : 'accountingStandard',
									field : 'accountingStandard',
								}, {
									name : 'reportingPeriod',
									field : 'reportingPeriod',
								} ],
								data : DocArray,

								onRegisterApi : function(gridApi) {
									$scope.gridApi = gridApi;

									firstRow = function() {

										$scope.gridApi.selection
												.selectRow($scope.gridOptions.data[0]);
										console.log("first row function : "
												+ $scope.gridOptions.data[0]);
									};

									gridApi.selection.on
											.rowSelectionChanged(
													$scope,
													function(rows) {

														$scope.mySelections = gridApi.selection
																.getSelectedRows();

														$scope.rowIndex = $scope.gridOptions.data
																.indexOf(rows.entity);

														// post tieDocID via
														// ajax

														// pass in currentDocId
														// to set the current
														// Doc
														//setCurrentDoc($scope.rowIndex);
														 postDoc($scope.mySelections[0].id);
														$scope.refOtherTable();
													});
								}
							};

							$scope.mySelections = [];
							$scope.changeDelete = function() {
								console.log('Selection length = '
										+ $scope.mySelections.length);
							}
							$scope.gridOptions.multiSelect = false;
							$scope.gridOptions.modifierKeysToMultiSelect = false;

							$scope.gridOptions.noUnselect = true;

							$scope.refOtherTable = function() {
								$scope.gridOptions2.data.length = 0;
								$scope.gridOptions3.data.length = 0;
								$scope.gridOptions4.data.length = 0;
								$scope.gridOptions5.data.length = 0;

								for (var i = 0; i < EntityArray.length; i++) {
									$scope.gridOptions2.data
											.push(EntityArray[i]);

								}
								;

								for (var i = 0; i < Table1Array.length; i++) {
									$scope.gridOptions3.data
											.push(Table1Array[i]);
								}
								;

								for (var i = 0; i < Table2Array.length; i++) {
									$scope.gridOptions4.data
											.push(Table2Array[i]);
								}
								;
								for (var i = 0; i < Table3Array.length; i++) {
									$scope.gridOptions5.data
											.push(Table3Array[i]);
								}

								var newHeight = Math.floor(Math.random()
										* (300 - 100 + 1) + 300);

								angular
										.element(
												document
														.getElementsByClassName('grid2')[0])
										.css('height', newHeight + 'px');

								angular
										.element(
												document
														.getElementsByClassName('grid3')[0])
										.css('height', newHeight + 'px');
								angular
										.element(
												document
														.getElementsByClassName('grid4')[0])
										.css('height', newHeight + 'px');
								angular
										.element(
												document
														.getElementsByClassName('grid5')[0])
										.css('height', newHeight + 'px');

							};

							$scope.gridOptions2 = {
								// enableSorting: true,
								columnDefs : [ {
									name : 'TIN',
									field : 'TIN'
								}, {
									name : 'Name',
									field : 'Name'
								}, {
									name : 'EntityCode',
									field : 'EntityCode'
								}, {
									name : 'DocType',
									field : 'DocType',
								}, {
									name : 'Incorporation Country',
									field : 'IncorporationCountry',
								}, {
									name : 'ResidentCountry',
									field : 'ResidentCountry',
								}, {
									name : 'IsPE',
									field : 'IsPE',
								}, {
									name : 'Address',
									field : 'Address',
								} ],
								data : EntityArray
							};
							$scope.gridOptions3 = {
								// enableSorting: true,
								headerTemplate : 'views/CbcrTable1Header.html',
								data : Table1Array
							}
							$scope.gridOptions4 = {
								// enableSorting: true,
								showHeader : false,
								columnDefs : [ {
									name : 'taxJurisdiction',
									field : 'taxJurisdiction',
									width : 106
								}, {
									name : 'entityCode',
									field : 'entityCode',
									width : 286
								}, {
									name : 'taxJurisOfIncorporation',
									field : 'taxJurisOfIncorporation',
									width : 156
								}, {
									name : 'mainBusRAndD',
									field : 'mainBusRAndD',
									width : 123
								}, {
									name : 'mainBusHoldingIp',
									field : 'mainBusHoldingIp',
									width : 116
								}, {
									name : 'mainBusPurchasing',
									field : 'mainBusPurchasing',
									width : 118
								}, {
									name : 'mainBusMfctOrPrdn',
									field : 'mainBusMfctOrPrdn',
									width : 135
								}, {
									name : 'mainBusSaleMktDistr',
									field : 'mainBusSaleMktDistr',
									width : 150
								}, {
									name : 'mainBusAdminMgmtSupportSvc',
									field : 'mainBusAdminMgmtSupportSvc',
									width : 140
								}, {
									name : 'mainBusProvSvcToUnrelatedParti',
									field : 'mainBusProvSvcToUnrelatedParti',
									width : 113
								}, {
									name : 'mainBusInternalGroupFinance',
									field : 'mainBusInternalGroupFinance',
									width : 82
								}, {
									name : 'mainBusRegulatedFinSvc',
									field : 'mainBusRegulatedFinSvc',
									width : 102
								}, {
									name : 'mainBusInsurance',
									field : 'mainBusInsurance',
									width : 98
								}, {
									name : 'mainBusHoldingEquityInstrument',
									field : 'mainBusHoldingEquityInstrument',
									width : 110
								}, {
									name : 'mainBusDormant',
									field : 'mainBusDormant',
									width : 80
								}, {
									name : 'mainBusOther',
									field : 'mainBusOther'
								} ],
								data : Table2Array
							};
							$scope.gridOptions5 = {
								// enableSorting: true,
								showHeader : false,
								columnDefs : [ {
									name : 'additionalInfo',
									field : 'additionalInfo',
									//width : 106
									height:300
								} ],

								data : Table3Array
							};
						} ]);