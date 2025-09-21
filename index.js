// Code your solutions in this file
for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  //   debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    // debugger;
  }

  return gifts;
}

wrapGifts(gifts);

// 1. assessment

function writeCards(nameArray, string) {
  let messages = [];
  for (let index = 0; index < nameArray.length; index++) {
    messages.push(
      `Thank you, ${nameArray[index]}, for the wonderful ${string} gift!`
    );
  }
  console.log(messages);

  return messages;
}

// ("Thank you, Guadalupe, for the wonderful surprise gift!");

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");

function countDown(number) {
  let index = number;
  while (index >= 0) {
    console.log(index);
    index--;
  }
}
countDown(10);
