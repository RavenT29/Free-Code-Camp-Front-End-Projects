var quotes = [{
  quote: "Success is not a good teacher, failure makes you humble.",
  author: "Shah Rukh Khan"
}, {
  quote: "For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.",
  author: "Audrey Hepburn"
}, {
  quote: "The good times of today, are the sad thoughts of tomorrow.",
  author: "Bob Marley"
}, {
  quote: "The best preparation for tomorrow is doing your best today.",
  author: "H. Jackson Brown, Jr."
}, {
  quote: "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
  author: "Joseph Campbell"
}, {
  quote: "Happiness is not something you postpone for the future; it is something you design for the present.",
  author: "Jim Rohn"
}, {
  quote: "What we think, we become.",
  author: "Buddha"
}, {
  quote: "Someone is sitting in the shade today because someone planted a tree a long time ago.",
  author: "Warren Buffett"
}, {
  quote: "You must do the things you think you cannot do.",
  author: "Eleanor Roosevelt"
}, {
  quote: "Start by doing what's necessary. Then do what's possible. And suddenly you are doing the impossible.",
  author: "Francis of Assisi"
}, {
  quote: "If you believe in yourself and have dedication and pride - and never quit, you'll be a winner. The price of victory is high but so are the rewards.",
  author: "Paul Bryant"
}, {
  quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
  author: "Anne Frank"
}, {
  quote: "The best preparation for tomorrow is doing your best today.",
  author: "H. Jackson Brown, Jr."
}, {
  quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  author: "Helen Keller"
}, {
  quote: "An investment in knowledge pays the best interest.",
  author: "Benjamin Franklin"
}, {
  quote: "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live.",
  author: "Norman Cousins"
}, {
  quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
  author: "Thomas A. Edison"
}, {
  quote: "Our greatest glory is not in never falling, but in rising every time we fall",
  author: "Confucius"
}, {
  quote: "When something is important enough, you do it even if the odds are not in your favor.",
  author: "Elon Musk"
}, {
  quote: "Life is too short for long-term grudges.",
  author: "Elon Musk"
}, {
  quote: "Work hard, stay positive, and get up early. It's the best part of the day.",
  author: "George Allen, Sr."
}, {
  quote: "How many cares one loses when one decides not to be something but to be someone.",
  author: "Coco Chanel"
}, {
  quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
  author: "Mark Twain"
}, {
  quote: "I will not let anyone walk through my mind with their dirty feet.",
  author: "Mahatma Gandhi"
}, {
  quote: "We must not allow other people’s limited perceptions to define us.",
  author: "Virginia Satir"
}, {
  quote: "Tension is who you think you should be. Relaxation is who you are.",
  author: "Chinese Proverb"
}, {
  quote: "Some people say you are going the wrong way, when it’s simply a way of your own.",
  author: "Angelina Jolie"
}, {
  quote: "Do what you can, with what you have, where you are.",
  author: "Theodore Roosevelt"
}, {
  quote: "There came a time when the risk to remain tight in the bud was more painful than the risk it took to blossom.",
  author: "Anaïs Nin"
}, {
  quote: "To find yourself, think for yourself.",
  author: "Socrates"
}, {
  quote: "The last of human freedoms—the ability to choose one’s attitude in a given set of circumstances.",
  author: "Viktor E. Frankl"
}, {
  quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  author: "Aristotle"
}, {
  quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
  author: "Thomas A. Edison"
}, {
  quote: "So much of our time is spent in preparation, so much in routine and so much in retrospect, that the amount of each person’s genius is confined to a very few hours.",
  author: "Ralph Waldo Emerson"
}, {
  quote: "If we all did the things we are capable of, we would literally astound ourselves.",
  author: "Thomas Edison"
}, {
  quote: "Only those who will risk going too far can possibly find out how far one can go.",
  author: "T. S. Eliot"
}, {
  quote: "It had long since come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things.",
  author: "Leonardo da Vinci"
}, {
  quote: "If you want to increase your success rate, double your failure rate.",
  author: "Thomas J. Watson"
}, {
  quote: "Learning never exhausts the mind.",
  author: "Leonardo da Vinci"
}, {
  quote: "Education is what remains after one has forgotten what one has learned in school.",
  author: "Albert Einstein"
}, {
  quote: "A man only learns in two ways, one by reading, and the other by association with smarter people.",
  author: "Will Rogers"
}, {
  quote: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine",
  author: "Jack Ma"
}, {
  quote: "Time is the friend of the wonderful business, the enemy of the mediocre.",
  author: "Warren Buffett"
}, {
  quote: "Try not to become a man of success, but rather a man of value.",
  author: "Albert Einstein"
}, {
  quote: "A business that makes nothing but money is a poor business.",
  author: "Henry Ford"
}, {
  quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
  author: "John Quincy Adams"
}];

var colors = ['#FFA07A', '#20B2AA', '#AAAAAA', '#2E8B57', '#008080', '#c83349', '#841B2D', '#7C0A02	', '	#007256', '#001f3f', '#0074D9', '#3D9970', '#85144b', '#FF851B', '#FF4136', '#007BA7'];

function randomQuote() {
  var random = Math.floor(Math.random() * quotes.length);
  return random;
}
$(document).ready(function() {
  $("#qsigns").addClass("fa fa-quote-left");
  $('#quoteDisplay').html(quotes[40].quote);
  $('#authorDisplay').html(" - " + quotes[40].author);
  var currentQuote = quotes[40].quote + " - " + quotes[40].author;
  $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote);
  $('#quote').click(function() {
    var random = randomQuote();
    $("#qsigns").addClass("fa fa-quote-left");
    $('#quoteDisplay').html(quotes[random].quote);
    $('#authorDisplay').html(" - " + quotes[random].author);
    if (quotes[random].quote.length <= 140) {
      currentQuote = quotes[random].quote + " - " + quotes[random].author;
    } else {
      currentQuote = "Ooops! Looks like this quote is too long to tweet!";
    };

    $('.new').on('click', function() {
      newQuote();
      $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote);
    });

    $('.twitter-share-button').attr('href', 'https://twitter.com/intent/tweet?text=' + currentQuote);

  });
  var num = 3;
  function randomColor() {
    num = Math.floor(Math.random() * colors.length);
    return num;
  }

  $('#quote').click(function() {
    randomColor();
    $("body").css("background-color", colors[num]);
    $("#quote").css("background-color", colors[num]);
    $("#twitter").css("background-color", colors[num]);
    $("#quoteDisplay").css("color", colors[num]);
    $("#authorDisplay").css("color", colors[num]);
    $("#qsigns").css("color", colors[num]);

  });

});