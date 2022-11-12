//unit testing for line 70 shuffle function

const expect = chai.expect;

const arr1 = [2, 4, 6, 8, 10, 12] //created arrays to test the shuffle function
const arr2 = [2, 4, 6, 8, 10, 12] //since they are the same the test should throw an error


//testing to see if it will throw an error if the numbers do not shuffle
describe('myFunction', function() {
    describe('#shuffle', function() {
        it('should throw an error if the arrays are in the same order', function() {
            expect(function() {
                shuffle(arr1).to.eql(arr2);
            }).to.throw(Error);
        });
    });
});