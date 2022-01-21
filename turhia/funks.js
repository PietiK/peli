//import Deck from './cards.js'

let dumppi = [];

class Player {
    constructor(name) {
        this.name = name;
        this.money = 0;
        this.inventory = [];
        this.attackpoints = 0;
        this.victorypoints = 0;
    }
}

function startGame() {
    //Kolme kolikkoa kaikille
    players = [];
    players.push(new Player("Testi"));
    players.push(new Player("Kakkone"));
    console.log(players);

    for(i=0;i<=players.length;i++) {
        players[i].money = 3;
        dumppi.push(Deck.shift());
        dumppi.push(Deck.shift());
        dumppi.push(Deck.shift());
    }
    console.log(players);
}

function takeaCard() {
    Deck.shift();
}

function searching() {
    //Käännä kortteja kunnes haluat lopettaa
    //Tai kaksi saman väristä laivaa
    
    //klikkaa button
        //Käännä kortti
            //tarkista onko kahta samanlaista laivaa
            //jos on -> tarkista onko pääkallo, tarkista onko pelaajalla enemmän miekkoja
        //Klikkaa eri button - siirry sellandhire vaiheeseen
}

function sellAndHire() {
    //Myy laivoja tai palkkaa ihmisiä
    //Myy laiva - lisää pelaajalle kolikoita
        //-seuraavan vuoro valita
    //Palkkaa henkilö - tarkista onko pelaajalla kolikoita - vähennä kolikot ja lisää pelaajalle henkilö
}

function destroy() {
    //Tuhoa laiva
}

function failed() {
    //Kaksi samaa laivaa - tyhjennä pöytä
}