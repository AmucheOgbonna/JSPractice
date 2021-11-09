//Illustrating modules
const { john, alex } = require('./names');
const sayHi = require('./utils');
require('./7-mind-grenade');

sayHi("Susan");
sayHi(john);