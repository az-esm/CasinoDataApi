/**
 * CasinoDataApi entities Usage example
 **/

///<reference path="../entities.d.ts" />

import { entities } from '../entities';

let img1: entities.Image = { path: "img/1.jpg", xz: 100, yz: 100 };
let img2: entities.Image = { path: "img/2.jpg", xz: 100, yz: 100 };

let g1: entities.Game = {
    id: 1,
    name: "first game",
    background: img1,
    thumbs: [img1, img2],
    hasDemo: true,
    isHot: false,
    jackpotId: "jackpot1",
    isNew: true,
    populatiry: 51,
    priority: 2,
    provider: "moshe va-hetzi"
};

console.log("g1\n", g1);

let g2: entities.Game = { id: 2, name: "second game" };

let tags: entities.GameTag[] = [
    { id: 2, name: "slots" },
    { id: 3, name: "top10" }];

let gex: entities.GameEx = {
    id: 1,
    description: "the best game ever",
    maxBet: 1000,
    minBet: 1,
    screenshots: [img1, img2],
    since: new Date("1/Jan/2017"),
    gameTags: tags,
    features: new Array<number>()
};

gex.features["volatility"] = 2;
gex.features["risk"] = 1;

console.log("gex\n", gex);
console.log("gex.gameTags[1]\n", gex.gameTags[1])

// jackpot
let lvls: entities.JackpotLevel[] = [
    { name: "bronze", value: 1000 },
    { name: "gold", value: 5000 }];

let jp: entities.Jackpot = {
    id: "jackpot1",
    name: "TakeTheCash",
    cur: "$", levels: lvls
};


let gameList: entities.GameList = {
    id: 111, infoFlags: (entities.InfoFlags.categories | entities.InfoFlags.jackpot | entities.InfoFlags.mobile)
};

gameList.cdn = "http://mycdn.com/sbtech/b000";
gameList.name = "lobby";
gameList.categories = [
    { cat: tags[0], games: [g1, g2] },
    { cat: tags[1], games: [g1] }
];
gameList.jackpots = [jp];

console.log("gameList\n", gameList);
console.log("gameList.jackpots[0]\n", gameList.jackpots[0]);


/*** expected output ***

Debugger listening on [::]:5858
g1
 { id: 1,
  name: 'first game',
  background: { path: 'img//1.jpg', xz: 100, yz: 100 },
  thumbs:
   [ { path: 'img//1.jpg', xz: 100, yz: 100 },
     { path: 'img//2.jpg', xz: 100, yz: 100 } ],
  hasDemo: true,
  isHot: false,
  jackpotId: 'jackpot1',
  isNew: true,
  populatiry: 51,
  priority: 2,
  provider: 'moshe va-hetzi' }
gex
 { id: 1,
  description: 'the best game ever',
  maxBet: 1000,
  minBet: 1,
  screenshots:
   [ { path: 'img//1.jpg', xz: 100, yz: 100 },
     { path: 'img//2.jpg', xz: 100, yz: 100 } ],
  since: 2016-12-31T22:00:00.000Z,
  gameTags: [ { id: 2, name: 'slots' }, { id: 3, name: 'top10' } ],
  features: [ volatility: 2, risk: 1 ] }
gex.gameTags[1]
 { id: 3, name: 'top10' }
gameList
 { id: 111,
  infoFlags: 42,
  cdn: 'http://mycdn.com/sbtech/b000',
  name: 'lobby',
  categories:
   [ { cat: [Object], games: [Object] },
     { cat: [Object], games: [Object] } ],
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