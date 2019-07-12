console.log('bomberman is running!');


// Board's length and width in squares
let boardX = 19;
let boardY = 11;


$(document).ready(function () {



  // initializeKeyboard();

  // tracking mouse for testing purposes ///////////////////////////////////////
  $(window).mousemove(function(event) {
    console.log(event.pageX, event.pageY);
  })
  //---------------------------------------------------------------------------


  // FUTURE FUNCTION, create player and extra players on the board /////////////
  const createPlayer = function() {
    // should resolve GitHub Pages not responding (updating) in other laptops
    let $firstBox =  $(".open").eq(0).position();
    let topX = $firstBox.top - 52;
    let topY = $firstBox.left;
    let rightX = $firstBox.top;
    let rightY = $firstBox.left + 52;
    let bottomX = $firstBox.top + 52;
    let bottomY = $firstBox.left;
    let leftX = $firstBox.top
    let leftY = $firstBox.left - 52;

    const position = {
      top: { top: topX, left: topY },
      right: { top: rightX, left: rightY },
      bottom: { top: bottomX, left: bottomY },
      left: { top: leftX, left: leftY }
    }

    $('#player').append("<div class='bomberman idle'></div>")
    //
    $('.bomberman').css($firstBox);
    $('.top').css(position.top);
    $('.right').css(position.right);
    $('.bottom').css(position.bottom);
    $('.left').css(position.left);
  }

  const createMonster = function() {
    let $secondBox = $('.open').eq(3).position();
    let $thirdBox = $('.open').eq(8).position();
    let $fourthBox = $('.open').eq(11).position();

    $('#monster').append("<div class='monster second'></div>")
    $('.second').css($secondBox);
    $('#monster').append("<div class='monster third'></div>")
    $('.third').css($thirdBox);
    $('#monster').append("<div class='monster fourth'></div>")
    $('.fourth').css($fourthBox);

  }


  // Not sure if need this function atm ...
  const createBomb = function() {

  }
  // --------------------------------------------------------------------------


  // createBoard according to squares along boardX and boardY //////////////////
  const createBoard = function() {
    // for every x in x axis
    for (let x = 0; x < boardX; x++) {
      // for every y in y axis, create a column for every x from outer loop
      for (let y = 0; y < boardY; y++) {
        // first column, last row, last column, first row -> make border
        if (x === 0 || y === boardY-1 || x === boardX-1 || y === 0) {
          $('.wrapper').append("<div class='border impenetrable'></div>");
        }
        // for every even box after border, (border starts with 0)
        else if (x%2 === 0 && y%2 === 0) {
          $('.wrapper').append("<div class='walls impenetrable'></div>");
        }
        // for every column between 4th and 16th
        else if (x >= 3 && x <= boardX-4) {
          // compulsory bricks blocking player starting position
          if (x === 3 && y === 1) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          // compulsory bricks blocking player starting position
          else if (x === boardX-4 && y === 1) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          // compulsory bricks blocking player starting position
          else if (x === 3 && y === boardY-2) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          // compulsory bricks blocking player starting position
          else if (x === boardX-4 && y === boardY-2) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          // boolean, if number over 0.3/1, make brick (random generate bricks)
          else if (Math.random() >= 0.3) {
            if (Math.random() >= 0.6) {
              $('.wrapper').append("<div class='brick powerup impenetrable'></div>")
            }
            else {
              $('.wrapper').append("<div class='brick impenetrable'></div>");
            }
          }
          // the ones that did not become bricks, make regular box
          else {
            $('.wrapper').append("<div class='box'></div>");
          }
        }
        // for remaining spaces, every row between, 4th and 8th
        else if (y >= 3 && y <= boardY-4) {
          // compulsory bricks blocking player starting position
          if (x === 1 && y === 3) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          // compulsory bricks blocking player starting position
          else if (x === boardX-2 && y === 3) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          // compulsory bricks blocking player starting position
          else if (x === 1 && y === boardY-4) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          // compulsory bricks blocking player starting position
          else if (x === boardX-2 && y === boardY-4) {
            $('.wrapper').append("<div class='brick impenetrable'></div>");
          }
          // boolean, if number over 0.3/1, make brick (random generate bricks)
          else if (Math.random() >= 0.3) {
            if (Math.random() >= 0.75) {
              $('.wrapper').append("<div class='brick powerup impenetrable'></div>")
            }
            else {
              $('.wrapper').append("<div class='brick impenetrable'></div>");
            }
          }
          // the ones that did not become bricks, make regular box
          else {
            $('.wrapper').append("<div class='box'></div>");
          }
        }
        // 3 boxes each corner for player starting position
        else {
          $('.wrapper').append("<div class='box open'></div>");
        }
      }
    }
  };


  createBoard();

  createPlayer();

  createMonster();
});
