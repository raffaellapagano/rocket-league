import { Propulsor } from "./propulsor";
var Coet = /** @class */ (function () {
    /// ejemplo potenPropuls = [10, 20, 30] igual a 3 propulsores de 10, 20 y 30
    function Coet(codi, potenPropuls) {
        this._codi = codi;
        this._propulsors = [];
        this._potenciaInicial = 0;
        this._acceleracio = 10;
        this._deceleracio = 10;
        for (var i = 0; i < potenPropuls.length; i++) {
            this._propulsors.push(new Propulsor(i + 1, potenPropuls[i]));
        }
    }
    return Coet;
}());
export { Coet };
//# sourceMappingURL=coet.js.map