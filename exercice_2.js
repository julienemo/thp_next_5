const gamers = [
  { name: "Jean",
    age: 34,
    isGood: true},
  { name: "Christophe",
    age: 80,
    isGood: true},
  { name: "Sarah",
    age: 24,
    isGood: true},
  { name: "Eliot",
    age: 14,
    isGood: true},
  { name: "Sam",
    age: 35,
    isGood: false},
  { name: "Max",
    age: 28,
    isGood: true}
]

let reducer = ((sum, gamer) => 
              [
                sum[0] + gamer.age,
                sum[1] + gamer.name
              ]);

let myTeam = gamers
            .filter(
              (x) => (
                 (x.isGood === true)
              && (x.age > 18)
              && (x.age <55)
              )
            )
            .reduce(reducer, [0, '']);
// note how array.reduce() can take, after reducer
// another argument: start value

console.log(myTeam);

