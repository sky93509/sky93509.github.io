(function(ext) {
    var alarm_went_off = false; // This becomes true after the alarm goes off

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.set_alarm = function(time) {
       window.setTimeout(function() {
           alarm_went_off = true;
       }, time*1000);
    };

    ext.when_alarm = function() {
       // Reset alarm_went_off if it is true, and return true
       // otherwise, return false.
       if (alarm_went_off === true) {
           alarm_went_off = false;
           return true;
       }

       return false;
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['', 'run alarm after %n seconds', 'set_alarm', '2'],
            ['h', 'when alarm goes off', 'when_alarm'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Alarm extension', descriptor, ext);
})({});
var descriptor = {
    塊： [
        [ ' w '，'打開電機開啟％n秒'，              ' motorOnFor '，1 ]，
        [ '  '，'打開電機'，                          ' allMotorsOn ' ]，
        [ '  '，'關閉電機'，                         ' allMotorsOff ' ]，
        [ '  '，'設定電機功率％n '，                     ' startMotorPower '，100 ]，
        [ '  '，'設置電機方向％m.motorDirection '，' setMotorDirection '，'這樣' ]，
        [ ' h '，' when distance％m.lessMore％n '，           ' whenDistance '，' < '，20 ]，
        [ ' h '，' when tilt％m.eNe％n '，                    ' whenTilt '，' = '，1 ]，
        [ ' r '，' distance '，                               ' getDistance ' ]，
        [ ' r '，'傾斜'，                                   ' getTilt ' ]
    ]
    菜單： {
        motorDirection ： [ '這樣'，'那樣'，'反向' ]，
        lessMore ： [ ' < '，' > ' ]，
        eNe ： [ ' = '，' not = ' ]
    }，
    url ： ' http : //info.scratch.mit.edu/WeDo ' 
};