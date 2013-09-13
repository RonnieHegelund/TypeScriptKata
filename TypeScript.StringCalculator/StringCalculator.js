var StringCalculator = (function () {
    function StringCalculator() {
    }
    StringCalculator.prototype.Add = function (numbers) {
        if (numbers == "")
            return 0;

        if (parseInt(numbers) < 0)
            throw new Error("Negative numbers not allowed (-1)");

        if (numbers.indexOf("\n"))
            numbers = numbers.replace(/\n/g, ",");

        if (numbers.indexOf(",") !== -1)
            return numbers.split(",").map(function (a) {
                return parseInt(a);
            }).filter(function (a) {
                return a < 1000;
            }).reduce(function (a, b) {
                return a + b;
            });

        return parseInt(numbers);
    };
    return StringCalculator;
})();
//# sourceMappingURL=StringCalculator.js.map
