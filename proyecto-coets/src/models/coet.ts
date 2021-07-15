import { Propulsor } from "./propulsor";

export class Coet{
    public _codi: string;
    public _propulsors: Propulsor[];
    public _potenciaInicial: number;
    public _acceleracio: number;
    public _deceleracio: number;
    public _curpower: number;
    public _posX: number;
    public _posY: number;
    

/// ejemplo potenPropuls = [10, 20, 30] igual a 3 propulsores de 10, 20 y 30
    constructor(codi:string, potenPropuls:Array<number>){
        this._codi= codi;
        this._propulsors= [];
        this._potenciaInicial= 0;
        this._acceleracio = 10;
        this._deceleracio= 10;
        this._curpower = 0;
        this._posX = 0;
        this._posY = 0;

        for (let i = 0; i < potenPropuls.length; i++) {
            this._propulsors.push(new Propulsor(i+1, potenPropuls[i]))
            
        }
    }

    getMaxPower() :number{
        let power = 0;
        for (let i = 0; i < this._propulsors.length; i++) {
            power = power + this._propulsors[i]._maxpower;
            
        }
        return power;
    }

    accelerar() :number{
        const maxPower = this.getMaxPower();
        if(this._curpower < maxPower){
        this._curpower = this._curpower + this._acceleracio;
        }
        return this._curpower;
    }

    frenar() :number{
        if(this._curpower > this._deceleracio){
            this._curpower = this._curpower - this._deceleracio;
            }else{
                this._curpower = 0;
                alert("The power is off")
            }
            return this._curpower;
    }

    veure() :string {
        let textPropusolr = "";
        for (let i = 0; i < this._propulsors.length; i++) {
            textPropusolr = textPropusolr + `
            Propulsor ${this._propulsors[i]._idPropulsor} amb potencia ${this._propulsors[i]._maxpower} 
            `
            
        }
        return `
        El codi del coet es ${this._codi}.
        
        Té ${this._propulsors.length} propulsors:
        ${textPropusolr}.
        Actualment viatge amb ${this._curpower}
        `
    }
}