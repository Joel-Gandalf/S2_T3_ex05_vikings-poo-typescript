import { Viking } from "./Viking";
import { Saxon } from "./Saxon";


export class War {
    vikingArmy: Viking[];
    saxonArmy: Saxon[];
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
}