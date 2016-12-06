var gotNames = require('./index');
var expect = require('chai').expect;

describe('Got Char Names', function() {
	
	describe('all', function() {
		
		it('should be an array of strings', function() {
			expect(gotNames.all).to.satisfy(isArrayOfStrings);

			function isArrayOfStrings(array) {
				return array.every(function(item) {
					return typeof item === 'string';
				});
			} 
		}); 

		it('should contain `Arya Stark`', function() {
			expect(gotNames.all).to.include('Arya Stark');
		});
	});

	describe('random', function() {
		it('should return a random name from got names array', function() {
			var randomItem = gotNames.random();
			expect(gotNames.all).to.include(randomItem);
		});
	});

});