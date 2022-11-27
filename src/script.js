const { useState } = React;

const quotes = [
    {
        quote: "It is better to offer no excuse than a bad one.",
        author: "George Washington"
    },
    {
        quote: "I'd rather die on my feet, than live on my knees",
        author: "Emiliano Zapata"
    },
    {
        quote: "Be yourself: everyone else is already taken",
        author: "Oscar Wilde"
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
        author: "Bernard M. Baruch"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "Andre Gide"
    },
    {
        quote: "Well done is better than well said.",
        author: "Benjamin Franklin"
    },
    {
        quote: "But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.",
        author: "Aldous Huxley"
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin Delano Roosevelt"
    },
    {
        quote: "Doublethink means the power of holding two contradictory beliefs in one's mind simultaneously, and accepting both of them.",
        author: "George Orwell"
    }
];


const QuoteGen = () => {
  const [quote, setQuote] = useState("The floor is made out of floor!");
  const [author, setAuthor] = useState("John Doe");
  const [numCurr, setNum] = useState(10)
  
  function getQuote() {
    var num = Math.round(Math.random()*10)-1;
    while(num == numCurr) {
      num = Math.round(Math.random()*10)-1;
    }
    
    setNum(num);
    setQuote(quotes[num].quote);
    setAuthor(quotes[num].author);
  }
  
  return (
    <div>
      <div class="testBox" id="titleContainer">
        <h1 id="title">Random Quote Generator</h1>
      </div> 
      <div id="quote" class="testBox">
        <p id="text">{quote}</p>
      </div>
      <div id="author" class="testBox">
        <p>{author}</p>
      </div>
      <div class="testBox">
        <button id="new-quote" onClick={() => getQuote()}>
          <i class="fa fa-refresh"></i>
        </button>
      </div>
      <div id="tweet-box" class="testBox">
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          <i class="fa fa-twitter" id="icon"></i>
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<QuoteGen />, document.getElementById('quote-box'))