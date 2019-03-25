// DOM
let bildeListe = document.querySelectorAll("#innpakning img");
let sirkelListe = document.querySelectorAll(".fa-circle");
let animasjon;
let bildeIndeks = 0;

const bildeBredde = 1024;
const tid = 5000;
const timing = {
    duration: tid/4,
    easing: "ease-in-out",
    fill: "forwards"
};

// De fire ulike animasjonene
let innFraHoyre = [
    { left: `${bildeBredde}px`},
    { left: 0}
];

let innFraVenstre = [
    { left: `${-bildeBredde}px`},
    { left: 0}
];

let utTilHoyre = [
    { left: 0},
    { left: `${bildeBredde}px`}
];

let utTilVenstre = [
    { left: 0},
    { left: `${-bildeBredde}px`}
];

// Flytter bildene fra en gammel indeks til en ny indeks
function flytt(gammelIndeks, nyIndeks, rettning){

    console.log(gammelIndeks, nyIndeks, rettning);

    // Hvis animasjonen kjører gjør vi ikke noe
    if (typeof animasjon !== "undefined" &&
        animasjon.playState === "running") {
        return;
    }

    // Hvilken retning er flytten?
    if (rettning === "venstre") {
        animasjon = bildeListe[gammelIndeks].animate(utTilVenstre, timing);
        bildeListe[nyIndeks].animate(innFraHoyre, timing);
    } else {
        animasjon = bildeListe[gammelIndeks].animate(utTilHoyre, timing);
        bildeListe[nyIndeks].animate(innFraVenstre, timing);
    }

    // Flytter sirklene
    sirkelListe[gammelIndeks].className = "fas fa-circle";
    sirkelListe[nyIndeks].className = "far fa-circle";

    // Oppdaterer bildeIndeksen
    bildeIndeks = nyIndeks;
}

// Lytterfunksjon for et spesifikt bilde vi skal flytte til
function flyttTilBilde(event){
    let nyIndeks = Number(event.target.dataset.indeks);
    if (bildeIndeks == nyIndeks){
        return;
    }

    // Hvilken retning skal vi flytte bildene?
    if (bildeIndeks > nyIndeks){
        flytt(bildeIndeks, nyIndeks, "høyre");
    }else {
        flytt(bildeIndeks, nyIndeks, "venstre");
    }
}

// Vi flytter bildene et steg høyre
function flyttHoyre(){
    let nyIndeks = (bildeListe.length + bildeIndeks - 1) % bildeListe.length;
    flytt(bildeIndeks, nyIndeks, "høyre");
}

// Vi flytter bildene et steg venstre
function flyttVenstre(){
    let nyIndeks = (bildeIndeks + 1) % bildeListe.length;
    flytt(bildeIndeks, nyIndeks, "venstre");
}

// Funksjon som går og gå ved å flytte bildene et
// steg venstre hele tiden
function flyttVenstreHeleTiden(){
    let nyIndeks = (bildeIndeks + 1) % bildeListe.length;
    flytt(bildeIndeks, nyIndeks, "venstre");
    setTimeout(flyttVenstreHeleTiden, tid);
}

// Setter igang animasjonen
flyttVenstreHeleTiden();
