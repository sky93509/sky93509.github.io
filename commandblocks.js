(function(ext){
ext._shutdown = function(){};
ext._getStatus = function(){
return{status: 2, msg: 'Ready'};
};
ext.wait_random = function(callback){
	wait = Math.random();
	console.log('Waiting for' + wait + ' second');
	window.setTimeout(function(){
		callback();
	},wait*1000);
};
var descriptor = {
	blocks: [
	['w', 'wait for random time', 'wait_random'],
	]
};
ext.my_first_block = function(){
};
var descriptor = {
blocks:[
[' ', 'my first block', 'my_first_block'],
]
};
ScratchExtensions.register('My first extension','Random wait extension', descriptor, ext);
})({});
