export class descricao{
    altitude_max: number;
    sensores: string[];


    constructor(altitude_mac: number, sensores: string[]){
        this.altitude_max = altitude_mac;
        this.sensores = sensores;
    }
}