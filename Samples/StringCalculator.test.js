import StringCalculator from "./StringCalculator";
import "chai/register-should";
import "chai/register-expect";

describe("StringCalculator", function() {
    var calc = new StringCalculator();
    
    it("returnZero_onEmptyInput", function(){
        var res = calc.add("");
        res.should.be.equal(0);
    });
    it("throwException_onNegativeNumbers", function(){
        expect(()=>calc.add("-1")).to.throw();
    });
    it("listAllNegativesInExceptionMessage_whenFail", function(){
        expect(()=>calc.add("-1,2,-5,-100,8")).to.throw("negatives not allowed: -1, -5, -100");
    });
});
