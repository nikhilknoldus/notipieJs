
/*
              Author: Nikhil Kumar
              Company: Knoldus Software LLP
              Year: 2017
              Copyright: Open Source
*/

(function (exports) {
 'use strict';
  
  var $container, $messageBox;
  //Message container
  $container = document.createElement('div'); 
  $container.className = 'notipie-container';
  document.body.appendChild($container); 
  
  var notipie = {
    //Show notification (message, status, time:ms)
    display : function(msg, status, time) {
      var timeOut = time;
      //default time: 3000 ms
      if (typeof timeOut === 'undefined') {
        timeOut = 3000;
      }
      //creating notipie message box
      $messageBox = document.createElement('div');
      //user message
      $messageBox.innerHTML = msg; 
      //Positioning 
      $container.style.display = 'absolute';
      //message status
      $messageBox.className = 'notipie ' + status;
      //addding message
      $container.appendChild($messageBox); 
      //removing notipie alert
      removeNotipie($container, $messageBox, timeOut); 
     }
  };

  //remove notipie alerts from dom
  function removeNotipie($container, $messageBox, timeOut) {
    setTimeout(function () {
      $messageBox.style.display = 'none';
        document.body.appendChild($messageBox).remove();
        if($container.innerHTML === ""){
            document.body.appendChild($container).remove();
        }
    }, timeOut);    
  }
  exports.notipie = notipie;
})(typeof window === 'undefined' ? module.exports : window);