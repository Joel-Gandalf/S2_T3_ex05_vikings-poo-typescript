import { Viking } from "./Viking";
import { Saxon } from "./Saxon";


export class War {
    vikingArmy: Viking[];
    saxonArmy: Saxon[];
    
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(viking: Viking){
        this.vikingArmy.push(viking);
    }

    addSaxon(saxon: Saxon){
        this.saxonArmy.push(saxon);

    }

    vikingAttack(){
        const randomVikingIndex: number = Math.floor(Math.random() * this.vikingArmy.length);
        const randomSaxonIndex: number = Math.floor(Math.random() * this.saxonArmy.length);

        const randomViking: Viking = this.vikingArmy[randomVikingIndex];
        const randomSaxon: Saxon = this.saxonArmy[randomSaxonIndex];

        const damageResult: string = randomSaxon.receiveDamage(randomViking.strength);

        if (randomSaxon.health <= 0){
            this.saxonArmy.splice(randomSaxonIndex, 1);
            return damageResult;
        }
        return damageResult;
    }
}