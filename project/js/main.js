counter =0;
function myFunction() {
  counter++;

  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire #lit #theBest");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/

  if(counter>=10){
    $("#demo").html("ENOUGH IS ENOUGH!!!!!!");
  }
  else if(counter<=10){
    $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
  }
}

