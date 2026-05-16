import { Soldier } from "./Soldier";

export class Viking extends Soldier{
    name: string;
    constructor(name: string, health: number, strength: number){
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damge: number): string {
        super.receiveDamage(damge);

        if(this.health <= 0){
            return this.name + ' has died in act of combat';
        }
        return this.name + ' has received ' + damge + ' points of damage';  
    }

    battleCry(): string{
        return 'Odin Owns You All!'
    }
}