console.log('bomberman is running!');

// if burger placed, stop from dropping multiple burgers
// Future variable change to counter, if power up allow multiple bombs ////////
let burgerPlaced = false ;

// bomberman possible movements ///////////////////////////////////////////////
let canMove = {
  up: true,
  right: true,
  down: true,
  left: true
};

// look at position and check if impenetrable objects around character
const checkImpenetrable = function() {
  let $impenetrable = $('.impenetrable');

  // get position left/top of boxes surrounding character // can remove if working similar to bomb
  let topX = $('.top').position().left;
  let topY = $('.top').position().top;
  let rightX = $('.right').position().left;
  let rightY = $('.right').position().top;
  let bottomX = $('.bottom').position().left;
  let bottomY = $('.bottom').position().top;
  let leftX = $('.left').position().left;
  let leftY = $('.left').position().top;

  // reset all possible momvements to true
  canMove.up = true;
  canMove.right = true;
  canMove.down = true;
  canMove.left = true;

  // check all current impenetrable objects.
  // if they are equal to boxes surrounding player or partially, set false to being able to move in that direction
  for (let i = 0; i < $impenetrable.length; i ++) {

    // check top boxes
    if (topX === $impenetrable.eq(i).position().left && topY === $impenetrable.eq(i).position().top) {
      // console.log('cant go up!');
      canMove.up = false;
    }
    else if ((topX === (($impenetrable.eq(i).position().left) + 26) && topY === $impenetrable.eq(i).position().top) ||
             (topX === (($impenetrable.eq(i).position().left) - 26) && topY === $impenetrable.eq(i).position().top)) {
      // console.log('still cant go up!');
      canMove.up = false;
    }

    // check right boxes
    if (rightX === $impenetrable.eq(i).position().left && rightY === $impenetrable.eq(i).position().top) {
      // console.log('cant go right');
      canMove.right = false;
    }
    else if ((rightX === $impenetrable.eq(i).position().left && rightY === ($impenetrable.eq(i).position().top) + 26) ||
             (rightX === $impenetrable.eq(i).position().left && rightY === ($impenetrable.eq(i).position().top) - 26)) {
      // console.log('still cant go right!');
      canMove.right = false;
    }

    // check bottom boxes
    if (bottomX === $impenetrable.eq(i).position().left && bottomY === $impenetrable.eq(i).position().top) {
      // console.log('cant go down!');
      canMove.down = false;
    }
    else if ((bottomX === (($impenetrable.eq(i).position().left) + 26) && bottomY === $impenetrable.eq(i).position().top) ||
             (bottomX === (($impenetrable.eq(i).position().left) - 26) && bottomY === $impenetrable.eq(i).position().top)) {
      // console.log('still cant go down!');
      canMove.down = false;
    }

    // check left boxes
    if (leftX === $impenetrable.eq(i).position().left && leftY === $impenetrable.eq(i).position().top) {
      // console.log('cant go left!');
      canMove.left = false;
    }
    else if ((leftX === $impenetrable.eq(i).position().left && leftY === ($impenetrable.eq(i).position().top) + 26) ||
             (leftX === $impenetrable.eq(i).position().left && leftY === ($impenetrable.eq(i).position().top) - 26)) {
      // console.log('still cant go left!');
      canMove.left = false;
    }
  }
}


