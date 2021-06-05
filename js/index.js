// Iteration 1: Names and Input
const hacker1 = "Bob";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Lisa";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let upperCaseDriverName = "";

for (let i = 0; i < hacker1.length; i++) {
  upperCaseDriverName += hacker1[i].toUpperCase();
  upperCaseDriverName += " ";
}

console.log(upperCaseDriverName.trim());

//3.2
let reverseNavigatorName = "";

for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNavigatorName += hacker2[i];
}

//3.3
switch (hacker1.localeCompare(hacker2)) {
  case -1:
    console.log("The driver's name goes first.");
    break;
  case 1:
    console.log("Yo, the navigator goes first definitely.");
    break;
  default:
    console.log("What?! You both have the same name?");
}

//Bonus 1
const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra pulvinar facilisis. Phasellus at gravida purus. Nulla gravida, orci nec ultrices aliquam, massa ligula bibendum dui, vitae fermentum felis erat et nulla. Sed vehicula neque at turpis pulvinar varius. Donec lacinia lacus sed justo faucibus, quis varius augue sagittis. Sed gravida dolor vel arcu sodales blandit. Proin malesuada, felis nec placerat viverra, lectus nulla porttitor erat, sit amet posuere nisl magna ac nulla. Quisque libero mi, vehicula in enim non, dignissim iaculis urna. Cras faucibus tincidunt bibendum. Vestibulum lacinia a mi id vehicula. Nullam eu sodales est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed commodo nisi risus, nec euismod mauris fermentum quis. Donec vel orci interdum risus aliquet lacinia. Integer nec quam at dui vestibulum consequat. Sed mattis pulvinar urna, eget dictum augue tristique vitae. Vivamus sodales ligula quis tortor pellentesque ornare. Maecenas pretium maximus nibh non efficitur. Suspendisse ac consectetur ligula. Maecenas non urna egestas, tincidunt diam a, tincidunt nunc. Donec molestie orci id leo tempus ultrices. Proin vel diam nulla. In ultrices id libero in tempus. Etiam scelerisque est mi, ac facilisis magna semper in. Mauris non blandit odio, eu facilisis magna. Aenean ornare pharetra lectus, eu gravida ligula commodo facilisis. Mauris dignissim mattis luctus. Donec massa odio, volutpat gravida quam sit amet, porta maximus dui. Curabitur neque diam, pretium at nulla sit amet, dapibus lacinia purus. Quisque quis porttitor augue, id efficitur purus. Nullam feugiat blandit lacinia. Suspendisse et dui vel est tempus rutrum. Vivamus ante ligula, convallis nec nunc sit amet, suscipit mattis enim. Sed vel ornare metus, vitae rhoncus risus. Duis euismod maximus urna quis facilisis. Nam ut orci non tellus vestibulum malesuada. Morbi tempus, elit quis lobortis aliquam, est ligula iaculis tortor, ac elementum neque ex id dui. Sed mattis metus ut quam efficitur sollicitudin.";

//Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama";
let phraseWithoutSpaces = "";
let reversePhrase = "";

for (let char of phraseToCheck) {
  if (/[a-zA-Z]/.test(char)) {
    phraseWithoutSpaces += char;
  }
}

for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  if (!/[a-zA-Z]/.test(phraseToCheck[i])) {
    continue;
  }
  reversePhrase += phraseToCheck[i];
}

console.log(phraseWithoutSpaces.toLowerCase() === reversePhrase.toLowerCase());
