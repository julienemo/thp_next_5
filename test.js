// forEach, map & filter (equivalent of ruby's .select)
let a = [1, 2, 3, 4, 5, 6, 7] ;
let b = a.map((x) => x <3 );
let c = a.filter((x) => x<3 )

filterLessThanThree = (array) =>  {
  let myArray = [] ;
  array.forEach(function(element) {
    if(element < 3){
      myArray.push(element) ;
    }
  }) ;
  return myArray ;
}

mapLessThanThree = (array) => {
  let myArray = [] ;
  array.forEach( function(element) {
    myArray.push((element < 3)) ;
  });
  return myArray ;
}
console.log(b) ; // [true,  true, false, false, false, false, false]
console.log(c) ; // [1, 2]
console.log(filterLessThanThree(a)) ; // [1, 2]
console.log(mapLessThanThree(a)) ; // [true,  true, false, false, false, false, false]


let n = [1, '1', [1], {'1':1}] ;
let m = n.filter((x) => (typeof(x) === 'string'));
// we can filter on typeof()
// types are lower case strings
console.log(m);

// reduce
// reducer is a recursive logic that takes 2 arguments
// accumulator: current result, and current value
let aMinusB = (accumulator, currentValue) => accumulator - currentValue ;
// meaning, I want to do array[0] - array[1] - ... - array[n-1]
let z = a.reduce(aMinusB) ;
console.log(z) ;


let x = [1, 2, 2, 3, 3, 3, 4, 5, 5] ;
let k = x.filter((value, index, self) => (self.indexOf(value) === index)) ;
// this is a homemade "array.unique()" function
// here I notice that instead of a "syntax"
// array.filter() takes as argument a function
// it needs to be a function that returns a boolean
console.log(k) ;

// this is also a homemade "array.unique()"
// only works in ES6 and for primitive values
// it turns the array to a set (by def has only unique values)
// then turn it back to array
let l = [...new Set(x)] ;
console.log(l) ;

// the 3 dots are spread operators
// see without 
let i = [new Set(x)] ;
console.log(i) ;

/* let j = ...new Set(x) ;
console.log(j) ; */

// pass an external argument to a callback func
function oneTagInKeywords (keywords) {
  return function(element) {
    console.log(element);
    console.log(keywords);
    console.log(keywords.includes(element));
    return keywords.includes(element);
  }
}

const es6OneTagInKeywords = (keywords) => {
  return (element) => keywords.includes(element);
}


let keywords = ['java', 'javascript', 'lockdown']
let tags1 = ['java', 'javascript', 'lockdown']
let tags2 = ['java', 'tourism', 'folk dance']
let tags3 = ['python', 'fintech', 'blockchain']
let tag1 = 'javascript'
let tag2 = 'me'

/* console.log(tags1.some(oneTagInKeywords(keywords)))
console.log(tags2.some(oneTagInKeywords(keywords)))
console.log(tags3.some(oneTagInKeywords(keywords)))

console.log(tags1.some(es6OneTagInKeywords(keywords)))
console.log(tags2.some(es6OneTagInKeywords(keywords)))
console.log(tags3.some(es6OneTagInKeywords(keywords))) */

let myString = 'elle avait une bague à chaque doigt'
let myPartial ='elle'
// like in ruby, in js, sometimes 
// a string is considered an array
console.log(myString.includes(myPartial))

console.log('new starts here')
const categories = [
	{
		"keywords": ["Javascript", "Promises", "React", "Vue JS", "Angular", "ES6"]
	},
	{
		"keywords": ["Lecture", "Livres", "Conseils librairie", "Bibliothèque"]
	},
	{
		"keywords": ["Javascript", "Switch", "Game Boy", "Nintendo", "PS4", "Gaming", "DOOM", "Animal Crossing"]
	},
	{
		"keywords": ["Streaming", "Netflix", "Twitch", "Influenceur", "Film"]
	}
];

const es6WordContainsPartial = (partial) => {
  return (element) => element.toLowerCase().includes(partial);
}

let result = categories
            .find((x) => (
              x.keywords
              .find(es6WordContainsPartial('jav'))
            )).keywords;

console.log(result);