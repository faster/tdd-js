import StringCalculator from "./StringCalculator";
import test from 'mocha-cases'
import "chai/register-should";
import "chai/register-expect";

describe("StringCalculator", () => {
    var calc = new StringCalculator();
    
    it("returnZero_onEmptyInput", function(){
        var res = calc.add("");
        res.should.be.equal(0);
    });

    test({
        name: "sum_ComaSeparatedNumbers sum of {value} is {expected}", 
        values: ["", "42", "42,13", "1,2,3,4,5"],
        expected: [0, 42, 55, 15] 
    }, calc.add);

    test({
        name: "sum_NewlineSeparatedNumbers sum of {value} is {expected}", 
        value: "1\n2\n3",
        expected: 6 
    }, calc.add);

    test({
        name: "sum_NumbersSeparatedByBothCommaAndNewline sum of {value} is {expected}", 
        value: "1\n2,3",
        expected: 6 
    }, calc.add);

    test({
        name: "sumDelimiterFromFirstSpecialLine sum of {value} is {expected}", 
        values: ["//;\n1;2;3", "//|\n4|5|61"],
        expected: [6, 70]
    }, calc.add);

    it("throwException_onNegativeNumbers", function(){
        expect(()=>calc.add("-1")).to.throw();
    });
    
    it("listAllNegativesInExceptionMessage_whenFail", function(){
        expect(()=>calc.add("-1,2,-5,-100,8")).to.throw("negatives not allowed: -1, -5, -100");
    });
});
