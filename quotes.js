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
    text: "To be, or not to be: that is the question.",
    author: "William Shakespeare"
  },
  {
    text: "Hope is the thing with feathers.",
    author: "Emily Dickinson"
  },
  {
    text: "I am no bird; and no net ensnares me.",
    author: "Charlotte Brontë"
  },
  {
    text: "It is a truth universally acknowledged...",
    author: "Jane Austen"
  },
  {
    text: "The proper study of mankind is man.",
    author: "Alexander Pope"
  },
  {
    text: "No man is an island.",
    author: "John Donne"
  },
  {
    text: "A thing of beauty is a joy for ever.",
    author: "John Keats"
  },
  {
    text: "Our remedies oft in ourselves do lie.",
    author: "William Shakespeare"
  },
  {
    text: "The unexamined life is not worth living.",
    author: "Socrates"
  },
  {
    text: "I think, therefore I am.",
    author: "René Descartes"
  },
  {
    text: "Imagination is more important than knowledge.",
    author: "Albert Einstein"
  },
  {
    text: "I have measured out my life with coffee spoons.",
    author: "T. S. Eliot"
  }
];

const randomIndex = Math.floor(Math.random() * quotes.length);
const chosenQuote = quotes[randomIndex];

document.querySelector("#random-quote").textContent = `“${chosenQuote.text}”`;
document.querySelector("#random-author").textContent = chosenQuote.author;