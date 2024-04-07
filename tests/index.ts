import * as assert from "node:assert";
import {SmokeTest} from "../dist";

describe("index", () => {
    it('should say "hello world"', () => {
        // console.log("hello world");
        SmokeTest.HelloWorld();
        assert.ok(true);
    });
})