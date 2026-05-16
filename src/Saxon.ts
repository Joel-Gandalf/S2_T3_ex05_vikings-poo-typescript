import { Soldier } from "./Soldier";

export class Saxon extends Soldier {
    constructor(health: number, strength: number) {
        super(health, strength);

    }
    receiveDamage(damge: number): string {
        super.receiveDamage(damge);

        if (this.health <= 0) {
            return 'A Saxon has died in combat';
        }
        return 'A Saxon has received ' + damge + ' points of damage';
    }
}