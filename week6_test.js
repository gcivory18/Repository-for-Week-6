//unit testing for line 82 freshDeck function


var expect = chai.expect;

array1 = [2, 4, 6, 8, 10, 12]
//testing to see if it will throw an error if a string or boolean is passed in instead of a number
describe('myFunction', function() {
    describe('#freshDeck', function() {
        it('should throw an error if a number is not passed in', function() {
expect(function() {
    freshDeck('Wordz');
    }).to.throw(Error);  
        })
    });
});