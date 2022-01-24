const prompt = require('prompt');

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



const schema = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    password: {
      hidden: true
    }
  }
};

prompt.start();

prompt.get(schema, (err, result) => {
  if (err) {
    return onErr(err);
  }
  if(result.name === "messages"){
    return messageGenerator();
  }
  console.log('Command-line input received:');
  console.log(`  Type "messages" not ${result.name}`);

});









