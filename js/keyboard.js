console.log('bomberman is running!');


canMove = {
  up: true,
  right: true,
  down: true,
  left: true
}


const checkImpenetrable = function() {
  let $impenetrable = $('.impenetrable');

  let topX = $('.top').position().left;
  let topY = $('.top').position().top;
  let rightX = $('.right').position().left;
  let rightY = $('.right').position().top;
  let bottomX = $('.bottom').position().left;
  let bottomY = $('.bottom').position().top;
  let leftX = $('.left').position().left;
  let leftY = $('.left').position().top;

  canMove.up = true;
  canMove.right = true;
  canMove.down = true;
  canMove.left = true;


  for (let i = 0; i < $impenetrable.length; i ++) {

    if (topX === obstacles['obstacle'+i].left && topY === obstacles['obstacle'+i].top) {
      console.log('cant go up!');
      canMove.up = false;
    }
    else if ((topX === ((obstacles['obstacle'+i].left) + 26) && topY === obstacles['obstacle'+i].top) ||
             (topX === ((obstacles['obstacle'+i].left) - 26) && topY === obstacles['obstacle'+i].top)) {
      console.log('still cant go up!');
      canMove.up = false;
    }

    if (rightX === obstacles['obstacle'+i].left && rightY === obstacles['obstacle'+i].top) {
      console.log('cant go right');
      canMove.right = false;
    }
    else if ((rightX === obstacles['obstacle'+i].left && rightY === (obstacles['obstacle'+i].top) + 26) ||
             (rightX === obstacles['obstacle'+i].left && rightY === (obstacles['obstacle'+i].top) - 26)) {
      console.log('still cant go right!');
      canMove.right = false;
    }

    if (bottomX === obstacles['obstacle'+i].left && bottomY === obstacles['obstacle'+i].top) {
      console.log('cant go down!');
      canMove.down = false;
    }
    else if ((bottomX === ((obstacles['obstacle'+i].left) + 26) && bottomY === obstacles['obstacle'+i].top) ||
             (bottomX === ((obstacles['obstacle'+i].left) - 26) && bottomY === obstacles['obstacle'+i].top)) {
      console.log('still cant go down!');
      canMove.down = false;
    }

    if (leftX === obstacles['obstacle'+i].left && leftY === obstacles['obstacle'+i].top) {
      console.log('cant go left!');
      canMove.left = false;
    }
    else if ((leftX === obstacles['obstacle'+i].left && leftY === (obstacles['obstacle'+i].top) + 26) ||
             (leftX === obstacles['obstacle'+i].left && leftY === (obstacles['obstacle'+i].top) - 26)) {
      console.log('still cant go left!');
      canMove.left = false;
    }

  }
  console.log(canMove);
}

$(document).ready(function() {
  checkImpenetrable();
})


  const pressedKeys = {};
  let moving = false;

  $(document).keydown(function(e) {
    // event.preventDefault();
    // if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
          pressedKeys[e.which] = true;
          // checkImpenetrable();
    // }
    // console.log(pressedKeys)
  })

  $(document).keyup(function(e) {
    // event.preventDefault();
    delete pressedKeys[e.which];
    // checkImpenetrable();
  })


  const directionSpeed = {
    37: {
      left: "-=26"
    },

    38: {
      top: "-=26"
    },

    39: {
      left: "+=26"
    },

    40: {
      top: "+=26"
    },

    32: {
      //drop bomb
    }
  }

