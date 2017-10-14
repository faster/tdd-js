import StringCalculator from "./StringCalculator";
import "chai/register-should";

describe("StringCalculator", function() {
    it("Sample one", function(){
        var calc = new StringCalculator();
        var result = calc.add("genka");
        result.should.be.equal(1);
    });
});
