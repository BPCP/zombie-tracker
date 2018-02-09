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
            "$ref": "#/properties/action"
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
uis.Inspection = {
  "type": "VerticalLayout",
  "elements": [
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "label": "Action",
          "scope": {
            "$ref": "#/properties/action"
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
          "label": "Status",
          "scope": {
            "$ref": "#/properties/status"
          }
        },
        {
          "type": "Control",
          "label": "Occupied",
          "scope": {
            "$ref": "#/properties/xdata/properties/occupied"
          }
        }
      ]
    },
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "label": "Sidewalks",
          "scope": {
            "$ref": "#/properties/xdata/properties/sidewalks"
          }
        },
        {
          "type": "Control",
          "label": "Grass",
          "scope": {
            "$ref": "#/properties/xdata/properties/grass"
          }
        }
      ]
    },
    {
      "type": "HorizontalLayout",
      "elements": [
        {
          "type": "Control",
          "label": "Building Secure",
          "scope": {
            "$ref": "#/properties/xdata/properties/building_secure"
          }
        }
      ]
    }
  ]
};
angular.module('ZMain').value("UISchemas",uis);
