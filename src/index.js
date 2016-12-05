var gotNames = require('./got-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
	all : gotNames,
	random : uniqueRandomArray(gotNames)
}