export class Propulsor{
    public _idPropulsor: number;
    public _maxpower: number;

    constructor(id:number, maxpower:number){
        this._idPropulsor = id;
        this._maxpower = maxpower;
    }

    public get maxpower(): number{
        return this._maxpower;
    }
}