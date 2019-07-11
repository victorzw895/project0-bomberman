console.log('bomberman is running!');



let boardX = 19;
let boardY = 11;


$(document).ready(function () {

  // initializeKeyboard();

  $(window).mousemove(function(event) {
    console.log(event.pageX, event.pageY);
  })

  const createPlayer = function() {

  }

  const createBomb = function() {

  }

  const createBoard = function() {
    for (let x = 0; x < boardX; x++) {
      for (let y = 0; y < boardY; y++) {
        if (x === 0 || y === boardY-1 || x === boardX-1 || y === 0) {
          $('.wrapper').append("<div class='border impenetrable'></div>");
        }
        else if (x%2 === 0 && y%2 === 0) {
          $('.wrapper').append("<div class='walls impenetrable'></div>");
        }
        else if (x >= 3 && x <= boardX-4) {
          if (x === 3 && y === 1) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else if (x === boardX-4 && y === 1) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else if (x === 3 && y === boardY-2) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else if (x === boardX-4 && y === boardY-2) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else if (Math.random() >= 0.3) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else {
            $('.wrapper').append("<div class='box'></div>");
          }
        }
        else if (y >= 3 && y <= boardY-4) {
          if (x === 1 && y === 3) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else if (x === boardX-2 && y === 3) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else if (x === 1 && y === boardY-4) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else if (x === boardX-2 && y === boardY-4) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else if (Math.random() >= 0.3) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          else {
            $('.wrapper').append("<div class='box'></div>");
          }
        }
        else {
          $('.wrapper').append("<div class='box'></div>");
        }
      }
    }
  };


  createBoard();


});
