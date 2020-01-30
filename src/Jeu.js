import React from 'react';

const cardGame = {
    color : [
        "coeur",
        "carreau",
        "pique",
        "trefle"
    ],
    value : {
        2 : 2,
        3 : 3,
        4 : 4,
        5 : 5,
        6 : 6,
        7 : 7,
        8 : 8,
        9 : 9,
        10 : 10,
        valet : 10,
        dame : 10,
        roi : 10,
        as : 11,
    },
    init(){
        let cards = []
        console.log(this.value)
        for(let c of this.color){
            for(let v in this.value){
                cards.push(
                    {
                        'color': c,
                        'figure' : v,
                        'point' : this.value[v]
                    }
                )
            }
        }
        console.log(cards)
        return cards
    }
}

let cards = cardGame.init()
console.log(cards)

function Jeu(){
    return(
        <div>tas de cartes</div>
    )
}

export default Jeu