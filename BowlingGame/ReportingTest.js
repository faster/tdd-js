import tests from "./BowlingGameTests";
import ResultReporter from "./ResultReporter";

describe("Bowling game", () => {
    tests();

    before(function () {
        console.log("before")
    });
    after(function () {
        var reporter = new ResultReporter();
        reporter.reportResults({
            Name: "anatoliy",
            Result: "not bad"
        });
    });
    beforeEach(function () {
        console.log("before each")
    });
    afterEach(function () {
        //console.log(this.currentTest);
    });
});
