ZMain.factory('events_api', function($http) {
  var vm = this;
  vm.events = [];
  //edit_event
  vm.edit = function(data) {
    $http.put(apiBase + "/api.php/events/" + data.id, data)
      .then(function(response) {
        //				vm.refresh_events(vm.data.parcel_id);
      });
  }
  vm.delete= function(event) {
    $http.delete(apiBase + "/api.php/events/" + event.id)
      .then(function(response) {
        vm.refresh_events(event.parcel);
      });
  }
  vm.add = function(group, parcel) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    var new_event = {
      "group": group,
      "parcel": parcel,
      "effective_date": today,
      "action": "new "+group,
      "xdata":{}
    }
    vm.events.push(new_event);
    $http.post(apiBase + "/api.php/events/", new_event)
      .then(function(response) {
        vm.refresh_events(new_event.parcel);
      })
  }
  vm.refresh_events = function(parcel_id) {
    $http.get(apiBase + "/api.php/events?filter=parcel,eq," + parcel_id)
      .then(function(response) {
        var records = response.data.events.records;
        var columns = response.data.events.columns;
        //convert results to an array of objects
        var t = [];
        for (var i = 0; i < records.length; i++) {
          rec = {};
          for (var ii = 0; ii < records[i].length; ii++) {
            rec[columns[ii]] = records[i][ii];
          }
          t.push(rec);
        }
        vm.events = t;
      });
  }
  return vm;
});
