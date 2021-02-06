// start with strings, numbers and booleans

let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
const team = players;
console.log(team, players);

// You might think we can just do something like this:
team[3] = "Panter";
// however what happens when we update that array?
console.log(team, players);

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice();
team2[2] = "Theo";
team[1] = "kris";
console.log(players, team, team2);

// one way

// or create a new array and concat the old one in

// or use the new ES6 Spread  // More ways to do it
const team4 = [...players];
console.log(team4);
team4[1] = "Yeah T ";
console.log(players, team4);

const team5 = Array.from(players); //also works the same way

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age1: 80,
};

// and think we make a copy:
// const kris = person;
// kris.age = 32;
// console.log(kris); // it still referes to Wes

// how do we take a copy instead?
const kris = Object.assign({}, person, { age: 32, number: 20 });
console.log(kris, person);

// We will hopefully soon see the object ...spread

const theo = { ...person };
person.name = "wesley";
theo.name = "theodor";
console.log(theo);
console.log(person);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const person2 = {
  name: "Wes Bos",
  age1: 80,
  social: {
    twitter: "@kris",
    fbook: "kris",
  },
};

const theo2 = { ...person2 };
theo2.social.twitter = "@theo";

console.log(person2);
console.log(theo2);
