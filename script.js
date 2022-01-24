// Generate random message
const messageGenerator = () => {
  const quotes = {
    adams: ["adam1", "adam2"],
    bukowski: ["buk1", "buk2"],
    napoleon: ["nap1", "nap2"]
  };

  const authors = Object.keys(quotes);
  const randomAuthorIndex = Math.floor(Math.random() * authors.length);
  const randomAuthor = authors[randomAuthorIndex];
  const randomQuoteIndex = Math.floor(Math.random() * quotes[randomAuthor].length);
  const randomQuote = quotes[randomAuthor][randomQuoteIndex];

  return console.log(`${randomQuote}
  "${randomAuthor}"`);
};

function onErr(err) {
  console.log(err);
  return 1;
}

const prompt = require('prompt');

prompt.start();

prompt.get(['input'], (err, result) => {
  if (err) {
    return onErr(err);
  }
  if(result.input === "messages"){
    return messageGenerator();
  }
  console.log('Command-line input received:');
  console.log(`  Type "message" not ${result.input}`);

});









