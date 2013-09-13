var StringCalculator = (function () {
    function StringCalculator() {
    }
    StringCalculator.prototype.Add = function (numbers) {
        if (numbers == "")
            return 0;

        return parseInt(numbers);
    };
    return StringCalculator;
})();
