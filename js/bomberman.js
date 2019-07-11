console.log('bomberman is running!');

let obstacles = {
  // border: {},
  // walls: {},
  // brick: {}
}
let border = {
  // div1: {x: , y: , width: , height: },
  // div2:
};
let walls = {};
let brick = {};

let bomberman = {};


//each time bomberman moves - collision detection

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

let boardX = 19;
let boardY = 11;


$(document).ready(function () {

  // initializeKeyboard();

  $(window).mousemove(function(event) {
    console.log(event.pageX, event.pageY);
  })

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
          // if (x === 3 && y === 1) {
          //   $('.wrapper').append("<div class='brick impenetrable'></div>");
          // }
          // else if (x === boardX-4 && y === 1) {
          //   $('.wrapper').append("<div class='brick impenetrable'></div>");
          // }
          // else if (x === 3 && y === boardY-2) {
          //   $('.wrapper').append("<div class='brick impenetrable'></div>");
          // }
          // else if (x === boardX-4 && y === boardY-2) {
          //   $('.wrapper').append("<div class='brick impenetrable'></div>");
          // }
          // else if (Math.random() >= 0.3) {
          //   $('.wrapper').append("<div class='brick impenetrable'></div>");
          // }
          // else {
            $('.wrapper').append("<div class='box'></div>");
          // }
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

  // const $bomberman = $('#bomberman');

  createBoard();

  bomberman = {
    $bombermanX: $('#bomberman').position().left,
    $bombermanY: $('#bomberman').position().top,
    width: "50px",
    height: "50px"
  }

  sides = {
    top: { tX: $('.top').position().left, tY: $('.top').position().left },
    right: { rX: $('.right').position().left, rY: $('.right').position().left },
    bottom: { bX: $('.bottom').position().left, bY: $('.bottom').position().left },
    left: { lX: $('.left').position().left, lY: $('.left').position().left }
  }

  let $impenetrable = $('.impenetrable');
  // let $brick = $('.brick');

  for (let i = 0; i < $impenetrable.length; i++) {
    let obstacle = $impenetrable.eq(i); // `.impenetrable:nth-child(${i})`;
    // console.log(obstacleNum);
    obstacles['obstacle'+i] = obstacle.position();
  }

  // if (moving === true) {
  //   $('#bomberman').addClass('moving')
  // }


  // let $bombermanX = $('#bomberman').position().top;
  // let $bombermanY = $('#bomberman').position().left;

  const checkMoves = function() {

    // if (rect1.x < rect2.x + rect2.width &&
    //  rect1.x + rect1.width > rect2.x &&
    //  rect1.y < rect2.y + rect2.height &&
    //  rect1.y + rect1.height > rect2.y) {
    //  }

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

});
