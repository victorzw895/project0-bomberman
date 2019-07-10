console.log('bomberman is running!');

$(document).ready(function() {

})
  const pressedKeys = {};
  let moving = false;

  $(document).keydown(function(e) {
    // event.preventDefault();
    pressedKeys[e.which] = true;
  })

  $(document).keyup(function(e) {
    // event.preventDefault();
    delete pressedKeys[e.which];
  })


  const directionSpeed = {
    37: {
      left: "-=1"
    },

    38: {
      top: "-=1"
    },

    39: {
      left: "+=1"
    },

    40: {
      top: "+=1"
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
    checkMoves();
    const move = function() {
      $('#bomberman').css(directionSpeed[e.which])
      moving = true;
    }
    console.log(e.which)
    if (!moving && pressedKeys[e.which] === true) {
      // if (pressedKeys[e.which] === true && e.which === 39) {
        intervalId = setInterval(move, 1);
    }
  }))

  $(document).on("keyup",(function(e) {
    // event.preventDefault();
    // if (e.which === 39) {
      clearInterval(intervalId)
      moving = false;
  }))
