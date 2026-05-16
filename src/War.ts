import { Viking } from "./Viking";
import { Saxon } from "./Saxon";


export class War {
    vikingArmy: Viking[];
    saxonArmy: Saxon[];
    
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking: Viking): undefined {
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon: Saxon): undefined {
        this.saxonArmy.push(saxon);

    }

    vikingAttack(): string {
        const randomVikingIndex: number = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex: number = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking: Viking = this.vikingArmy[randomVikingIndex];
        const randomSaxon: Saxon = this.saxonArmy[randomSaxonIndex];

        const damageResult: string = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonIndex, 1);
        }
        return damageResult;
    }

    saxonAttack(): string {
        const randomVikingIndex: number = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex: number = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking: Viking = this.vikingArmy[randomVikingIndex];
        const randomSaxon: Saxon = this.saxonArmy[randomSaxonIndex];

        const damageResult: string = randomViking.receiveDamage(randomSaxon.strength);

        if (randomViking.health <= 0){
            this.vikingArmy.splice(randomVikingIndex, 1);
        }
        return damageResult;
    }

    showStatus(): string {
        if(this.saxonArmy.length === 0){
            return 'Vikings have won the war of the century!'
        }
        if(this.vikingArmy.length === 0){
            return 'Saxons have won the war of the century!'
        }
        return 'Vikings and Saxons are still in the thick of battle.'
    }
}