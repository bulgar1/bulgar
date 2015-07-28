(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = [];

	function HomeFactory() {
		//the o.object representing the functions residing in HomeFactory and all data that
		//is passed on to the Controller
		var o = {};
		//A color randomizer in DIRE need of improvement :)
// Your core coderbyte functions will reside HERE and you already have a button to execute them :)
//remember the core function starts here, is passed to the HOMECONTROLLER (via $.inject), then finally
//is passed to the HOME.HTML via "ng-controller" and "vm"
o.colorChange = function() {
	if (Math.random() > .5) {
		document.getElementById("body").style.background = "blue";
	} else if
	(Math.random() < .5) {
		document.getElementById("body").style.background = "red";
	}
}
// "o" Must be returned in order for the functions that are part of the "o" object to exist.
//Not returning "o" might give you an error of "[injector:undef]" aka undefined in the console
return o;
}
})();
