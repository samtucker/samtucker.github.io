function clock() {
  var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();
  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ':' + harold(minutes) + ':' + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn;
    }
    return standIn;
  }
}

setInterval(clock, 1000);

// ------------------
// var wolframSearchQuery = document.getElementById('wolfram_query').string;
// console.log(wolframSearchQuery);
// //-------------------api money.js

var quotesAndAuthor = ['The Stone Age did not end because they ran out of stones.', '-Anon', 'Every man dies, not every man really lives.', '-William Wallace', 'To criticise a person for their race is manifestly irrational and ridiculous but to criticise their religion, that is a right. That is a freedom. The freedom to criticise ideas, any ideas - even if they are sincerely held beliefs - is one of the fundamental freedoms of society.', '-Rowan Atikinson', 'Wisdom begins in wonder.', '-Socrates'];

var i = 0;


function quoteLoop() {
  getRandomInt(0, (quotesAndAuthor.length - 2));
  document.getElementById('quote_text').innerHTML = quotesAndAuthor[i];  document.getElementById('author_text').innerHTML = quotesAndAuthor[(i + 1)];
}


setInterval(quoteLoop, 60000);


function getRandomInt(min, max) {
  i = Math.floor(Math.random() * (max - min + 1)) + min;
  if (i % 2 != 0) {
    i++;
  }
}
