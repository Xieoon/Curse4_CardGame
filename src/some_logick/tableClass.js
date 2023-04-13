import Card from "./cardClass";

export default class Table{
    constructor(allCards){
        this.allCards = allCards
       console.log(allCards );
    }

    openCards(){
        this.allCards.forEach(el =>el.cardOpen());
    }

    closeCards(){
        console.log('бам');

        this.allCards.forEach(el =>el.cardClose());
    }
}