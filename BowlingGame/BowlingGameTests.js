import Game from "./BowlingGame"

export default function BowlingGameTests() {
    it("success test", function () {
        let game = new Game();
        game.Roll(5);
        console.log("test passed");
    });
}