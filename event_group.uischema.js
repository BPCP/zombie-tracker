function getSchemaUIold(){
this.type ="VerticalLayout";
var elements =[];
elements.push({type:"HorizontalLayout",elements:[]});
elements[0].elements.push({type: "Control", label: "Action", scope: {$ref: "#/properties/xdata/properties/action"}});
elements[0].elements.push({type: "Control", label: "Date", scope: {$ref: "#/properties/effective_date"} });
elements.push({type:"HorizontalLayout",elements:[]});
elements[1].elements.push({type: "Control", label: "Book", scope: {$ref: "#/properties/xdata/properties/book"} });
elements[1].elements.push({type: "Control", label: "Page", scope: {$ref: "#/properties/xdata/properties/page"}});
elements.push({type:"HorizontalLayout",elements:[]});
elements[2].elements.push({type: "Control", label: "Party 1", scope: {$ref: "#/properties/xdata/properties/party1"} });
elements[2].elements.push({type: "Control", label: "Party 2", scope: {$ref: "#/properties/xdata/properties/party2"}});
elements.push({type: "Control", label: "Documents", scope: {$ref: "#/properties/document"}});
this.elements= elements;
}


function getSchemaUI(groupUI){
this.type ="VerticalLayout";
var elements =[];
elements.push({type:"HorizontalLayout",elements:[]});
elements[0].elements.push({type: "Control", label: "Action", scope: {$ref: "#/properties/xdata/properties/action"}});
elements[0].elements.push({type: "Control", label: "Date", scope: {$ref: "#/properties/effective_date"} });
elements.push(new groupUI());
this.elements= elements;
}

function getLegalSchemaUI(){
this.type = "HorizontalLayout";
var elements =[];
elements[0].elements.push({type: "Control", label: "Book", scope: {$ref: "#/properties/xdata/properties/book"} });
elements[0].elements.push({type: "Control", label: "Page", scope: {$ref: "#/properties/xdata/properties/page"}});
elements.push({type:"HorizontalLayout",elements:[]});
elements[1].elements.push({type: "Control", label: "Party 1", scope: {$ref: "#/properties/xdata/properties/party1"} });
elements[1].elements.push({type: "Control", label: "Party 2", scope: {$ref: "#/properties/xdata/properties/party2"}});
elements.push({type: "Control", label: "Documents", scope: {$ref: "#/properties/document"}});
this.elements = elements;
}

var uis ={};
uis.Legal = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "label": "Action",
          "scope": {
            "$ref": "#/properties/xdata/properties/action"
          }
        },
        {
          "type": "Control",
          "label": "Date",
          "scope": {
            "$ref": "#/properties/effective_date"
          }
        }
      ]
    },
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "label": "Book",
          "scope": {
            "$ref": "#/properties/xdata/properties/book"
          }
        },
        {
          "type": "Control",
          "label": "Page",
          "scope": {
            "$ref": "#/properties/xdata/properties/page"
          }
        }
      ]
    },
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "label": "Party 1",
          "scope": {
            "$ref": "#/properties/xdata/properties/party1"
          }
        },
        {
          "type": "Control",
          "label": "Party 2",
          "scope": {
            "$ref": "#/properties/xdata/properties/party2"
          }
        }
      ]
    }
  ]
};

angular.module('ZMain').value("UISchemas",uis);
