var Propulsor = /** @class */ (function () {
    function Propulsor(id, maxpower) {
        this._idPropulsor = id;
        this._maxpower = maxpower;
    }
    Object.defineProperty(Propulsor.prototype, "maxpower", {
        get: function () {
            return this._maxpower;
        },
        enumerable: false,
        configurable: true
    });
    return Propulsor;
}());
export { Propulsor };
//# sourceMappingURL=propulsor.js.map