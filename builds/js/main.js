(function (console) { "use strict";
var Main = function() { };
Main.main = function() {
	var config = Main.app;
	var assets = config.assets;
	var __return = function() {
		var module = window.angular.module("name",config.modules);
		module;
		var config1 = config;
		module.config(["$routeProvider",function(route) {
			var route2 = route;
			var _g = 0;
			var _g1 = config1.routes.paths;
			while(_g < _g1.length) {
				var route1 = _g1[_g];
				++_g;
				var route_path = route1.route;
				var route_controller = route1.controller;
				var route_templateUrl = route1.template_url;
				route2.when(route_path,{ controller : route_controller, templateUrl : route_templateUrl});
				route2;
			}
			route2.otherwise(config1.routes.default_path);
			route2;
		}]);
		module;
		null;
	};
	var __iterator = 0;
	var __doCount = 0;
	var tmp;
	var __continue_01 = null;
	__continue_01 = function() {
		if(__iterator < assets.length) {
			if(__doCount++ == 0) while(true) {
				var group = assets[__iterator++];
				group;
				var __afterVar_3 = [(function() {
					return function(grr) {
						grr;
						__continue_01();
					};
				})()];
				var group1 = group;
				var __return1 = [(function(__afterVar_3) {
					return function(__parameter_10) {
						__afterVar_3[0](__parameter_10);
					};
				})(__afterVar_3)];
				var __afterVar_4 = [(function(__return1) {
					return function(assets1) {
						assets1;
						browser_$tools_Assets.wait(1,(function(__return1) {
							return function(__parameter_9) {
								__parameter_9;
								__return1[0](assets1);
							};
						})(__return1));
					};
				})(__return1)];
				var __iterator1 = 0;
				if(__iterator1 < group1.length) {
					var __results = [[]];
					var __counter = [1];
					var __i = 0;
					var __checkCounter = [(function(__counter,__results,__afterVar_4) {
						return function() {
							if(--__counter[0] == 0) __afterVar_4[0](__results[0]);
						};
					})(__counter,__results,__afterVar_4)];
					while(true) {
						var asset = group1[__iterator1++];
						var __index = [__i];
						__counter[0]++;
						var file = [asset];
						var __return2 = [(function(__index,__checkCounter,__results) {
							return function(__parameter_8) {
								__results[0][__index[0]] = __parameter_8;
								__checkCounter[0]();
							};
						})(__index,__checkCounter,__results)];
						var __endIf_0 = [(function(__return2,file) {
							return function() {
								__return2[0](file[0]);
								return;
							};
						})(__return2,file)];
						if(file[0].indexOf(".css") > 0) {
							var tmp1;
							var _this = window.document;
							tmp1 = _this.createElement("link");
							var link = tmp1;
							link.rel = "stylesheet";
							link.href = file[0];
							window.document.body.appendChild(link);
							browser_$tools_Assets.wait(0,(function(__endIf_0) {
								return function(__parameter_5) {
									__parameter_5;
									__endIf_0[0]();
								};
							})(__endIf_0));
						} else {
							var tmp2;
							var _this1 = window.document;
							tmp2 = _this1.createElement("script");
							var script = tmp2;
							script.async = true;
							script.src = file[0];
							script.type = "text/javascript";
							script.onreadystatechange = (function(__endIf_0) {
								return function(__parameter_6) {
									__parameter_6;
									browser_$tools_Assets.wait(0,(function(__endIf_0) {
										return function(__parameter_7) {
											__parameter_7;
											__endIf_0[0]();
										};
									})(__endIf_0));
								};
							})(__endIf_0);
							script.onload = (function(__endIf_0) {
								return function(__parameter_6) {
									__parameter_6;
									browser_$tools_Assets.wait(0,(function(__endIf_0) {
										return function(__parameter_7) {
											__parameter_7;
											__endIf_0[0]();
										};
									})(__endIf_0));
								};
							})(__endIf_0);
							window.document.body.appendChild(script);
						}
						__i++;
						if(!(__iterator1 < group1.length)) break;
					}
					__checkCounter[0]();
				}
				if(!(--__doCount != 0)) break;
			}
		} else __return();
	};
	tmp = __continue_01;
	var __continue_0 = tmp;
	__continue_0();
};
var angular_internal_ModuleMacros = function() { };
var browser_$tools_Assets = function() { };
browser_$tools_Assets.wait = function(n,cb) {
	setTimeout(cb,n);
};
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
Main.app = { modules : [""], assets : [[]], routes : { paths : [{ controller : "", template_url : "", route : ""}], default_path : ""}};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
