'use strict';

Route.prototype = {
	name: undefined,
	htmlName: undefined,
	defaultRoute: undefined,

	constructor: function (name, htmlName, defaultRoute) {
		this.name = name;
		this.htmlName = htmlName,
		this.defaultRoute = defaultRoute;
	},
	isActiveRoute: function(path) {
		return path.replace('#', '') === this.name;:
	}
} 
