new (function() {
	window.include = function(srclist, cb){
		if(!cb) cb = function(){};
		var requireModule = (function(index){
			var moduleName = Object.keys(srclist)[index];
			var src = srclist[moduleName];
			var xhr = new XMLHttpRequest();
			xhr.open('GET', src, true);
			xhr.onreadystatechange = function(){
				if(xhr.readyState !== 4) return;

				if(xhr.status === 200){
					//모듈 변수 설정
					var module = {
						_exports: {}
					};

					Object.defineProperty(module, 'exports', {
						get: (function(){
							return this._exports;
						}).bind(module),

						set: (function(v){
							this._exports = v;
						}).bind(module)
					});

					//XHR로 받아온 결과물 eval
					try{
						(new Function('module', 'exports', xhr.responseText))(module, module.exports);
					}catch(err){
						cb(err);
						return;
					}

					//exports를 global에 모듈명으로 저장
					window[moduleName] = module.exports;

					//마지막까지 갈 경우 끝냄
					if(Object.keys(srclist).length <= index + 1){
						cb(null);
					}else{
						setTimeout(function(){
							requireModule(index + 1);
						}, 0);
					}
				}else{
					cb(new Error('Error while requesting module from server (Status ' + xhr.status + ') : ' + moduleName));
				}
			};

			xhr.send(null);
			console.log('Loading a module : ' + moduleName);
		});

		requireModule(0);
	};

	include([
		'https://raw.githubusercontent.com/taylorhakes/promise-polyfill/master/promise.min.js',
		'https://raw.githubusercontent.com/github/fetch/master/fetch.js'
	]);

    var ext = this;
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.get_ajax = function(url, callback){
    	fetch(url).then(function(v){
    		return v.text();
    	}).then(function(v){
    		callback(v);
    	});
    };

    ext.post_ajax = function(url, data, callback){
    	fetch(url, {
    		method: 'POST',
    		body: data
    	}).then(function(v){
    		return v.text();
    	}).then(function(v){
    		callback(v);
    	});
    };

    var descriptor = {
        blocks: [
            ['R', 'GET %s', 'get_ajax', 'http://example.com'],
            ['R', 'POST %s with content %s', 'post_ajax', 'https://example.com', '{name: "Khinenw"}']
        ]
    };

    // Register the extension
    ScratchExtensions.register('XMLHttpRequest Extension', descriptor, ext);
})();
