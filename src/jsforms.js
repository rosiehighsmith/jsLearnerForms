(function () {
    'use strict';

    function greet(greeting) {
        var message = greeting !== undefined ? greeting : 'Hello';

        return message + '!';
    }

    function square(x) {
        return Math.pow(x, 2);
    }

    function squareRoot(x) {
        return Math.sqrt(x);
    }

    function add(a, b) {
        return a + b;
    }

    function sum(nums) {
        var finalSum = 0;

        nums.forEach(function (value) {
            finalSum = add(finalSum, value);
        });
        
        return finalSum;
    }

    function squareAll(nums) {
        return nums.map(square);
    }

    function sumOfSquares(nums) {
        var squares = squareAll(nums);
        return sum(squares);
    }

    function Vector(valueArray) {
        this.points = valueArray;
    }

    Vector.prototype = {
        valueOf: function () {
            return this.points.slice(0);
        },

        toString: function () {
            return '<' + this.points.valueOf().toString() + '>';
        }
    };

    function buildVector(valueArray) {
        var vector = valueArray.slice(0);

        vector.valueOf = function() {
            return this.slice(0);
        };

        vector.toString = function() {
            return '<' + this.valueOf().toString() + '>';
        };

        return vector;

    }
    
    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    function getVectorsShorterThan(maxLength, vectors) {
        var filteredVectors = [];

        for(var index = 0; index < vectors.length; index++) {
            if(magnitude(vectors[index]) < maxLength) {
                filteredVectors[filteredVectors.length] = vectors[index];
            }
        }

        return filteredVectors;
    }

    module.exports = {
        getVectorsShorterThan: getVectorsShorterThan,
        magnitude, magnitude,
        buildVector: buildVector,
        sumOfSquares: sumOfSquares,
        squareAll: squareAll,
        sum: sum,
        squareRoot: squareRoot,
        square: square,
        greet: greet
    };

})();