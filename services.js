var ZMain = angular.module('ZMain');
var apiBase='https://zdata.bpcphosting.org';

	ZMain.factory('search_list', function($http) {
	 	search_list = [];
	 	$http({
			url:apiBase+"/api.php/ref_parcels",
			method:"GET",
			params:{columns:["property_address , print_key"],
				order:"property_address"}
		})
		.then(function(response) {
 			for (var i = 0; i < response.data.ref_parcels.records.length; i++) {
				search_list.push(
 				{"label":response.data.ref_parcels.records[i][1],
				"parcel_id":response.data.ref_parcels.records[i][0]
				});
 			}
 		});
		return search_list;
	 	}
	 );


ZMain.factory('init_autoComplete', ['search_list','events_api','$http',
	function(search_list,events_api,$http) {
	var vm = {"parcel_id":"enter address","address":""};
		$(function () {
			auto_complete_address=  $( "#auto_complete_address" ).autocomplete({
				source: search_list,
				delay: 500,
				minLength: 3 ,
				select: function( event, ui ) {

					vm.parcel_id=ui.item.parcel_id;
					vm.address=ui.item.label;
					events_api.refresh_events(ui.item.parcel_id);

					// $http.get(apiBase+"/api.php/events?filter=parcel,eq,"+ui.item.parcel_id)
					// 	.then(function(response){
					// 		var records = response.data.events.records;
					// 		var columns =response.data.events.columns;
					// 		//convert results to an array of objects
					// 		var t = [];
					// 		for (var i = 0; i < records.length; i++) {
					// 			rec ={};
					// 			for (var ii = 0; ii < records[i].length; ii++) {
					// 				rec[columns[ii]] = records[i][ii];
					// 			}
					// 			t.push(rec);
					// 		}
					// 		vm.events = t;
					// 	});
					}
				});

			})
return vm;
	}]);
