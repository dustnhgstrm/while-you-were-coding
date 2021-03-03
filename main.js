// ##### Introduction #####
//
// The below assignment will require NO functions
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//

// ##### Challenges #####

console.log("##### Challenge 1 #####");
// 1.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.
// Hint: Use `if` and a modulus operation.

for (i = 3; i < 21; i = i + 3) {
  console.log(i);
}

console.log("##### Challenge 2 #####");
// 2.
//
// Console out the numbers from 1-20. BACKWARDS.

for (i = 20; 0 < i; i--) {
  console.log(i);
}

console.log("##### Challenge 3 #####");
// 3.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.

let string3 = "Boy howdy am I good at this!";
for (const char of string3) {
  const letters = char !== " ";
  const exclamation = char !== "!";
  if (letters && exclamation) {
    console.log(char);
  }
}

console.log("##### Challenge 4 #####");
// 4.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.

let string4 = "And getting better every day.";
for (i = 1; i < string4.length; i = i + 3) {
  console.log(string4[i]);
}

console.log("##### Challenge 5 #####");
// 5.
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
let string5 = "Am I the best?";
let bigString = string5.toUpperCase();
for (const value of bigString) {
  if (value !== " " && value !== "?") {
    console.log(value);
  }
}

console.log("##### Challenge 6 #####");
// 6.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
let string6 = "Whoa, I am the best!";
let emptyChar = " ";
let sum = 0;
for (i=0; i<string6.length; i++) {
if (i === " "){
sum = sum + 1; 
if( sum === 2){
  i.toUpperCase();
}console.log(string6);
}
}
console.log(string6);

console.log("##### Challenge 7 #####");
// 7.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
let string7 = "I am become death, destroyer of worlds.";
for (i = string7.length - 1; i >= 0; i--) {
  console.log(string7[i]);
}

console.log("##### Challenge 8 #####");
// 8.
//
const names =
  "Alex|Mesuara|Brian|Chanel|Matt|Jeremy B.|Jose|Andy|Dustin|Joshua|Steve H.|Cesar|Nastya|Jeremy L.|Michael|John|Lee|Ruth|Steve M.|Tim|Ronny|Stevie R|Neo|Rick|Kyle|Minahil|Adam|Sonny|James|Daisy|Willie";

// Console out the individual letters of each person in class, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!
for (i = 0; i < names.length; i++) {
  const stringBeans = "Here today is: ";
  if (names[i] === "|") {
    console.log(names.split("|").join(stringBeans));
  }
  if (names[i]= (i-names.length)===0){
console.log(names.join(stringBeans);}
  

