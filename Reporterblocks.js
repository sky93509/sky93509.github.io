(function(ext){
ext._shutdown = function(){};
ext._getStatus = function(){
return (status: 2,msg: 'Ready');
};
ext.power = function(base, exponent){
return Math.pow(base, exponent);
};
var descriptor = {
blocks: [
['r','%n ^ %n', 'power',2,3],
]
};
ScratchExtensions.register('Sample extension', descriptor, ext);
})({});