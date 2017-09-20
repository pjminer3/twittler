
$(document).ready(function(){
  var $body = $('body');
  //$body.html('');

  // Displays all starter tweets
  var endIndex = streams.home.length - 1;
  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + '---' + tweet.created_at);
    $tweet.prependTo($body);
    index -= 1;
  }

  // Grabs new tweets that haven't been displayed yet and displays them in order, most recent at the top
  let displayNewTweets = function() {
    endIndex = streams.home.length - 1;
    while (index < endIndex) {
      index += 1;
      var tweet = streams.home[index];
      var $tweet = $('<div></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message + '---' + tweet.created_at);
      $tweet.prependTo($body);
    }
  };

  // Calls displayNewTweets every second to keep the feed fresh
  setInterval(displayNewTweets, 1000);



});
