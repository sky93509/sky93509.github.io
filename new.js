(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_temp = function(location, callback) {
        // Make an AJAX call to the Open Weather Maps API
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather',
      data: {q: location, units: 'imperial', appid: APPID},
      dataType: 'jsonp',
      success: function(weatherData) {
        //Received the weather data. Cache and return the data.
        cachedTemps[location] = {data: weatherData, time: Date.now()};
        callback(weatherData);
      }
    });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'current temperature in city %s', 'get_temp', 'Boston, MA'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Weather extension', descriptor, ext);
})({});