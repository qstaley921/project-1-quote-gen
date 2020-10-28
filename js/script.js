/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * Universal Variables Below
 */

const quotes = [
  {
    quote: 'If you believe in yourself and have dedication and pride, and never quit, you\'ll be a winner. The price of victory is high but so are the rewards.',
    source: 'Coach Paul \'Bear\' Bryant',
    citation: '',
    year: '',
    source_image: 'imgs/bear.png',
    bground_color: 'rgb(134, 17, 17)', // crimson-tide
    read_time: 10000 // in milliseconds 
  },
  {
    quote: 'Nowadays people know the price of everything and the value of nothing.',
    source: 'Lord Henry',
    citation: 'Oscar Wilde\'s The Picture of Dorian Gray',
    year: '1890',
    source_image: 'imgs/oscar.png',
    bground_color: 'rgb(30, 143, 96)', // burnt-teal
    read_time: 6000
  },
  {
    quote: 'No one has a right to complain about life because no one is compelled to endure it',
    source: 'Henry H. Lightcap',
    citation: 'Edward Abbey\'s The Fool\'s progress',
    year: '1988',
    source_image: 'imgs/edward.png',
    bground_color: 'rgb(143, 86, 30)', // mud-orange
    read_time: 8000
  },
  {
    quote: 'If it does not harm the community, it does not harm its members',
    source: 'Marcus Aurelius',
    citation: 'Meditations',
    year: '167 AD',
    source_image: 'imgs/marcus.png',
    bground_color: 'rgb(30, 86, 143)', // violet blue 
    read_time: 7000
  },
  {
    quote: 'After all, someone has to do your work, and you\'re the closest person around.',
    source: 'David Bayles & Ted Orland',
    citation: 'Art & Fear',
    year: '1985',
    source_image: 'imgs/david.png',
    bground_color: 'rgb(86, 143, 30)', // spring-army-green
    read_time: 6000
  },
  {
    quote: 'Generosity is luck going in the opposite direction.',
    source: 'Twyla Tharp',
    citation: 'The Creative Habit',
    year: '2003',
    source_image: 'imgs/twyla.png',
    bground_color: 'rgb(30, 143, 143)', // dark aquamarine 
    read_time: 5000
  },
  {
    quote: 'The best intentions pave the way to Hell.',
    source: 'Mercutio',
    citation: 'William Shakespeare\'s Romeo and Juliet',
    year: '~1591',
    source_image: 'imgs/shakespeare.png',
    bground_color: 'rgb(163, 5, 5)', // dark red
    read_time: 5000 // in milliseconds 
  },
];

let currentQuote = 0; // default value before random quote is called
const timeBarHTML = document.querySelector('.time-bar');
let tbWidth = 100; // 100 refers to viewport percentage – full width of timebar
let readTime = quotes[currentQuote].read_time; // adds rt prop to variable for readability 
let autoPrint = setInterval(printQuote, readTime); // auto runs program based on current quote read_time property

/***
 * `getRandomQuote` function
***/

function getRandomQuote( array ) {
  let limit = array.length;
  let prevRandom = currentQuote;
  currentQuote = Math.floor(Math.random() * limit );
  readTime = quotes[currentQuote].read_time;
  
  // added a conditional so quotes don't repeat back-to-back
  if (prevRandom == currentQuote) { 
    getRandomQuote(quotes);
  }
}

/***
 * `printQuote` function
***/

function printQuote() {
  getRandomQuote(quotes); // redefines the `currentQuote` variable up top
  const quoteObj = quotes[currentQuote];
  const quote =  document.querySelector('.quote');
  const source = document.querySelector('.source');
  const bodyHTML = document.querySelector('body');

  quote.innerHTML = quoteObj.quote;
  bodyHTML.style.backgroundColor = quoteObj.bground_color;
  bodyHTML.style.backgroundImage = `url('${quoteObj.source_image}')`; 


  // conditional rewrites the p.source HTML based on object properties 
  if (quoteObj.citation.length > 0 && quoteObj.year.length > 0) {
    source.innerHTML = `${quoteObj.source}<span class="citation">${quoteObj.citation}</span><span class="year">${quoteObj.year}</span>`; 
  } else if ( quoteObj.citation.length > 0 ) {
    source.innerHTML = `${quoteObj.source}<span class="citation">${quoteObj.citation}</span>`;
  } else if ( quoteObj.year.length > 0 ) {
    source.innerHTML = `${quoteObj.source}<span class="year">${quoteObj.year}</span>`;
  } else {
    source.innerHTML = quoteObj.source;
  }

  // resets and begins the HTML timeBar to sync auto load with button press
  if (tbIsRunning) { // 
    clearInterval(autoPrint); // reset auto print to align with timebar
    autoPrint = setInterval(printQuote, quoteObj.read_time);

    clearInterval(timeBar); // clear previous intervals 
    tbWidth = 100;
    timeBarHTML.style.width = `${tbWidth}%`; // resent TimeBar (TB) width to full
    timeBar = setInterval(tbFunction, 10);
  }
}


/***
 * `timeBar` function
 * displays a bar that shrinks as the read_time expires
***/

let tbIsRunning = false;
let timeBar = setInterval(tbFunction, 10); // 10 corresponds with refresh rate

function tbFunction() {
  let time = readTime; // defined at the top under universal variables
  let rate = 100; // i.e. how many times the program will run per second based on refresh rate of 10/1000 where javascript time is per 1000 milliseconds
  let intervals = (time / 1000) * rate; // how many times the setInterval will loop
  let speed = 100 / intervals; // the increment at which the tb width is subtracted

  tbIsRunning = true; // added conditional for reset within printQuote because the tb needs to run at least once so it can be re-syncronized with button clicks
  tbWidth += speed*-1; // tbWidth is initialized up top 
  timeBarHTML.style.width = `${tbWidth}%`;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);