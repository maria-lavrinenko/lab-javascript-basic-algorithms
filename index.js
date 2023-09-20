"use strict";
// Iteration 1: Names and Input

let hacker1 = "Steven";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Maria";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    "The driver has the longest name, it has " + hacker1.length + " characters."
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      hacker2.length +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " + hacker1.length + " characters!."
  );
}

// Iteration 3: Loops
// test

let capitalName = "";
for (let i = 0; i < hacker1.length; i++) {
  capitalName += hacker1[i] + " ";
}
console.log(capitalName.toUpperCase());

let capitalName2 = "";
for (let i = hacker1.length - 1; i > -1; i--) {
  capitalName2 += hacker1[i];
}

console.log(capitalName2);

const lowerfirst = hacker1.toLowerCase();
const lowerSecond = hacker2.toLowerCase();
for (let i = 0; i < lowerfirst.length; i++) {
  if (lowerfirst.charCodeAt(i) < lowerSecond.charCodeAt(i)) {
    console.log("The driver's name goes first.");
    break;
  } else if (lowerfirst.charCodeAt(i) > lowerSecond.charCodeAt(i)) {
    console.log("Yo, the navigator goes first, definitely.");
    break;
  } else {
    console.log("What?! You both have the same name?");
  }
}

const longText = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec feugiat nisl. Nullam porta mauris eu sem volutpat viverra. Praesent blandit sodales felis, in facilisis libero tincidunt ut. Morbi mollis est non eros ultricies ullamcorper. Quisque tempus ligula non erat rutrum convallis. Vestibulum sagittis tristique lectus eget vestibulum. Nunc leo nisi, iaculis eu odio sit amet, pulvinar tristique nisi. Aliquam et ante porta quam bibendum lobortis quis nec nibh. Aenean gravida risus eget condimentum elementum. Proin iaculis vehicula ante, eu posuere quam consectetur in.

Maecenas volutpat et ullamcorper tempus. Duis semper dapibus pellentesque. Etiam dapibus leo sed urna posuere porttitor id eu purus. Duis quis massa id dui auctor lacinia a at justo. Integer sed quam et est efficitur sollicitudin in sit amet elit. Mauris iaculis tellus quis risus feugiat, ut elementum massa pretium. Nullam in venenatis tortor. Sed a ante id elit vehicula posuere ut non urna. Sed feugiat lorem ut erat ultrices, sit amet pretium odio scelerisque. Duis dolor dolor, sollicitudin vel nulla vel, fermentum efficitur risus. Duis suscipit metus nec euismod accumsan. Nam rhoncus purus odio, et fermentum purus sollicitudin vel.

Phasellus pharetra neque euismod volutpat sollicitudin. In suscipit eget sapien at pulvinar. Aenean diam dui, rhoncus vitae ligula sit amet, semper fringilla ipsum. Vivamus vitae risus vitae orci tincidunt facilisis. Donec congue leo sit amet massa scelerisque, congue imperdiet tortor dignissim. Sed pellentesque augue neque, quis euismod lectus fringilla et. Curabitur id libero lorem. In aliquam viverra quam vitae ultricies. Vivamus vitae varius mi. Nulla ligula arcu, aliquet eu egestas sed, commodo in urna. Fusce malesuada eros et arcu vulputate, vel accumsan sapien pharetra. Pellentesque pretium ornare sollicitudin. Morbi id venenatis orci, eget condimentum turpis. Suspendisse egestas, leo nec luctus tempor, erat mauris faucibus neque, pretium interdum diam tellus in nulla.

`;

let wordsNum = 3;

let etCount = 0;

for (let i = 0; i < longText.length; i++) {
  if (longText[i] === " ") {
    wordsNum += 1;
  }
  if (longText[i] + longText[i + 1] === "et") {
    etCount += 1;
  }
}

console.log(wordsNum);
console.log(etCount);

let phraseToCheck = `A man, a plan, a canal, Panama!`;

let reversedPhrase = "";
let cleanedPhrase = "";
for (const letter of phraseToCheck) {
  if (letter.toLowerCase() !== letter.toUpperCase()) {
    cleanedPhrase += letter.toLowerCase();
  }
}
console.log(cleanedPhrase);

// for (let i = phraseToCheck.length - 1; i > -1; i--) {
// if (
//   phraseToCheck[i] !== "," ||
//   phraseToCheck[i] !== "!" ||
//   phraseToCheck[i] !== " "
// ) {
//   reversedPhrase += phraseToCheck[i];
// }
// }
console.log(reversedPhrase);
if (phraseToCheck.length === reversedPhrase.length) {
  console.log("Palindrom");
} else {
  console.log("not a palindrom");
}
