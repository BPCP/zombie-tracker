var app = angular.module('ZMain', ['jsonforms','jsonforms-bootstrap']);
app.constant('apiBase','https://zdata.bpcphosting.org');

app.controller('FullPage',['data_schemas','UISchemas','$scope','$http','init_autoComplete','event_groups',
	function(data_schemas,UISchemas,$scope,$http,init_autoComplete,event_groups) {
  var vm = this;


	//vm.event_groups = event_groups;
	vm.data = init_autoComplete;
	vm.data.events = [];
	vm.group='';

	vm.change_event_types_schema = function(e){
	   vm.taskSchema = data_schemas[vm.group];
	   vm.taskUISchema = UISchemas[vm.group];
   }

	vm.edit_event = function(data){
		$http.put(apiBase+"/api.php/events/"+data.id,data)
			.then(function(response){
//				vm.refresh_events(vm.data.parcel_id);
			});
   }
   vm.add_event = function(group,parcel){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		today = mm + '/' + dd + '/' + yyyy;
		var new_event={"group":group,"parcel":parcel,"effective_date":today}
		 vm.data.events.push(new_event);
		$http.post(apiBase+"/api.php/events/",new_event)
			.then(function(response){
				vm.refresh_events(vm.data.parcel_id);
			});
   }
      vm.delete_event = function(id){
	$http.delete(apiBase+"/api.php/events/"+id)
		.then(function(response){
			vm.refresh_events(vm.data.parcel_id);
		});
   }
	vm.refresh_events = function(parcel_id){
		$http.get(apiBase+"/api.php/events?filter=parcel,eq,"+parcel_id)
			.then(function(response){
				var records = response.data.events.records;
				var columns =response.data.events.columns;
				//convert results to an array of objects
				var t = [];
				for (var i = 0; i < records.length; i++) {
					rec ={};
					for (var ii = 0; ii < records[i].length; ii++) {
						rec[columns[ii]] = records[i][ii];
					}
					t.push(rec);
				}
				vm.data.events = t;
			});
	}


}]);
