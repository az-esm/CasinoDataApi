/**
 * CasinoDataApi entities Usage example
 **/
"use strict";
var img1 = { path: "img/1.jpg", xz: 100, yz: 100 };
var img2 = { path: "img/2.jpg", xz: 200, yz: 200 };
var tags = [
    { id: 2, name: "slots" },
    { id: 3, name: "top10" }
];
var g1 = {
    id: 1,
    name: "first game",
    tags: tags,
    props: {
        hasDemo: true,
        isDesktop: true,
        isMini: false,
        isMobile: false
    },
    thumbs: [img1, img2],
    background: img1,
    provider: "moshe va-hetzi",
    populatiry: 51,
    priority: 2,
    isNew: true,
    isHot: false,
    jackpotId: "jackpot1",
};
console.log("g1\n", g1);
console.log("g1.tags[1]\n", g1.tags[1]);
var g2 = {
    id: 2,
    name: "second game",
    props: {
        isMobile: true
    }
};
console.log("g2\n", g2);
var gex1 = {
    id: 1,
    description: "the best game ever",
    maxBet: 1000,
    minBet: 1,
    screenshots: [img1, img2],
    since: new Date("1/Jan/2017"),
    features: new Array()
};
gex1.features["volatility"] = 2;
gex1.features["risk"] = 1;
console.log("gex1\n", gex1);
// jackpot
var lvls = [
    { name: "bronze", value: 1000 },
    { name: "gold", value: 5000 }
];
var jp = {
    id: "jackpot1",
    name: "TakeTheCash",
    cur: "$", levels: lvls
};
var gameList = {
    id: 111,
    cdn: "http://mycdn.com/sbtech/b000",
    games: [g1, g2],
    jackpots: [jp]
};
console.log("gameList\n", gameList);
console.log("gameList.jackpots[0]\n", gameList.jackpots[0]);
/*** expected output ***

Debugger listening on [::]:5858
g1
 { id: 1,
  name: 'first game',
  tags: [ { id: 2, name: 'slots' }, { id: 3, name: 'top10' } ],
  props: { hasDemo: true, isDesktop: true, isMini: false, isMobile: false },
  thumbs:
   [ { path: 'img/1.jpg', xz: 100, yz: 100 },
     { path: 'img/2.jpg', xz: 200, yz: 200 } ],
  background: { path: 'img/1.jpg', xz: 100, yz: 100 },
  provider: 'moshe va-hetzi',
  populatiry: 51,
  priority: 2,
  isNew: true,
  isHot: false,
  jackpotId: 'jackpot1' }
g1.tags[1]
 { id: 3, name: 'top10' }
g2
 { id: 2, name: 'second game', props: { isMobile: true } }
gex1
 { id: 1,
  description: 'the best game ever',
  maxBet: 1000,
  minBet: 1,
  screenshots:
   [ { path: 'img/1.jpg', xz: 100, yz: 100 },
     { path: 'img/2.jpg', xz: 200, yz: 200 } ],
  since: 2016-12-31T22:00:00.000Z,
  features: [ volatility: 2, risk: 1 ] }
gameList
 { id: 111,
  cdn: 'http://mycdn.com/sbtech/b000',
  games:
   [ { id: 1,
       name: 'first game',
       tags: [Object],
       props: [Object],
       thumbs: [Object],
       background: [Object],
       provider: 'moshe va-hetzi',
       populatiry: 51,
       priority: 2,
       isNew: true,
       isHot: false,
       jackpotId: 'jackpot1' },
     { id: 2, name: 'second game', props: [Object] } ],
  jackpots:
   [ { id: 'jackpot1',
       name: 'TakeTheCash',
       cur: '$',
       levels: [Object] } ] }
gameList.jackpots[0]
 { id: 'jackpot1',
  name: 'TakeTheCash',
  cur: '$',
  levels:
   [ { name: 'bronze', value: 1000 },
     { name: 'gold', value: 5000 } ] }


**** ***/ 
//# sourceMappingURL=example.js.map