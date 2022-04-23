// array of messages
const messages = ['You can do this!', 'Action is a vote for a good habit.', 'Lets go champ!', 'Time to start is now!', 'What would Jesus do?'];
// add complexity by parsing together messages from separate parts
// random index
const randomIndex = () => Math.floor(Math.random()*messages.length);
// console log a message of random index
console.log(messages[randomIndex()]);