(function () {
    'use strict';

    function greet(greeting) {
        if (greeting === undefined) {
            return 'Hello!';
        } else {
            return greeting + '!';
        }
    }

    function square(x) {
        return Math.pow(x ,2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function sum(nums) {
        var finalSum = 0;

        for(var index = 0; index < nums.length; index++) {
            finalSum += nums[index];
        }
        return finalSum;
    }

    function squareAll(nums) {
        var result = [];
        var squaredNum = 0;

        for(var index = 0; index < nums.length; index++) {
            squaredNum = square(nums[index]);
            result[index] = squaredNum;
        }
        
        return result;
    }

    function sumOfSquares(nums){
        var squares = squareAll(nums);
        return sum(squares);
    }

    module.exports = {
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };
})();