// Quotes Array
const quotes = [
    { quote: "The best way to predict the future is to invent it.", author: "- Alan Kay" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "- Winston Churchill" },
    { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "- Steve Jobs" },
    { quote: "Do what you can, with what you have, where you are.", author: "- Theodore Roosevelt" },
    { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "- C.S. Lewis" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "- Confucius" },
    { quote: "Act as if what you do makes a difference. It does.", author: "- William James" },
    { quote: "Happiness is not something ready made. It comes from your own actions.", author: "- Dalai Lama" },
    { quote: "In the middle of every difficulty lies opportunity.", author: "- Albert Einstein" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "- Ralph Waldo Emerson" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "- Walt Whitman" },
    { quote: "Don’t let yesterday take up too much of today.", author: "- Will Rogers" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "- Booker T. Washington" },
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "- Franklin D. Roosevelt" },
    { quote: "It always seems impossible until it’s done.", author: "- Nelson Mandela" },
    { quote: "The only way to do great work is to love what you do.", author: "- Steve Jobs" },
    { quote: "Life is 10% what happens to us and 90% how we react to it.", author: "- Charles R. Swindoll" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "- Roy T. Bennett" },
    { quote: "Courage doesn’t always roar. Sometimes courage is the quiet voice at the end of the day saying, ‘I will try again tomorrow.’", author: "- Mary Anne Radmacher" },
    { quote: "The purpose of our lives is to be happy.", author: "- Dalai Lama" },
];


// DOM Elements
const quoteBox = document.getElementById("quote-box");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const savedQuotesList = document.getElementById("saved-quotes");

// Generate Random Quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.textContent = `"${randomQuote.quote}"`;
    authorText.textContent = `${randomQuote.author}`;
}

// Save Quote
document.getElementById("save-quote").addEventListener("click", () => {
    const quote = quoteText.textContent;
    const author = authorText.textContent;

    const listItem = document.createElement("li");
    listItem.textContent = `${quote} ${author}`;
    savedQuotesList.appendChild(listItem);
});

// Theme Toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Button Event Listeners
document.getElementById("generate-quote").addEventListener("click", displayRandomQuote);
