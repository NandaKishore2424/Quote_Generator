const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "motivation"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "success"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
        category: "life"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt",
        category: "motivation"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        category: "motivation"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "motivation"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
        category: "success"
    },
    {
        text: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
        category: "motivation"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
        category: "success"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson",
        category: "motivation"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
        category: "life"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky",
        category: "success"
    },
    {
        text: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
        category: "life"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs",
        category: "life"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair",
        category: "motivation"
    },
    {
        text: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein",
        category: "success"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson",
        category: "life"
    },
    {
        text: "The best revenge is massive success.",
        author: "Frank Sinatra",
        category: "success"
    },
    {
        text: "Life is 10% what happens to us and 90% how we react to it.",
        author: "Charles R. Swindoll",
        category: "life"
    },
    {
        text: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington",
        category: "motivation"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const tweetQuoteButton = document.getElementById('tweet-quote');
const quoteBox = document.querySelector('.quote-box');
const categoryButtons = document.querySelectorAll('.category-btn');

let currentQuoteIndex = -1;
let activeCategory = 'all';
let usedQuotes = [];

function getFilteredQuotes() {
    if (activeCategory === 'all') {
        return quotes;
    }
    return quotes.filter(quote => quote.category === activeCategory);
}

function getRandomQuote() {
    const filteredQuotes = getFilteredQuotes();
    
    if (usedQuotes.length >= filteredQuotes.length) {
        usedQuotes = [];
    }
    
    const availableQuotes = filteredQuotes.filter(
        (quote, index) => !usedQuotes.includes(index)
    );
    
    const randomIndex = Math.floor(Math.random() * availableQuotes.length);
    const selectedQuote = availableQuotes[randomIndex];
    
    const selectedIndex = filteredQuotes.findIndex(
        quote => quote.text === selectedQuote.text
    );
    usedQuotes.push(selectedIndex);
    
    return selectedQuote;
}

function displayNewQuote() {
    quoteBox.classList.add('fade');
    
    setTimeout(() => {
        const quote = getRandomQuote();
        
        quoteElement.textContent = quote.text;
        authorElement.textContent = `— ${quote.author}`;
        
        updateTweetButton(quote);
        
        quoteBox.classList.remove('fade');
    }, 600);
}

function updateTweetButton(quote) {
    const tweetText = encodeURIComponent(`"${quote.text}" — ${quote.author}`);
    tweetQuoteButton.href = `https://twitter.com/intent/tweet?text=${tweetText}&hashtags=InspireMe,quotes`;
    tweetQuoteButton.setAttribute('rel', 'noopener noreferrer');
}

function changeCategory(event) {
    if (!event.target.classList.contains('category-btn')) return;
    
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    event.target.classList.add('active');
    
    activeCategory = event.target.dataset.category;
    
    usedQuotes = [];
    
    displayNewQuote();
}

newQuoteButton.addEventListener('click', displayNewQuote);
document.querySelector('.categories').addEventListener('click', changeCategory);

window.addEventListener('DOMContentLoaded', displayNewQuote);