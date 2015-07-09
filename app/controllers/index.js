var utter = require("com.jamiefisher.utterance");



utter.setup();
utter.talk({
    rate: 0.2,
    text: "At the start of time there was...",
    volume: 0.5
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
}
);



function doClick(e) {
    alert($.label.text);
}

$.index.open();
