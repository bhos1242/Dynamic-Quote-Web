const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById("newQ");
const tweetMe = document.getElementById("tweetMe");
let realData = "";
let qData = ""

const tweetNow = () => {
  let tweetPost = `https://twitter.com/intent/tweet?text=${qData.text}`;
  window.open(tweetPost);
}

const getNewQuote = () => {
  let randInt = Math.floor(Math.random() * realData.length);
  qData = realData[randInt];
  quotes.innerText = `"${realData[randInt].text}"`;
  qData.author == null ? (author.innerText = "Vivek Bhos") : (author.innerText = `${qData.author}`);
}

const getQuote = async () => {

  const api = "https://type.fit/api/quotes";

  try {
    let response = await fetch(api);
    realData = await response.json();
    getNewQuote();
  } catch (error) {
    console.log(error);
  }
};

tweetMe.addEventListener("click", tweetNow);
newQ.addEventListener("click", getNewQuote);
getQuote();