console.log('bomberman is running!');

const pressedKeys = {};
let moving = false;

$(document).ready(function() {

})


  $(document).keydown(function(e) {
    // event.preventDefault();
    // if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
          pressedKeys[e.which] = true;
    // }
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
          if (e.which === 37) {
            bomberman.$bombermanX -= 1;
          }
          else if (e.which === 38) {
            bomberman.$bombermanY -= 1;
          }
          else if (e.which === 39) {
            bomberman.$bombermanX += 1;
          }
          else if (e.which === 40) {
            bomberman.$bombermanY += 1;
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
          if (bX < 167 + 52 || bY < 48 + 52 || bX + 50 > 323 || bY + 50 > 204
          || (bX + 50 > 270 && bY + 50 > 152)) {
            if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
              clearInterval(intervalId);
            }
            console.log('working');
          }
          else {
            console.log('not working');
          }
        }
        // console.log(e.which)
        if (!moving && pressedKeys[e.which] === true) {
          // if (pressedKeys[e.which] === true && e.which === 39) {
            intervalId = setInterval(move, 100);
        }
      // }


  /*    let $impenetrable = $('.impenetrable');
       for (let i = 0; i < $impenetrable.length; i ++) {
         // console.log('this is running');
         // console.log(bomberman.$bombermanX);
         // console.log(obstacles['obstacle'+i].top);
         if (bomberman.$bombermanX < (obstacles['obstacle'+i].left + 88) &&
             bomberman.$bombermanX + 20 > obstacles['obstacle'+i].left &&
             bomberman.$bombermanY < (obstacles['obstacle'+i].top) + 88 &&
             bomberman.$bombermanY + 25 > obstacles['obstacle'+i].top) {
           console.log('something is happening');
         }
       } */


    }
  }))

  $(document).on("keyup",(function(e) {
    // event.preventDefault();
    // if (e.which === 39) {
    if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
      clearInterval(intervalId)
      moving = false;
    }
  }))
