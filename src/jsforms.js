(function () {
    'use strict';

    // Generic functions

    function isType(typeStr, value) {
        return typeof value === typeStr;
    }

    function eitherType(typeStr, defaultValue, value){
        return isType(typeStr, value) ? value : defaultValue;
    }

    function conj (value, list) {
        return list.concat([value]);
    }

    function inc (value) {
        return value + 1;
    }

    // Final vector as data type
    // Interactions with the Vector type would be as follows:
    // var vector = Vector(1, 2, 3);
    // console.log(vector); // <1,2,3>

    function Vector() {
        var points = Array.prototype.slice.call(arguments, 0);
        var vector = this instanceof Vector ? this : new Vector();

        return Vector.attachValues(vector, points);
    }

    // Vector static methods
    Vector.attachValueAtIndex = function (vector, value, index) {
        vector[index] = value;
        return vector;
    };

    Vector.attachValues = function (vector, values) {
        return values.reduce(Vector.attachValueAtIndex, vector);
    };

    Vector.getPoints = function (vector, index, points) {
        points = eitherType('object', [], points);
        index = eitherType('number', 0, index);

        var point = vector[index];
        return isType('undefined', point) ? points : Vector.getPoints(vector, inc(index), conj(point, points));
    };

    // Vector method overrides
    Vector.prototype = {
        valueOf: function () {
            return Vector.getPoints(this);
        },

        toString: function () {
            return '<' + this.valueOf().toString() + '>';
        }
    };

    // Factory method for vector type
    function buildVector(valueArray) {
        return Vector.apply(null, valueArray);
    }

    function greet(greeting) {
        return eitherType('string', 'Hello', greeting) + '!';
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

    function sumOfSquares(nums) {
        return nums.valueOf().map(square).reduce(add, 0);
    }

    function magnitude(vector) {
        var summedSquares = sumOfSquares(vector);
        return squareRoot(summedSquares);
    }

    // convenience function for vector filtering
    function isShorterVector(maxLength, vector) {
        return magnitude(vector) <= maxLength;
    }

    // Final vector filter behavior
    function getVectorsShorterThan(maxLength, vectors) {
        return vectors.filter(isShorterVector.bind(null, maxLength));;
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