function createSchema(get_xdata){

this.type ="object";
var p ={};
p.parcel = {"type":"string"};
p.sbl = {"type":"string"};
p.effective_date = {"type": "string","format":"date"},
p.id =  {"type": "integer"};
//p.document = {"type": "string"};
p.type = {"type": "string"};
p.status = {"type": "string","enum":["Complete","Pending","Incomplete"]};
p.xdata = new get_xdata();
this.properties = p;

};

function getLegalDataObj(){
	this.type = "object";
	var p={};
	p.book = {"type":"string"};
	p.page = {"type":"string"};
	p.action = {"type":"string","enum":["Lis Pendens Filed", "Lis Pendens Canceled","Tax Certificate Issued","Tax Certificate Redeemed","Property Transfer"]};
	p.party1 = {"type":"string"};
	p.party2 = {"type":"string"};
	this.properties = p;
}

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
schemas.Legal = new createSchema(getLegalDataObj);
schemas.Reporting = new createSchema(getReportingDataObj);


angular.module('ZMain').value("data_schemas",schemas);
