
$(document).ready(function(){
  var $body = $('body');
  //$body.html('');


  var createNewTweet = function() {
    var tweet = streams.home[index];
    // CREATES NEW TWEET
    var $tweet = $('<div class = "tweet"><div class = "profile"><img src="ADD IMAGE HERE"><h5> <!-- User name --/> </h5></div><div class="tweetContent"><p> <!-- body of tweet -/-> </p></div></div>');

      // ADDS USERS NAME TO  RESPECTIVE ELEMENT
      $tweet.text('@' + tweet.user + ': ' + tweet.message + '---' + tweet.created_at);
      
      // Add Tweet Content to proper element


      // Add user image to proper element


      $tweet.prependTo($('.tweetList'));  // ADD PROPER ELEMENT TO PREPEND IT 
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
  setInterval(displayNewTweets, 1000);



  


});
