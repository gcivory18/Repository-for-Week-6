var expect = chai.expect;

const arr1 = [2, 4, 6, 8, 10, 12]
const arr2 = [2, 4, 6, 8, 10, 12]

describe('CardShuffle', function() {
    describe('#shuffle', function() {
        it('should iterate through the deck to create a new array of shuffled cards', function() {
            var x = shuffle(arr1);
            expect(x).to.have.different.order(arr2);
            //if the arrays should have a different order if the shuffle function worked
        });
        it('should throw an error if the arrays are in the same order', function(){
            expect(function() {
                shuffle(arr1).to.equal(arr2);
            }).to.throw(Error);
        })
    });
});