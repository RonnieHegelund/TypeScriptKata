/// <reference path="../StringCalculator.ts" />
/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />

describe("StringCalculator", () => {

    it("Given an empty string should return zero", () => {
        // Fixture setup
        var sut = new StringCalculator();
        // Exercise system
        var expected = 0;
        // Verify outcome

        expect(sut.Add("")).toEqual(expected);
        // Teardown
    });

    it("given a single number should return number", () => {
        // Fixture setup
        var sut = new StringCalculator();
        // Exercise system
        var expected = 1;
        // Verify outcome
        expect(sut.Add("1")).toEqual(expected);
        // Teardown
    });

    it("given two numbers should return the sum of both numbers", () => {
        // Fixture setup
        var sut = new StringCalculator();
        // Exercise system
        var expected = 3;
        // Verify outcome
        expect(sut.Add("1,2")).toEqual(expected);
        // Teardown
    });

    it("given new line as delimitter should return the sum of all numbers", () => {
        // Fixture setup
        var sut = new StringCalculator();
        // Exercise system
        var expected = 6;
        // Verify outcome

        expect(sut.Add("1\n2\n3")).toEqual(expected);
        // Teardown
    });

    it("Negative numbers error message should contain negative number", () => {
        // Fixture setup
        var sut = new StringCalculator();
        // Exercise system
        var expected = new Error("Negative numbers not allowed (-1)");
        // Verify outcome
        expect(() => sut.Add("-1")).toThrow(expected);
        // Teardown
    });

    it("Numbers bigger than 1000 should be ignored", () => {
        // Fixture setup
        var sut = new StringCalculator();
        // Exercise system
        var expected = 6;
        // Verify outcome

        expect(sut.Add("1,1001,2,3")).toEqual(expected);
        // Teardown
    });



});