$(document).ready(function() {
  // checkImpenetrable(); // initialize position and check for impenetrable objects


  // keep track of keys pressed and if currently moving
  const pressedKeys = {};
  let moving = false;

  // return true for arrow keys being pressed
  $(document).keydown(function(e) {
    if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 || e.which === 32) {
      event.preventDefault();
      pressedKeys[e.which] = true;
    }
  })

  // delete for arrows not being pressed
  $(document).keyup(function(e) {
    delete pressedKeys[e.which];
    // checkImpenetrable();
  })

  // pixels character will move each time
  const action = {
    37: { left: "-=26" },
    38: { top: "-=26" },
    39: { left: "+=26" },
    40: { top: "+=26" }
  }


  $(document).on("keydown",(function(e) {

    // save to variable function to detonateBreaks when bomb detonates next to bricks
    const detonateBreaks = function( $burgerPosition ) {
      let bX = $('.bomberman').position().left;
      let bY = $('.bomberman').position().top;

      // else if ((bX + 52 === $burgerPosition.left && bY - 26 === $burgerPosition.top) ||
      //          ((bX === $burgerPosition.left - 26) && bY === $burgerPosition.top)) {
      //   // console.log('still cant go up!');
      //   canMove.up = false;
      // }

      // If player is on bomb, or next to bomb, die
      if ( bX === $burgerPosition.left && bY === $burgerPosition.top ) { // have to use left and top
        // console.log('you dead');
        // console.log('left:', bX, 'top:', bY);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind(); // works for now, ideally just stop bomberman from being able to move, if unbind, eventPreventDefault disabled
      }
      // player is left of burger
      else if ( bX >= $burgerPosition.left - 78 && bX <= $burgerPosition.left + 26 && bY === $burgerPosition.top ) {
        console.log('you still dead');
        // console.log($burgerPosition.left - 52)
        // console.log(bX >= ($burgerPosition.left - 52));
        // console.log('left:', bX, 'top:', bY);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind();
      }
      // if player is right of burger
      else if ( bX <= $burgerPosition.left + 78 && bX >= $burgerPosition.left + 26 && bY === $burgerPosition.top ) {
        console.log('you die anyways1');
        // console.log('left:', bX, 'top:', bY);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind();
      }
      // if player is below burger
      else if ( bY <= $burgerPosition.top + 78 && bY >= $burgerPosition.top + 26 && bX === $burgerPosition.left ) {
        console.log('you die anyways2');
        // console.log('left:', bX, 'top:', bY);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind();
      }
      // player on top of burger
      else if ( bY >= $burgerPosition.top - 78  && bY <= $burgerPosition.top + 26 && bX === $burgerPosition.left ) {
        console.log('you die anyways3');
        // console.log('left:', bX, 'top:', bY);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind();
      }


    // console.log( $burgerPosition );
    // console.log( $burgerPosition.left );

      // for all impenetrable objects, check if they have class brick
      // if class brick, and its position is surrounding bomb, add regular box class, remove brick and impenetrable class



      for (let i = 0; i < $('.impenetrable').length; i++) {
        if ($('.impenetrable').eq(i).hasClass('brick')) {

          // if brick is right of burger
          if ( $burgerPosition.left + 52 === $('.impenetrable').eq(i).position().left && $burgerPosition.top === $('.impenetrable').eq(i).position().top ) {
            console.log('exploding right bricks!');
            $('.impenetrable').eq(i).addClass('box');
            $('.impenetrable').eq(i).removeClass('brick');
            $('.impenetrable').eq(i).removeClass('impenetrable');
          }
          // if brick is left of burger
          if ( $burgerPosition.left - 52 === $('.impenetrable').eq(i).position().left && $burgerPosition.top === $('.impenetrable').eq(i).position().top ) {
            console.log('exploding left bricks!');
            $('.impenetrable').eq(i).addClass('box');
            $('.impenetrable').eq(i).removeClass('brick');
            $('.impenetrable').eq(i).removeClass('impenetrable');
          }

          // THIS PART IS WEIRD IF I SWAP ABOVE WITH BELOW
          // if brick is above burger
          if ( $burgerPosition.left === $('.impenetrable').eq(i).position().left && $burgerPosition.top - 52 === $('.impenetrable').eq(i).position().top ) {
            console.log('exploding top bricks!');
            $('.impenetrable').eq(i).addClass('box');
            $('.impenetrable').eq(i).removeClass('brick');
            $('.impenetrable').eq(i).removeClass('impenetrable');
          }
          // if brick is below burger
          if ( $burgerPosition.left === $('.impenetrable').eq(i).position().left && $burgerPosition.top + 52 === $('.impenetrable').eq(i).position().top ) {
            console.log('exploding bottom bricks!');
            $('.impenetrable').eq(i).addClass('box');
            $('.impenetrable').eq(i).removeClass('brick');
            $('.impenetrable').eq(i).removeClass('impenetrable');
          }

        }
      }
    }


    // function to run when spacebar is pressed and bomb is placed
    const placeBomb = function() {
      let $box = $('.box');
      // need to setTimeout to explode bomb

      // for any space the character can move (not impenetrable)
      if (!burgerPlaced) {
        burgerPlaced = true;
        for (let i = 0; i < $box.length; i++) {

          let $boxPosition = $box.eq(i).position()
          let $bombermanPosition = $('.bomberman').position()

          // if space is position where player is standing, place bomb there
          if ($boxPosition.left === $bombermanPosition.left && $boxPosition.top === $bombermanPosition.top) {

            let $burgerPosition = $boxPosition;
            console.log($burgerPosition);

            // save function for when bomb explodes, require burgerPosition as argument for detonateBreaks to know surrounding bricks to break
            const explode = function() {

              clearTimeout(timeoutId);

              // console.log('BOOOM!, ', i);
              // console.log($('.box').eq(i));
              $('.box').eq(i).removeClass('burger');
              burgerPlaced = false;

              // console.log($burgerPosition);

              detonateBreaks($burgerPosition);

            }


            $('.box').eq(i).addClass('burger');
            timeoutId = setTimeout(explode,3000);
          }
        }
      }
    }

    if (e.which === 32) {
      event.preventDefault();
      placeBomb();
    }


    if ((e.which === 37 && canMove.left) || (e.which === 38 && canMove.up) || (e.which === 39 && canMove.right) || (e.which === 40 && canMove.down) ) { // dont run for any other button except arrow keys
      event.preventDefault();

      const move = function() {
        // console.log(bX);
        // console.log(bY);
        $('.bomberman').css(action[e.which])
        $('.top').css(action[e.which])
        $('.right').css(action[e.which])
        $('.bottom').css(action[e.which])
        $('.left').css(action[e.which])


        moving = true; // move code runs only once, maybe remove this

      }

      if (!moving && pressedKeys[e.which] === true) {
          move();
      }
    }
  }))

  $(document).on("keyup",(function(e) {

    // if (e.which === 37 || e.which === 38 || e.which === 39 || e.which === 40 ) {
      // clearInterval(intervalId)
      moving = false;
    // }

    checkImpenetrable(); // checking only once after init after keyup, if allowing function to hold keys, need to check other times

  }))


})
