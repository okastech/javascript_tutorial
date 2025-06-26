'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// const italianFoods = new Set([
//   'pasta',
//   'gnocchi',
//   'tomatoes',
//   'olive oil',
//   'garlic',
//   'basil',
// ]);

// const mexicanFoods = new Set([
//   'tortillas',
//   'beans',
//   'rice',
//   'tomatoes',
//   'avocado',
//   'garlic',
// ]);

// // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//Reassigning Variable here for the object
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//MAKING DEFAULT VALUE EMPTY AND ASSINING NEW VARIABLE HERE
const { menu = [], starterMenu: start = [] } = restaurant;
console.log(menu, start);

//Mutating Object variable here
let a = 111;
let b = 999;
const obj = { a: 2, b: 3, c: 4 };
({ a, b } = obj); //we destutored A and B and we () bracket to cover it so that it wont give us syntax error bcous we are using {} with =
console.log(a, b);

//Nested Object// object inside object
const { fri } = openingHours;
console.log(fri);
const {
  fri: { open, close }, // changing the variable to open and close
} = openingHours;
console.log(open, close);
const {
  fri: { open: o, close: c }, // changing the variable here to 0 and c
} = openingHours;
console.log(o, c);
//-------------------------------------------------------------------------//

//SPREAD(...) OPERATOR BELLO BECAUSE WE USE IT ON THE RIGHT SIDE OF OPERATOR

const arr = [1, 2, ...[3, 4]];

//REST OPRATOR Below BECAUSE IS ON THE LEFT SIDE OF OPERATOR

const [y, z, ...others] = [1, 2, 3, 4, 5];

console.log(y, z, others);
//----------------------------------------------------------------------------//
// WE ARE USING REST TO DESTRUCTURE FOOD MENU BELOW
const [Pizza, , Risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(Pizza, Risotto, otherfood);
//----------------------------------------------------------------------------//

//------OBJECT DESTRUCTURING BELOW---------------------------------------//
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//------------FUNTIONS USING REST PARAMETER FOR ARGUMENT BELOW----------------------//
const add = function (...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
};
add(1, 8);
add(4, 9);
add(8, 7, 6, 5, 4, 8, 2);

const x = [8, 1, 5];
add(...x);
//------------------------------------------------------------------------------------------//

console.log('---------OR------------');
//SHORT CIRCUITING (&& AND ||).....LOGICAL OPERATOR CAN USE ANY DATA TYPE, RETURN ANY DATA TYPE AND SHORT CIRCUITING//
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 3 || 23 || null);

// restaurant.numGuest = 23;
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
const guest2 = restaurant.numGuest || 10;
console.log(guest2);

console.log('---------AND-----------');

//AND OPERATOR WORK IN OPOSITE DIRECTION LIKE ||. IT SHORT CIRCUIT THE FALSY VALUE AND RETURE IT IMMEDIATELY//
//-----THE AND OPERANT IS ONLY TRUE IF ALL OPERANT ARE TRUE----//
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');
console.log('Hello' && 23 && null && 'Jonas');

//PRACTICAL EXAMPLE
if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushrooms', 'Spinach');
}
restaurant.orderPizza && restaurant.orderPizza('Mushrooms', 'Spinach'); //THIS IS THE SAME THING WITH THE ABOVE.

console.log('------------??-------------');
//----THE NULLISH COALESSING OPERATOR---//

// restaurant.numGuest = 0;
const guest3 = restaurant.numGuest || 10;
console.log(guest3);

//Nullish: null and undefined. it does not include ( 0 or '' )
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect);
//----------------------------------------------------------------------------------//

//------LOGICAL ASSIGNMENT OPERATOR---------------//
const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'la piazza',
  owner: 'giovani Rossi',
};

console.log('hello world');
//-----------OR ASSIGNMENT OPERATOR----------//
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10; //SHORT WAY WRITING THE ABOVE
// rest2.numGuest ||= 10; //SHORT WAY WRITING THE ABOVE

//Nullish assignment operator (null and undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
//------------------------------------------------//

// rest1.owner = rest1.owner && 'ANONYMOUS';
// rest2.owner = rest2.owner && 'ANONYMOUS';

//------------AND ASSIGNMENT OPERATOR-----------//
rest1.owner &&= 'ANONYMOUS';
rest2.owner &&= 'ANONYMOUS';

console.log(rest1);
console.log(rest2);

//MY PRACTICE CODE ARRAY DESTRUNCTURING STATR HERE
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [2, 3, 4];

const [a, b, c] = arr;
console.log(a, b, c);

const [first, second] = restaurant.categories;
console.log(first, second);

//HERE WE ARE SWITCHNG VARIABLE
let [main, secondary] = restaurant.categories;
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main]; //DESTRUCTURING AND SWITCHING VARIABLE
console.log(main, secondary);

//THIS IS HOW TO RECEIVE 2 RETUNR VALUE FROM A FUNCTION !
const [starter, mainscore] = restaurant.order(2, 0);
console.log(starter, mainscore);

const nested = [2, 4, [5, 6]]; //NESTED ARRAY ARRAY INSIDE ARRAY
const [i, , [j, k]] = nested;
console.log(i, j, k);

//getting/setting default value to 1
const [p = 1, r = 1, q = 1] = [8, 9];

console.log(p, r, q);
*/

//MY PRACTICE CODE END HERE ARRAY DESTRUCTURING
