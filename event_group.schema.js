

function getReportingDataObj(){
	this.type = "object";
	var p={};
	p.reporter = {"type":"string"};
	p.details = {"type":"string"};
	p.action = {"type":"string","enum":["Telephone", "Letter","Email","Walk-in","CB Radio","Other"]};
	p.phone = {"type":"string"};
	p.email = {"type":"string"};

	this.properties = p;
}

var schemas ={};


schemas.Legal = {
  "properties": {
    "xdata": {
      "properties": {
        "book": {
          "type": "string"
        },
        "page": {
          "type": "string"
        },
        "party1": {
          "type": "string"
        },
        "party2": {
          "type": "string"
        }
      }
    },
    "parcel": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "Complete",
        "Pending",
        "Incomplete"
      ]
    },
    "action": {
      "type": "string",
      "enum": [
        "Lis Pendens Filed",
        "Lis Pendens Canceled",
        "Tax Certificate Issued",
        "Tax Certificate Redeemed",
        "Property Transfer"
      ]
    },
    "id": {
      "type": "integer"
    },
    "effective_date": {
      "type": "string",
      "format": "date"
    }
  }
};
schemas.Inspection = {
  "properties": {
    "parcel": {
      "type": "string"
    },
    "status": {
      "type": "string",
      "enum": [
        "Complete",
        "Pending",
        "Incomplete"
      ]
    },
    "action": {
      "type": "string",
      "enum": [
        "Initial Inspection",
        "follow up Inspection"
      ]
    },
    "id": {
      "type": "integer"
    },
    "effective_date": {
      "type": "string",
      "format": "date"
    },
    "xdata": {
      "properties": {
        "occupied": {
          "enum": [
            "Occupied",
            "Vacant",
            "Undetermined"
          ]
        },
        "sidewalks": {
          "enum": [
            "Maintained",
            "In Violation Ice/Snow",
            "In Violation Condition"
          ]
        },
        "grass": {
          "enum": [
            "Maintained",
            "In Violation"
          ]
        },
        "building_secure": {
          "enum": [
            "Secure",
            "Insecure"
          ]
        }
      }
    }
  }
};

angular.module('ZMain').value("data_schemas",schemas);
