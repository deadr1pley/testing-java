/**
 * @jest-environment jsdom
 */

const { test } = require("picomatch");
const { game } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.body.innerHTML = fileContents;
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
     test("CurrentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
     test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
     test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices comtaine correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});