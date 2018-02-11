var app = angular.module('ZMain');

app.constant('event_groups',["Reporting","Legal","Contacts","Utilities","Inspection","Outreach","Referral","State DB"]);

// https://medium.com/@cironunesdev/angularjs-how-to-name-directives-118ac44b81d4
app.directive("zCategoryButtons", ["event_groups",function(event_groups) {
  var btns ='<div class="btn-group-vertical">';
  for (var i = 0; i < event_groups.length; i++){
    //btns += '<button style="display:block;width:100%" ng-click="tc.change_event_types_schema($event)">'+event_groups[i]+'</button>';
    btns += '<label style="display:block;width:100%" class="btn btn-primary" ng-click="tc.change_event_types_schema($event)" ng-model="tc.group" uib-btn-radio="'+"'"+event_groups[i]+"'"+'">'+event_groups[i]+'</label>';
  }
 btns += '</div>';

    return {
        template : btns
    };
}]);

// <button ng-repeat="x in tc.event_types"
// style="display:block;width:100%"
// ng-click="tc.change_event_types_schema($event)">
//   {{ x }}
// </button>
