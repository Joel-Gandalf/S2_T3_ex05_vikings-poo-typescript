import { Soldier } from "./Soldier";

export class Viking extends Soldier{
    name: string;
    constructor(name: string, health: number, strenght: number){
        super(health, strenght);
        this.name = name;
    }
}