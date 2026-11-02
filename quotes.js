const quotes = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain"
  },
  {
    text: "Well done is better than well said.",
    author: "Benjamin Franklin"
  },
  {
    text: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    text: "Hope is the thing with feathers.",
    author: "Emily Dickinson"
  },
  {
    text: "No man is an island.",
    author: "John Donne"
  }
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const chosenQuote = quotes[randomIndex];

document.querySelector("#random-quote").textContent = `“${chosenQuote.text}”`;
document.querySelector("#random-author").textContent = chosenQuote.author;