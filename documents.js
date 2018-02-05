
ZMain.factory('documents', function($http) {
  var vm = this;

  vm.upload_file = function(input) {
    var fd = new FormData();
  //Take the first selected file
    fd.append("file", input.files[0]);
    fd.append("event_id",input.dataset.event);
    $http({
      method : "POST",
      url : apiBase + "/upload.php",
      headers: {
          "Content-Type": undefined
        },
      data: fd
    })
      .then(function(response) {
        if (response.data.file_path>"") {
          var new_doc = {};
          new_doc.event_id = response.data.event_id;
          new_doc.file_path = response.data.file_path;
          new_doc.file_name = response.data.file_name;
          $http.post(apiBase + "/api.php/documents/", new_doc)
            .then(function(response){

            });
        }
      });
  }
  // add other functions here



  return this;
});
