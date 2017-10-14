import StringCalculator from './StringCalculator';
import chai from "chai";
chai.should();
//var expect = require('chai').expect;

describe("StringCalculator", function() {
    it('Sample one', function(){
        var calc = new StringCalculator();
        var result = calc.add("genka");
        result.should.eql(1);
    });
});
