const btn = document.querySelector("#new-greeting");
const greeting = document.querySelector("#greeting");

function newGreeting() {
  const index = _.random(0, GREETINGS.length - 1);
  const nextGreeting = GREETINGS[index];
  greeting.innerHTML = nextGreeting[2] + " - " + nextGreeting[1];
}

btn.onclick = newGreeting;
newGreeting();
