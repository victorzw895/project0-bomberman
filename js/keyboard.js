console.log('bomberman is running!');

$(document).ready(function() {

})
  const pressedKeys = {};
  let moving = false;

  $(document).keydown(function(e) {
    // event.preventDefault();
    // if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
          pressedKeys[e.which] = true;
    // }
    console.log(pressedKeys)
  })

  $(document).keyup(function(e) {
    // event.preventDefault();
    delete pressedKeys[e.which];
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

  let $impenetrable = $('.impenetrable');




  if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
    // console.log(bomberman);
    // check hit impenetrable

    // if (rect1.x < rect2.x + rect2.width &&
    //  rect1.x + rect1.width > rect2.x &&
    //  rect1.y < rect2.y + rect2.height &&
    //  rect1.y + rect1.height > rect2.y) {
    //  }


    // else {
      const move = function() {
        $('#bomberman').css(directionSpeed[e.which])
        $('.top').css(directionSpeed[e.which])
        $('.right').css(directionSpeed[e.which])
        $('.bottom').css(directionSpeed[e.which])
        $('.left').css(directionSpeed[e.which])
        if (e.which === 37) {
          bomberman.$bombermanX -= 26;
        }
        else if (e.which === 38) {
          bomberman.$bombermanY -= 26;
        }
        else if (e.which === 39) {
          bomberman.$bombermanX += 26;
        }
        else if (e.which === 40) {
          bomberman.$bombermanY += 26;
        }
        moving = true;
        let bX = bomberman.$bombermanX;
        let bY = bomberman.$bombermanY;
        console.log(bX);
        console.log(bY);
        // if (bX < 200) {
        //   console.log('this should work')
        // }
        // else {
        //   console.log('working appropiately');
        // }

        // let $impenetrable = $('.impenetrable');

       //  for (let i = 0; i < $impenetrable.length; i ++) {
       //     // console.log('this is running');
       //     // console.log(bomberman.$bombermanX);
       //     // console.log(obstacles['obstacle'+i].top);
       //     if (bX < (obstacles['obstacle'+i].left + 50) &&
       //         bX + 20 > obstacles['obstacle'+i].left &&
       //         bY < (obstacles['obstacle'+i].top) + 50 &&
       //         bY + 25 > obstacles['obstacle'+i].top) {
       //           if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
       //             clearInterval(intervalId)
       //             console.log('working');
       //           }
       //     }
       //     else {
       //       console.log('not working');
       //     }
       //   }
       // }

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
}))
