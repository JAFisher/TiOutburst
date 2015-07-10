var outburst = require("com.jamiefisher.outburst");


var story = [{
    rate: 0.2,
    text: "At the start of time there was...",
    volume: 1.0
},{
    rate: 0.1,
    text: "The BIG BANG",
    volume: 1
},{
    rate: 0.2,
    text: "Then jeff sniffed an walnut.",
    volume: 1
},{
   rate: 0.2,
   text: "And the world was created...",
   volume: 1
}, {
   rate: 0.2,
   text: "Vending machines rose up against the great Jeff empire.",
   volume: 1
},{
    rate: 0.2,
    text: "however their delicious food only made him stronger.",
    volume: 1
},{
    rate: 0.2,
    text: "he ruled with an iron fist for the next thousand years...",
    volume: 1
}];


/**
 * languages suppoted are listed in the read me docs.
 *
 */

storyInFrench = [{
    rate: 0.2,
    text: "Au début de l' époque il y avait ...",
    volume: 1.0,
    language: "fr-FR"
},{
    rate: 0.1,
    text: "Le Big Bang",
    volume: 1,
    language: "fr-FR"
},{
    rate: 0.2,
    text: "Puis jeff renifla un noyer .",
    volume: 1,
    language: "fr-FR"
},{
   rate: 0.2,
   text: "Et le monde a été créé ...",
   volume: 1,
   language: "fr-FR"
}, {
   rate: 0.2,
   text: "Les distributeurs automatiques se sont élevés contre le grand empire Jeff .",
   volume: 1,
   language: "fr-FR"
},{
    rate: 0.2,
    text: "Cependant leur délicieuse nourriture seulement rendu plus fort .",
    volume: 1,
    language: "fr-FR"
},{
    rate: 0.2,
    text: "il a régné avec une poigne de fer pour les mille prochaines années ...",
    volume: 1,
    language: "fr-FR"
}];


outburst.talk(story);


/**
 * replay the current conversion.
 */
function replay(){
    outburst.replay();
}
/**
 * outburstance will stop straight away.
 */
function pause(){
    outburst.pauseTalking();
}

function resume(){
    outburst.resume();
}

function availableLanguages(){
    var _available = outburst.showAvailableLanguages();
    console.log(_available);
}
/*
    mon qui!
 */
function speakInFrench(){
    outburst.talk(storyInFrench);
}

function speakInEnglish(){
    outburst.talk(story);
}

$.index.open();
