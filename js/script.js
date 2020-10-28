/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: 'If you believe in yourself and have dedication and pride - and never quit, you\'ll be a winner. The price of victory is high but so are the rewards.',
    source: 'Coach Paul \'Bear\' Bryant',
    citation: '',
    year: ''
  },
  {
    quote: 'Nowadays people know the price of everything and the value of nothing.',
    source: 'Lord Henry',
    citation: 'Oscar Wilde\'s The Picture of Dorian Gray',
    year: '1890'
  },
  {
    quote: 'No one has a right to complain about life because no one is compelled to endure it',
    source: 'Henry H. Lightcap',
    citation: 'Edward Abbey\'s The Fool\'s progress',
    year: '1988'
  },
  {
    quote: 'If it does not harm the community, it does not harm its members',
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: '167 AD'
  },
  {
    quote: 'After all, someone has to do your work, and you\'re the closest person around.',
    source: 'David Bayles & Ted Orland',
    citation: 'Art & Fear',
    year: '1985'
  },
  {
    quote: 'Generosity is luck going in the opposite direction.',
    source: 'Twyla Tharp',
    citation: 'The Creative Habit',
    year: '2003'
  },
  {
    quote: 'The best intentions pave the way to Hell.',
    source: 'Mercutio',
    citation: 'William Shakespeare\'s Romeo and Juliet',
    year: '~1591'
  },
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote( array ) {
  let limit = array.length;
  let randomNumber = Math.floor(Math.random() * limit );
  // console.log(`The randomly generated number is: ${randomNumber}`);
  // console.log(`The randomly generated quote is: ${array[randomNumber]}`);
  return array[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote() {
  const quoteObj = getRandomQuote(quotes);
  const quote =  document.querySelector('.quote');
  const source = document.querySelector('.source');
  
  quote.innerHTML = quoteObj.quote;

  if (quoteObj.citation.length > 0 && quoteObj.year.length > 0) {
    source.innerHTML = `${quoteObj.source}<span class="citation">${quoteObj.citation}</span><span class="year">${quoteObj.year}</span>`; 
  } else if ( quoteObj.citation.length > 0 ) {
    source.innerHTML = `${quoteObj.source}<span class="citation">${quoteObj.citation}</span>`;
  } else if ( quoteObj.year.length > 0 ) {
    source.innerHTML = `${quoteObj.source}<span class="year">${quoteObj.year}</span>`;
  } else {
    source.innerHTML = quoteObj.source;
  }
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);