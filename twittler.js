var filter = '';

var months = ['January', 
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

$(document).ready(function(){
  var $body = $('body');
  //$body.html('');

  var makeTwoDig = function(num) {
    if (num.toString().length === 1) {
      return '0' + num.toString();
    } else {
      return num.toString();
    }
  }

  var createNewTweet = function() {
    var tweet = streams.home[index];
    // CREATES NEW TWEET
    let $tweet;
    // Creates new tweet w/ or w/o class 'hidden' depending on if user is selected or not
    if (filter === '' || filter === tweet.user) {
      $tweet = $('<div class = "tweet"><div class = "profile"><h5></h5></div><div class="tweetContent"><p class="time"></p><p class = "tweetBody"></p></div></div>');
    } else if (filter !== tweet.user) {
      // add 'hidden' class
      $tweet = $('<div class = "tweet hidden"><div class = "profile"><h5></h5></div><div class="tweetContent"><p class="time"></p><p class="tweetBody"></p></div></div>');
    }
      // ADDS USERS NAME TO  RESPECTIVE ELEMENT
      $tweet.children('.profile').children('h5').text('@' + tweet.user)
      
      // Add Tweet Content to proper element
      $tweet.children('.tweetContent').children('.tweetBody').text(tweet.message);

      // Add Tweet Date/Time to proper element
      $tweet.children('.tweetContent').children('.time').text(makeTwoDig(tweet.created_at.getHours()) + ':' + makeTwoDig(tweet.created_at.getMinutes()) + ' - ' + months[tweet.created_at.getMonth()] + ' ' + tweet.created_at.getDate() + ', ' + tweet.created_at.getFullYear()); // need to get proper month

      // ADD PROPER ELEMENT TO PREPEND IT 
      $tweet.prependTo($('.tweetList')); 
  }




  // Displays all starter tweets
  var endIndex = streams.home.length - 1;
  var index = streams.home.length - 1;
  while(index >= 0){
    createNewTweet();
    index -= 1;
  }




  // Grabs new tweets that haven't been displayed yet and displays them in order, most recent at the top
  let displayNewTweets = function() {
    endIndex = streams.home.length - 1;
    while (index < endIndex) {
      index += 1;
      createNewTweet();
    }
  };
  // Calls displayNewTweets every second to keep the feed fresh
  // setInterval(displayNewTweets, 1000);



  // FOR WHEN THE USERBOX IS CHANGED
  let userNode = $('#dropdown')
  userNode.change(function() {
    // Reassign filter variable depending on what's selected
    (userNode.val() !== 'ALL') ? filter = userNode.val() : filter = '';

    // remove class 'hidden' from all tweets
    let tweets = $('.tweet');
    tweets.removeClass('hidden');

    // Add class 'hidden' to tweets that are not selected (so its added to none for 'ALL')
    for (let i = 0; i < tweets.length; i++ ) {
      if (userNode.val() !== 'ALL' && tweets[i].children[0].children[0].innerText !== ('@' + userNode.val())) {
        tweets[i].classList.add('hidden');
      }
    }
  })

  // Add when you click title it refreshes feed and brings back to all users
  $('header h1').on('click', function() {
    userNode.val('ALL');
    let tweets = $('.tweet');
    tweets.removeClass('hidden');
    filter = '';
  })


  // ADD WHEN CLICKING A USER IT FILTERS RESULTS FOR THAT USER
  $('.profile').on('click', function(){
    // set 'user' to the userName
    let user = $(this)[0].childNodes[0].textContent.slice(1);
    
    // Set dropdown list to user
    userNode.val(user);

    // Unhide all tweets
    let tweets = $('.tweet');
    tweets.removeClass('hidden');

    // Hide all unwanted tweets
    for (let i = 0; i < tweets.length; i++ ) {
      if (tweets[i].children[0].children[0].innerText !== ('@' + userNode.val())) {
        tweets[i].classList.add('hidden');
      }
    }

    filter = user;
  });






  


});
