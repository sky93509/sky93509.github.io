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
              url: 'http://api.openweathermap.org/data/2.5/weather?q='+location+'&units=imperial',
              dataType: 'jsonp',
              success: function( weather_data ) {
                  // Got the data - parse it and return the temperature
                  temperature = weather_data['main']['temp'];
                  callback(temperature);
				  console.log("temperature");
              }
        });
    };
	
	ext.playUrlMusic = function (ip, p1, p2) {
        console.log("playUrlMusic");
        console.log(ip);
        console.log(p1);
        console.log(p2);
        $.ajax({
            url: 'http://' + ip + port + '/?extension=advance' + '&name=playUrlMusic' + '&p1=' + p1 + '&p2=' + p2,
            dataType: 'text',
            crossDomain: true,
            success: function (data) {
                console.log("success handler");

            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("error handler");
            }
        });
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['','data %s  %m.current temperature in city %s', 'temperature','檢測', 'Boston, MA'],
		    ['', 'IP %s %m.playUrlMusicItems 播放線上音樂: %s', 'playUrlMusic', "192.168.0.1", '開始', 'https://zenboscratch.github.io/examples/zenbo_music.mp3'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Weather extension', descriptor, ext);
})({});