const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    }
];
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const tweetQuoteButton = document.getElementById('tweet-quote');
const quoteBox = document.querySelector('.quote-box');
let lastQuoteIndex = -1;
function getRandomQuote() {
    let randomIndex;
    
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex && quotes.length > 1);
    
    lastQuoteIndex = randomIndex;
    return quotes[randomIndex];
}
function displayNewQuote() {
    quoteBox.classList.add('fade');
    setTimeout(() => {
        const quote = getRandomQuote();
        
        quoteElement.textContent = quote.text;
        authorElement.textContent = `— ${quote.author}`;
        
        const tweetText = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
        tweetQuoteButton.href = `https://twitter.com/intent/tweet?text=${tweetText}&hashtags=InspireMe,quotes`;
        tweetQuoteButton.setAttribute('rel', 'noopener noreferrer');
        
        quoteBox.classList.remove('fade');
    }, 600);
}
newQuoteButton.addEventListener('click', displayNewQuote);
window.addEventListener('DOMContentLoaded', displayNewQuote);
