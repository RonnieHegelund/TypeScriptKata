describe("StringCalculator", function () {
    it("Given an empty string should return zero", function () {
        var sut = new StringCalculator();

        var expected = 0;

        expect(sut.Add("")).toEqual(expected);
    });

    it("given a single number should return number", function () {
        var sut = new StringCalculator();

        var expected = 1;

        expect(sut.Add("1")).toEqual(expected);
    });
});
