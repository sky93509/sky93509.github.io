(function(ext){
ext._shutdown = function() {};
ext._getStatus = function() {
return {status: 2, msg: 'Ready'};
};
ext.get_temp = function(location, callblack){
$ajax(
url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=imperial',
dataType: 'jsonp',
success: function( weather_data ){
temperature = weather_data['main']['temp'];
callblack(temperature);
}
});
var descriptor = {
blocks: [
['R', 'current temperature in city %s', 'get_temp', 'Boston, MA'],
]
};
ScratchExtensions.register('Weather extension' , descriptor, ext);
})({});