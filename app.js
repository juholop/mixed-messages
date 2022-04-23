// start with writing the parts
const messagePart1 = ['You can ', 'Action is a ', 'Lets go ', 'Time to start is ', 'What would Jesus '];
const messagePart2 = ['do this!', 'vote for a good habit.', 'champ!', 'now!', 'do?'];

// random index
const randomIndex1 = () => Math.floor(Math.random()*messagePart1.length);
const randomIndex2 = () => Math.floor(Math.random()*messagePart2.length);

// create the message
const message = messagePart1[randomIndex1()] + messagePart2[randomIndex2()];

// console log a message of random index
console.log(message);