console.log('bomberman is running!');

//each time bomberman moves - collision detection
const checkMoves = function() {
  if ($('#bomberman').position().top === $('.border').position().top ||
    $('#bomberman').position().left === $('.border').position().left) {
      console.log('touching border!');
  }
  if ($('#bomberman').position().top === $('.walls').position().top ||
    $('#bomberman').position().left === $('.walls').position().left) {
      console.log('touching WALLS!');
  }
  if ($('#bomberman').position().top === $('.brick').position().top ||
    $('#bomberman').position().left === $('.brick').position().left) {
      console.log('NO THERE IS A BRICK THERE!');
  }
}

// $(document).ready(function () {
  // player 1 initial position


  // walls position

  // generate breakable bricks

  // generate bad guys

  // score

  // gameOver

// })
//
// let speedX = 0; // left
// let speedY = 0; // top
// let x = 0; // left
// let y = 0; // top
//
// let bomberman = $('#bomberman')
//
// $(document).keydown(function (e) {
//   switch(e.which) {
//     case 37: $('#bomberman').animate({left:'-=20'});
//     break;
//     case 38: $('#bomberman').animate({top:'-=20'});
//     break;
//     case 39: $('#bomberman').animate({left:'+=20'});
//     break;
//     case 40: $('#bomberman').animate({top:'+=20'});
//     break;
//
//   }
// })

let bombermanX = 213;
let bombermanY = 90;
let boardX = 19;
let boardY = 11;


$(document).ready(function () {

  // initializeKeyboard();



  const createBoard = function() {
    for (let x = 0; x < boardX; x++) {
      for (let y = 0; y < boardY; y++) {
        if (x === 0 || y === boardY-1 || x === boardX-1 || y === 0) {
          $('.wrapper').append("<div class='border'></div>");
        }
        else if (x%2 === 0 && y%2 === 0) {
          $('.wrapper').append("<div class='walls'></div>");
        }
        else if (x >= 3 && x <= boardX-4) {
          if (x === 3 && y === 1) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else if (x === boardX-4 && y === 1) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else if (x === 3 && y === boardY-2) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else if (x === boardX-4 && y === boardY-2) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else if (Math.random() >= 0.3) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else {
            $('.wrapper').append("<div class='box'></div>");
          }
        }
        else if (y >= 3 && y <= boardY-4) {
          if (x === 1 && y === 3) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else if (x === boardX-2 && y === 3) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else if (x === 1 && y === boardY-4) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else if (x === boardX-2 && y === boardY-4) {
            $('.wrapper').append("<div class='brick'></div>");
          }
          else if (Math.random() >= 0.3) {
            $('.wrapper').append("<div class='brick'></div>");
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






  // $(document).on('keydown', function(e){
  //     // get keycode of current keypress event
  //     var code = (e.keyCode || e.which);
  //
  //     // do nothing if it's an arrow key
  //     if (code === 37) {
  //         bombermanX -= 1;
  //         console.log('works');
  //         $('#bomberman').css('left',bombermanX + 'px');
  //     }
  //     if (code === 38) {
  //         bombermanY -= 1;
  //         console.log('works');
  //         $('#bomberman').css('top',bombermanY + 'px');
  //     }
  //     if (code === 39) {
  //         bombermanX += 1;
  //         console.log('works');
  //         $('#bomberman').css('left',bombermanX + 'px');
  //     }
  //     if (code === 40) {
  //         bombermanY += 1;
  //         console.log('works');
  //         $('#bomberman').css('top',bombermanY + 'px');
  //     }
  //
  //     let movement =
  //
  //     const move = function() {
  //       $("#bomberman").css(movement)
  //     }
  // });

  // $(document).on('keydown', function() {
  //   console.log('firing');
  //   bombermanX -= 1;
  //   $('#bomberman').css('left',bombermanX + 'px');
  // })

  // const bombermanMove = function () {
  //   if (moveState.left) {
  //     bombermanX -= 1;
  //     console.log('works');
  //     $('#bomberman').css('left',bombermanX + 'px');
  //   }
  //   if (moveState.up) {
  //     bombermanY -= 1;
  //     console.log('works');
  //     $('#bomberman').css('left',bombermanX + 'px');
  //   }
  //   if (moveState.right) {
  //     bombermanX += 1;
  //     console.log('works');
  //     $('#bomberman').css('left',bombermanX + 'px');
  //   }
  //   if (moveState.down) {
  //     bombermanY += 1;
  //     console.log('works');
  //     $('#bomberman').css('left',bombermanX + 'px');
  //   }
  // }

  // when keypress === 'spacebar'
  // create new div with class bomb, position absolute at bomberman position.

});
