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

}