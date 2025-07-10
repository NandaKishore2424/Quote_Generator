# Quote_Generator
## Date: 10/7/2025
## Objective:
To create a simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps.

## Tasks:

#### 1. Create the HTML Structure:
Add a heading like ```<h1>InspireMe</h1>```

Use a ```<div> or <p>``` to display the quote text.

Use another ```<p> or <span>``` to display the author’s name.

Add a button labeled “Get Quote”.

#### 2. Style the Layout Using CSS:
Center everything on the page using flexbox.

Style the quote box with padding, background color, and rounded borders.

Use a clean font (like Roboto or Open Sans).

Add hover effects for the button.

#### 3. Add JavaScript Functionality:
Store an array of quotes (objects with text and author).

On button click, generate a random index using Math.random().

Display the selected quote and author in the HTML.

Ensure each click updates the quote dynamically using innerText.

#### 4. Enhancements:
Animate the quote change using fade effects.

Add a “Tweet this” button with a share link.
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>InspireMe - Quote Generator</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="container">
        <h1>InspireMe</h1>
        <div class="quote-box">
            <div class="quote-text">
                <i class="fas fa-quote-left"></i>
                <span id="quote">Click the button below to get inspired!</span>
                <i class="fas fa-quote-right"></i>
            </div>
            <div class="quote-author">
                <span id="author">Your Journey Begins</span>
            </div>
        </div>
        <div class="buttons">
            <button id="new-quote">Get Quote</button>
            <a id="tweet-quote" href="#" target="_blank" class="tweet-btn">
                <i class="fab fa-twitter"></i> Tweet this
            </a>
        </div>
        <div class="categories">
            <span class="category-label">Categories:</span>
            <button class="category-btn active" data-category="all">All</button>
            <button class="category-btn" data-category="motivation">Motivation</button>
            <button class="category-btn" data-category="success">Success</button>
            <button class="category-btn" data-category="life">Life</button>
        </div>
    </div>
    <footer>
        <p>Created with <span class="heart">❤️</span> | Quotes to inspire your day</p>
    </footer>
    <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: #333;
}

.container {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    padding: 40px;
    width: 90%;
    max-width: 650px;
    text-align: center;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}

.container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, #6e8efb, #a777e3);
}

.container:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

h1 {
    color: #6e8efb;
    font-size: 2.8rem;
    margin-bottom: 30px;
    letter-spacing: 1px;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    position: relative;
    display: inline-block;
}

h1::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50%;
    height: 3px;
    background: linear-gradient(90deg, #6e8efb, #a777e3);
    border-radius: 2px;
}

.quote-box {
    margin: 30px 0;
    opacity: 1;
    transition: opacity 0.6s ease, transform 0.6s ease;
    position: relative;
    padding: 20px;
}

.quote-box.fade {
    opacity: 0;
    transform: translateY(20px);
}

.quote-text {
    font-size: 1.5rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 20px;
    position: relative;
    padding: 0 20px;
}

.fa-quote-left, .fa-quote-right {
    color: #a777e3;
    font-size: 1.2rem;
    opacity: 0.7;
}

.fa-quote-left {
    margin-right: 10px;
    transform: translateY(-8px);
}

.fa-quote-right {
    margin-left: 10px;
    transform: translateY(-8px);
}

.quote-author {
    font-size: 1.1rem;
    font-weight: 500;
    color: #6e8efb;
    margin-top: 15px;
    font-style: italic;
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
}

button {
    background-color: #6e8efb;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 12px 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

button:hover {
    background-color: #5d7af0;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(110, 142, 251, 0.4);
}

button:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(110, 142, 251, 0.4);
}

button i {
    margin-right: 8px;
}

a {
    text-decoration: none;
}

.categories {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
}

.category-label {
    color: #555;
    margin-right: 10px;
    display: flex;
    align-items: center;
}

.category-btn {
    background-color: #f0f0f0;
    color: #555;
    font-size: 0.9rem;
    padding: 8px 15px;
}

.category-btn:hover {
    background-color: #e0e0e0;
}

.category-btn.active {
    background-color: #a777e3;
    color: white;
}

.category-btn.active:hover {
    background-color: #9566d0;
}

footer {
    margin-top: 30px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.9rem;
}

.heart {
    color: #ff6b6b;
    display: inline-block;
    animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

.tweet-btn {
    background-color: #1DA1F2;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 12px 25px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
}

.tweet-btn:hover {
    background-color: #1a91da;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(29, 161, 242, 0.4);
}

.tweet-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 5px rgba(29, 161, 242, 0.4);
}

.tweet-btn i {
    margin-right: 8px;
}

@media (max-width: 768px) {
    .container {
        padding: 30px 20px;
    }
    
    h1 {
        font-size: 2.2rem;
    }
    
    .quote-text {
        font-size: 1.3rem;
    }
    
    .buttons {
        flex-direction: column;
        align-items: center;
    }
    
    button {
        width: 100%;
    }
    
    .categories {
        flex-direction: column;
        align-items: center;
    }
    
    .category-btn {
        width: 100%;
    }
}
```
## JS Code

```
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
```
## Output:

![image](https://github.com/user-attachments/assets/23e57afd-e063-4327-ad51-43c1b02bf402)


## Result:
A simple quote generator using HTML, CSS, and JavaScript that displays a new random motivational quote each time a button is clicked — similar to daily quote sections on blogs or productivity apps is created successfully.