$(document).on("keydown",(function(e) {
  // event.preventDefault();
  // pressedKeys = _.mapValues(pressedKeys, () => false); // lodash.js
  // $(document).on("keydown",(function(e) {
  //   clearInterval(intervalId)
  //   moving = false;
  //
  //   const move = function() {
  //     $('#bomberman').css(directionSpeed[e.which])
  //     moving = true;
  //   }
  //   console.log(e.which)
  //   if (!moving && pressedKeys[e.which] === true) {
  //     // if (pressedKeys[e.which] === true && e.which === 39) {
  //       intervalId = setInterval(move, 1);
  //   }
  // }))
  // checkMoves();
  // NEED TO UPDATE BOMBERMAN LOCATION


  // if (bX < (obstacles['obstacle'+i].left + 50) &&
  //     bX + 50 > obstacles['obstacle'+i].left &&
  //     bY < (obstacles['obstacle'+i].top) + 50 &&
  //     bY + 50 > obstacles['obstacle'+i].top) {
  //       if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
  //         // clearInterval(intervalId)
  //         console.log('this is an obstacle');
  //       }
  // }
  // else {
  //   console.log('you can keep walking');
  // }
  // let bX = $('#bomberman').position().left;
  // let bY = $('#bomberman').position().top;
  // let topX = $('.top').position().left;
  // let topY = $('.top').position().top;
  // let rightX = $('.right').position().left;
  // let rightY = $('.right').position().top;
  // let bottomX = $('.bottom').position().left;
  // let bottomY = $('.bottom').position().top;
  // let leftX = $('.left').position().left;
  // let leftY = $('.left').position().top;
  //
  //
  // for (let i = 0; i < $impenetrable.length; i ++) {
  //   if (topX === obstacles['obstacle'+i].left) {
  //     console.log('cant go top!');
  //   }
  // }

  // if (e.which === 37 &&)





  if ((e.which === 37 && canMove.left) || (e.which === 38 && canMove.up) || (e.which === 39 && canMove.right) || (e.which === 40 && canMove.down) ) { // dont run for any other button except arrow keys
    // console.log(bomberman);
    // check hit impenetrable

    // if (rect1.x < rect2.x + rect2.width &&
    //  rect1.x + rect1.width > rect2.x &&
    //  rect1.y < rect2.y + rect2.height &&
    //  rect1.y + rect1.height > rect2.y) {
    //  }


    // else {
      const move = function() {
        // console.log(bX);
        // console.log(bY);
        $('#bomberman').css(directionSpeed[e.which])
        $('.top').css(directionSpeed[e.which])
        $('.right').css(directionSpeed[e.which])
        $('.bottom').css(directionSpeed[e.which])
        $('.left').css(directionSpeed[e.which])
        // if (e.which === 37) {
        //   bomberman.bX -= 26;
        // }
        // else if (e.which === 38) {
        //   bomberman.bY -= 26;
        // }
        // else if (e.which === 39) {
        //   bomberman.bX += 26;
        // }
        // else if (e.which === 40) {
        //   bomberman.bY += 26;
        // }


        moving = true; // move code runs only once, maybe remove this


        // if (bX < 200) {
        //   console.log('this should work')
        // }
        // else {
        //   console.log('working appropiately');
        // }

        // let $impenetrable = $('.impenetrable');

        // for (let i = 0; i < $impenetrable.length; i ++) {
        //    // console.log('this is running');
        //    // console.log(bomberman.$bombermanX);
        //    // console.log(obstacles['obstacle'+i].top);
        //    if (bX < (obstacles['obstacle'+i].left + 50) &&
        //        bX + 50 > obstacles['obstacle'+i].left &&
        //        bY < (obstacles['obstacle'+i].top) + 50 &&
        //        bY + 50 > obstacles['obstacle'+i].top) {
        //          if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
        //            // clearInterval(intervalId)
        //            console.log('this is an obstacle');
        //          }
        //    }
        //    else {
        //      console.log('you can keep walking');
        //    }
        //  }


      //
      //  if (bX < 167 || bY < 48 || bX + 50 > 323 || bY + 50 > 204
      //  || (bX + 50 > 270 && bY + 50 > 152)) {
      //     if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
      //       // clearInterval(intervalId)
      //     }
      //     console.log('working');
      //   }
      //   else {
      //     console.log('not working');
      //   }
      }
      // console.log(e.which)
      if (!moving && pressedKeys[e.which] === true) {
        // if (pressedKeys[e.which] === true && e.which === 39) {
          // intervalId = setInterval(move, 1);
          move();
      }
    // }
  }
}))

$(document).on("keyup",(function(e) {
  // event.preventDefault();
  // if (e.which === 39) {
  if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
    // clearInterval(intervalId)
    moving = false;
  }

  checkImpenetrable();

}))
