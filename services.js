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


ZMain.factory('init_autoComplete', ['$cookies','search_list','events_api','$http',
	function($cookies,search_list,events_api,$http) {
	var vm = {"parcel_id":"enter address","address":""};
		$(function () {
			auto_complete_address=  $( "#auto_complete_address" ).autocomplete({
				source: search_list,
				delay: 500,
				minLength: 3 ,
				select: function( event, ui ) {

					vm.parcel_id=ui.item.parcel_id;
					vm.address=ui.item.label;
					$cookies.put("parcel_id",vm.parcel_id);
					$cookies.put("address",vm.address);
					events_api.refresh_events(ui.item.parcel_id);

					}
				});

			})
return vm;
	}]);
