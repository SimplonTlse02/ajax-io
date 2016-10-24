var $ = require("jquery/dist/jquery");
var data = require('./data.json');

// console.log(data);



$.ajax({
	url : "http://localhost:3000",
	method:"POST",
	data : { id:"sss", password:"chut"}
})
.done(function( response ) {
  console.log( "Sample of data:", response );
  response.headers['Content-Type'];
  response.statusCode;
  response.data.userName;
});










var url = "http://localhost:300";
console.log($);
$.ajax({
  type: 'GET',
  url: url,
  // data: postedData,
  // dataType: 'json',
  success: function( data ) {
      console.log( "Sample of data:", data );
  }
});