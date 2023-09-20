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

for (i = 0; i < lowerfirst.length; i++) {
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
