export class Soldier {
    health: number;
    strength: number;
    
    constructor(health: number, strength: number){
        this.health = health;
        this.strength = strength;
    }

    attack(): number{
        return this.strength;
    }
    receiveDamage(damge: number): void{
        this.health = this.health - damge;
    }
}

