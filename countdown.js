// Set the FIRST date we're counting down to
  var countDownDate1 = new Date("Mar 15, 2021 00:10:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate1 - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("first-demo").innerHTML = days + "dias " + hours + "h "+ minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("hey").innerHTML = `É hoje que dizemos "Bom dia, queria um cafe, por favor." e nos respondem "Queria, ou quer?"`;
    
    }

     // If the count down is finished, change head line
    
  }, 1000);

    // Set the SECOND date we're counting down to
    var countDownDate2 = new Date("Apr 5, 2021 00:00:00").getTime();
  
  // Update the count down every 1 second
  var y = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate2 - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("second-demo").innerHTML = days + "dias " + hours + "h "+ minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(y);
      document.getElementById("second-demo").innerHTML = "EXPIRED";
    }
  }, 1000);

    // Set the THIRD date we're counting down to
    var countDownDate3 = new Date("Apr 19, 2021 00:00:00").getTime();
  
  // Update the count down every 1 second
  var w = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate3 - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("third-demo").innerHTML = days + "dias ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(w);
      document.getElementById("third-demo").innerHTML = "EXPIRED";
    }
  }, 1000);



    // Set the FOURTH date we're counting down to
    var countDownDate4 = new Date("May 3, 2021 00:00:00").getTime();
  
  // Update the count down every 1 second
  var z = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate4 - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.getElementById("fourth-demo").innerHTML = days + "dias ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(z);
      document.getElementById("fourth-demo").innerHTML = "EXPIRED";
    }

   
  }, 1000);




// Open and close "more info" divs
  var divs = ["content1", "content2", "content3", "content4", "content5"];
var visibleDivId = null;
function toggleVisibility(divId) {
  if(visibleDivId === divId) {
    //visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}
function hideNonVisibleDivs() {
  var i, divId, div;
  for(i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if(visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}


document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  var dataText = [ "Estamos quase a coleccionar mais uma pulseira do Boom. E do Paredes. E do Waking Life. E do Primavera. E do Alive.", "Estamos quase a ficar duas horas à espera para entrar no Trumps, porque estamos mesmo a precisar de dançar Britney Spears", "Estamos quase a ir dar um beijinho à avó.", "Estamos quase a ouvir a típica pergunta: “um ou dois beijinhos?”", "Estamos quase a marcar aquela viagem para Bali que queremos mesmo fazer e que passamos a quarentena toda a ver, ao longe, no Instagram"];
  
  // type one text in the typwriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // chekc if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementById("type").innerHTML = text.substring(0, i+1);

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 70);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        setTimeout(function() {
          StartTextAnimation(0);
        }, 2);
     }
     // check if dataText[i] exists
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    }
  }
  // start the text animation
  StartTextAnimation(0);
});

