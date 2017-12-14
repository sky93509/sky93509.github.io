(function(ext) {
var alrm_went_off = false;
ext._shutdown = function() {};
ext._getStatus = function() {
return {status: 2 , msg: 'Ready'};
};
ext.set_alarm = function(time) {
window.setTimeout(function() {
alarm_went_off = ture;
}, time*1000);
};
ext.when_alarm = function() {
if (alarm_went_off === true) {
alarm_went_off = false;
return ture;
}
return false;
};
var descriptor = {
blocks: [
[' ', 'run alarm after %n seconds', 'set_alarm', '2'],
['h', 'when alarm goes off', 'when_alarm'],
]
};
ScrathExtensions.register('Alarm extension' , descriptor, ext);
})({});