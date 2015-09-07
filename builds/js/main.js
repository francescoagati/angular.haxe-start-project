(function (console) { "use strict";
var HxOverrides = function() { };
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var OutputController = function() { };
OutputController.factory = function(scope) {
	var scope_dyn = scope;
	var chart1 = { };
	chart1.type = "ColumnChart";
	chart1.cssStyle = "height:200px; width:300px;";
	chart1.data = { 'cols' : [{ id : "month", label : "Month", type : "string"},{ id : "laptop-id", label : "Laptop", type : "number"},{ id : "desktop-id", label : "Desktop", type : "number"},{ id : "server-id", label : "Server", type : "number"},{ id : "cost-id", label : "Shipping", type : "number"}], 'rows' : [{ c : [{ v : "January"},{ v : 19, f : "42 items"},{ v : 12, f : "Ony 12 items"},{ v : 7, f : "7 servers"},{ v : 4, f : ""}]},{ c : [{ v : "February"},{ v : 13},{ v : 1, f : "1 unit (Out of stock this month)"},{ v : 12},{ v : 2}]},{ c : [{ v : "March"},{ v : 24},{ v : 0},{ v : 11},{ v : 6}]}]};
	chart1.options = { 'title' : "Sales per month", 'isStacked' : "true", 'fill' : 20, 'displayExactValues' : true, 'vAxis' : { 'title' : "Sales unit", 'gridlines' : { 'count' : 6}}, 'hAxis' : { 'title' : "Date"}};
	chart1.formatters = { };
	scope_dyn.chart = chart1;
};
var async_$tools_Async = function() { };
var Main = function() { };
Main.__interfaces__ = [async_$tools_Async];
Main.main = function() {
	var body = window.document.body;
	var loader = "\n      <div id=\"browser-tools-loading\" style=\"position:fixed;top:0px;left:0px;width:100%;height:100%;background:white;\"></div>\n    ";
	if(window.document.getElementById("browser-tools-loading") == null) {
		var tmp;
		var _this = window.document;
		tmp = _this.createElement("div");
		var node = tmp;
		node.innerHTML = loader;
		body.appendChild(node);
	}
	var element = window.document.getElementById("browser-tools-loading");
	thx_Timer.nextFrame(function() {
		element.innerHTML = "\n\t\t\t  <style>\n\t\t\t    .spinner {\n\t\t\t      margin: 200px auto;\n\t\t\t      width: 50px;\n\t\t\t      height: 30px;\n\t\t\t      text-align: center;\n\t\t\t      font-size: 10px;\n\n\t\t\t    }\n\n\t\t\t    .spinner > div {\n\t\t\t      background-color: #155500;\n\t\t\t      height: 100%;\n\t\t\t      width: 6px;\n\t\t\t      display: inline-block;\n\n\t\t\t      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;\n\t\t\t      animation: stretchdelay 1.2s infinite ease-in-out;\n\t\t\t    }\n\n\t\t\t    .spinner .rect2 {\n\t\t\t      -webkit-animation-delay: -1.1s;\n\t\t\t      animation-delay: -1.1s;\n\t\t\t    }\n\n\t\t\t    .spinner .rect3 {\n\t\t\t      -webkit-animation-delay: -1.0s;\n\t\t\t      animation-delay: -1.0s;\n\t\t\t    }\n\n\t\t\t    .spinner .rect4 {\n\t\t\t      -webkit-animation-delay: -0.9s;\n\t\t\t      animation-delay: -0.9s;\n\t\t\t    }\n\n\t\t\t    .spinner .rect5 {\n\t\t\t      -webkit-animation-delay: -0.8s;\n\t\t\t      animation-delay: -0.8s;\n\t\t\t    }\n\n\t\t\t    @-webkit-keyframes stretchdelay {\n\t\t\t      0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n\t\t\t      20% { -webkit-transform: scaleY(1.0) }\n\t\t\t    }\n\n\t\t\t    @keyframes stretchdelay {\n\t\t\t      0%, 40%, 100% {\n\t\t\t        transform: scaleY(0.4);\n\t\t\t        -webkit-transform: scaleY(0.4);\n\t\t\t      } 20% {\n\t\t\t        transform: scaleY(1.0);\n\t\t\t        -webkit-transform: scaleY(1.0);\n\t\t\t      }\n\t\t\t    }\n\t\t\t </style>\n\n\t\t\t <div id=\"overlay\">\n\t\t\t   <div class=\"spinner\">\n\t\t\t     LOADING\n\t\t\t    <div class=\"rect1\"></div>\n\t\t\t    <div class=\"rect2\"></div>\n\t\t\t    <div class=\"rect3\"></div>\n\t\t\t    <div class=\"rect4\"></div>\n\t\t\t    <div class=\"rect5\"></div>\n\t\t\t  </div>\n\n\t\t\t </div>\n\t\t\t";
		thx_Timer.delay(thx_Functions.noop,0);
	});
	var __afterVar_14 = function(module) {
		module;
		module.controller("OutputController",["$scope",OutputController.factory]);
		window.angular.bootstrap(window.document.getElementById("app"),["app"]);
		var element1 = window.document.getElementById("browser-tools-loading");
		if($bind(element1,element1.remove) == null) element1.parentNode.removeChild(element1); else element1.remove();
		element1;
		var tmp1;
		var node1 = window.document.body;
		tmp1 = node1.getElementsByClassName("start-hide");
		var elements = tmp1;
		var _g = 0;
		while(_g < elements.length) {
			var element2 = elements[_g];
			++_g;
			element2.style.display = "block";
		}
		thx_Functions.noop();
	};
	var config = Main.app;
	var __return = function(__parameter_15) {
		__afterVar_14(__parameter_15);
	};
	var assets = config.assets;
	var __return1 = function() {
		var module1 = window.angular.module("app",config.modules);
		module1;
		window.console.log("create angular module","app");
		var config1 = config;
		module1.config(["$routeProvider",function(route) {
			var route2 = route;
			var _g1 = 0;
			var _g11 = config1.routes.paths;
			while(_g1 < _g11.length) {
				var route1 = _g11[_g1];
				++_g1;
				var route_path = route1.route;
				var route_controller = route1.controller;
				var route_templateUrl = route1.template_url;
				route2.when(route_path,{ controller : route_controller, templateUrl : route_templateUrl});
				route2;
			}
			route2.otherwise(config1.routes.default_path);
			route2;
		}]);
		module1;
		window.console.log("","route processed");
		__return(module1);
	};
	var __iterator = 0;
	var __doCount = 0;
	var tmp2;
	var __continue_01 = null;
	__continue_01 = function() {
		if(__iterator < assets.length) {
			if(__doCount++ == 0) while(true) {
				var group = [assets[__iterator++]];
				group[0];
				var __afterVar_3 = [(function(group) {
					return function(grr) {
						grr;
						window.console.log("loaded group:",group[0]);
						__continue_01();
					};
				})(group)];
				var group1 = group[0];
				var __return2 = [(function(__afterVar_3) {
					return function(__parameter_10) {
						__afterVar_3[0](__parameter_10);
					};
				})(__afterVar_3)];
				window.console.log("","start loading assets");
				var __afterVar_4 = [(function(__return2) {
					return function(assets1) {
						assets1;
						browser_$tools_Assets.wait(1,(function(__return2) {
							return function(__parameter_9) {
								__parameter_9;
								window.console.log("","end loading assets");
								__return2[0](assets1);
							};
						})(__return2));
					};
				})(__return2)];
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
						var asset = [group1[__iterator1++]];
						var __index = [__i];
						__counter[0]++;
						var file = [asset[0]];
						var __return3 = [(function(__index,asset,__checkCounter,__results) {
							return function(__parameter_8) {
								__parameter_8;
								window.console.log("load asset:",asset[0]);
								__results[0][__index[0]] = asset[0];
								__checkCounter[0]();
							};
						})(__index,asset,__checkCounter,__results)];
						var __endIf_0 = [(function(__return3,file) {
							return function() {
								__return3[0](file[0]);
								return;
							};
						})(__return3,file)];
						if(file[0].indexOf(".css") > 0) {
							var tmp3;
							var _this1 = window.document;
							tmp3 = _this1.createElement("link");
							var link = tmp3;
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
							var tmp4;
							var _this2 = window.document;
							tmp4 = _this2.createElement("script");
							var script = tmp4;
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
		} else __return1();
	};
	tmp2 = __continue_01;
	var __continue_0 = tmp2;
	__continue_0();
};
var angular_internal_ModuleMacros = function() { };
var browser_$tools_Assets = function() { };
browser_$tools_Assets.wait = function(n,cb) {
	setTimeout(cb,n);
};
var thx_Functions = function() { };
thx_Functions.noop = function() {
};
var thx_Timer = function() { };
thx_Timer.delay = function(callback,delayms) {
	return (function($this) {
		var $r;
		var id = setTimeout(callback,delayms);
		$r = function() {
			thx_Timer.clear(id);
		};
		return $r;
	}(this));
};
thx_Timer.nextFrame = function(callback) {
	var id = requestAnimationFrame(callback);
	return function() {
		cancelAnimationFrame(id);
	};
};
thx_Timer.clear = function(id) {
	return clearTimeout(id);
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
var q = window.jQuery;
var js = js || {}
js.JQuery = q;
var scope = ("undefined" !== typeof window && window) || ("undefined" !== typeof global && global) || this;
if(!scope.setImmediate) scope.setImmediate = function(callback) {
	scope.setTimeout(callback,0);
};
var lastTime = 0;
var vendors = ["webkit","moz"];
var x = 0;
while(x < vendors.length && !scope.requestAnimationFrame) {
	scope.requestAnimationFrame = scope[vendors[x] + "RequestAnimationFrame"];
	scope.cancelAnimationFrame = scope[vendors[x] + "CancelAnimationFrame"] || scope[vendors[x] + "CancelRequestAnimationFrame"];
	x++;
}
if(!scope.requestAnimationFrame) scope.requestAnimationFrame = function(callback1) {
	var currTime = new Date().getTime();
	var timeToCall = Math.max(0,16 - (currTime - lastTime));
	var id = scope.setTimeout(function() {
		callback1(currTime + timeToCall);
	},timeToCall);
	lastTime = currTime + timeToCall;
	return id;
};
if(!scope.cancelAnimationFrame) scope.cancelAnimationFrame = function(id1) {
	scope.clearTimeout(id1);
};
if(typeof(scope.performance) == "undefined") scope.performance = { };
if(typeof(scope.performance.now) == "undefined") {
	var nowOffset = new Date().getTime();
	if(scope.performance.timing && scope.performance.timing.navigationStart) nowOffset = scope.performance.timing.navigationStart;
	scope.performance.now = (function($this) {
		var $r;
		var now = function() {
			return new Date() - nowOffset;
		};
		$r = now;
		return $r;
	}(this));
}
Main.app = { modules : ["ngRoute","googlechart"], assets : [["https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css","https://cdnjs.cloudflare.com/ajax/libs/bootstrap-material-design/0.3.0/css/material.min.css"],["https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.5/angular.min.js"],["https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.4.5/angular-route.min.js","https://cdnjs.cloudflare.com/ajax/libs/angular-google-chart/0.0.11/ng-google-chart.min.js"]], routes : { paths : [{ controller : "OutputController", template_url : "/output.html", route : "/output"}], default_path : "/output"}};
Main.main();
})(typeof console != "undefined" ? console : {log:function(){}});
