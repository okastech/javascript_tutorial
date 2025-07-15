'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = srt => srt.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${
    type.startsWith('_Delayed') ? 'EMOJI' : ''
  } ${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(
    to
  )} (${time.replace(':', 'h')})`.padStart(40);

  console.log(output);
}
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

//------------OPTIONAL CHAINING (?.)----------------
console.log('--------- OPTIONAL CHAINING (?.)---------------');

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

//OPTIONAL CHAINING//--------------
console.log(restaurant.openingHours.mon?.open); //HERE WE ARE CHECKING IF MON EXIST
console.log(restaurant.openingHours?.mon?.open); //CHECKING IF OPENINGHOURS EXIST BEFORE CHECKING MON.

//Real World Example
const days = ['mon', 'tus', 'wed', 'thus', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day}, we open at ${open}`);
}
//CHECKING METHOD (FUNCTION) PICKING WHAT IS INSIDE
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exsit');
console.log(restaurant.orderPreOkas?.(0, 1) ?? 'Method doesnt exsit'); // methos here doesnt exsit

//WE CAN USE IT ALSO TO CHECK ARREAY
const user = [{ name: 'Jonas', email: 'okas@gmail.com' }];
console.log(user[0]?.name ?? 'user array is empty');
//----------------------------------------------------------//

//OBJECK KEYS, VALUE AND ENTRIES//
const nameAndAge = {
  john: 23,
  Jame: 34,
  Emeka: 32,
  ukah: 12,
  opeyemi: 40,
  okas: 32,
  sesi: 32,
};

for (const key of Object.keys(nameAndAge)) {
  console.log(key);
}

for (const value of Object.values(nameAndAge)) {
  console.log(value);
}

//destructuring here the string value after the const//
const entries = Object.entries(nameAndAge);
// console.log(entries);

for (const [key, value] of Object.entries(nameAndAge)) {
  console.log({ key, value });
}

//--------------SRING METHOD
console.log('---------------STRING METHOD-------------');

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B707'[0]);
console.log(airline.length);
console.log('okas'.length);

console.log(airline.indexOf('r')); // GIVES FIRST R
console.log(airline.lastIndexOf('r')); // THIS GIVE YOU LAST R THAT IS HERE
console.log(airline.indexOf('Portugal')); //8 // case sensitive when using.
console.log(airline.slice(4)); // Air Portugal. 4: begin parameter here is where the slice we start from.
console.log(airline.slice(4, 7)); // 7 the last parameter which is space. NOTE: EXTRACTED STRING IS ALWAYS END MINUS THE THE BEGINING (7-4)= TOTAL LENGHT OF THE SLICE.

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // PLUS 1 WILL BRING BACK THE SPACE
console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are Middle Seat
  const s = seat.slice(-1);
  console.log(s);
  if (s === 'B' || s === 'E') console.log(`You got a middle seat`);
  else {
    console.log(`You are lucky`);
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(airline.toUpperCase()); // to change upper case
console.log(airline.toLowerCase()); //To chande lower case

//Fix Capilazation in name
const nonCapName = 'joAna';
const nameLowerCase = nonCapName.toLowerCase();
const nameConverted = nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
console.log(nameConverted);

//Comparing Email
const email = 'hello@jonas.io';
const loginEmail = '  HeLlo@Jonas.Io  \n';
const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);
//Replacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.'); // first('E') in bracket is what we want to replace, second is what we are replacing it with it('s')
console.log(priceUS);

const announcement = 'all passenger come to boarding door 23. boarding door 23';
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replaceAll(/door/g, 'gate')); // Using regular expression

//BOLEAN//
const plane1 = 'Airbus A320';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Airbor'));
console.log(plane1.startsWith('Air'));
console.log(plane1.startsWith('A3'));

if (plane1.startsWith('Airbus') && plane1.endsWith('A320')) console.log('yes');
else {
  console.log('no');
}

const checkBaggage = function (item) {
  const bagagged = item.toLowerCase();
  if (bagagged.includes('knife') || bagagged.includes('Gun'))
    //Case sensitive from the parameter passed//
    console.log('you are not allow on the plan');
  else {
    console.log('You are welcome');
  }
};
checkBaggage('i have a laptop and some food stuff and a pocket knife');
checkBaggage('socks and a camera');
checkBaggage('got smoe snacks and a gun for protection');

//SPLIT AND JOIN//
const splitName = 'a+very+good+place+to+rest'.split('+');
console.log(splitName);
console.log('Jona schemanch'.split(' ')); //HERE WE SPLIT BY SPACE
const [firstName, lastName] = 'Jonas schedtmann'.split(' ');
const nameArr = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(nameArr);

//example to capitalise
const capitaliseName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(nameUpper.join(' '));
};
capitaliseName('my name is okastech learning javascript');
capitaliseName('jonas is a guru in progamming');

//PADDING//
const message = 'Go to gate 23';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(34, '+'));

const maskNumber = function (number) {
  const srt = number + ''; //convert the number to string
  const srgNumber = srt.slice(-4); //take the last 4 digit
  return srgNumber.padStart(srt.length, '*'); //show the total lenght then mask the remainig with ***
};
console.log(maskNumber(398489378448));
console.log(maskNumber(9876544332222));
console.log(maskNumber(2233344));

//REPEAT//
const message1 = 'Bad Weather-- All Departures Delayed--';
console.log(message1.repeat(3)); //this will repeat the number message above.
const planeTakeOff = function (n) {
  console.log(`there are ${n} plane waiting to take off ${'image'.repeat(3)}`); //repeating the number of image.
};
planeTakeOff(3);
planeTakeOff(7);
planeTakeOff(4);
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
