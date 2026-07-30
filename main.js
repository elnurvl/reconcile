function isSumEqualToZero(a, b, c) {
    return a.plus(b).plus(c) == 0;
}
var Asset = /** @class */ (function () {
    function Asset(value) {
        this.value = value;
    }
    Asset.prototype.plus = function (a) {
        return new Asset(this.value + a.value);
    };
    Asset.make = function (value) {
        return new Asset(value * 100);
    };
    return Asset;
}());
var _a = process.argv.slice(2).map(function (s) {
    return Asset.make(Number(s));
}), a = _a[0], b = _a[1], c = _a[2];
console.log(isSumEqualToZero(a, b, c));
