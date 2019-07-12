console.log('bomberman is running!');

// if burger placed, stop from dropping multiple burgers
// Future variable change to counter, if power up allow multiple bombs ////////
let burgerAmmo = 1 ;
let burgerPlaced = 0;

// bomberman possible movements ///////////////////////////////////////////////
let canMove = {
  up: true,
  right: true,
  down: true,
  left: true
};

// Function look at position and check if impenetrable objects around character
const checkImpenetrable = function() {
  let $impenetrable = $('.impenetrable');

  // get position left/top px of boxes surrounding character // can remove if working similar to bomb
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
    let $impX = $impenetrable.eq(i).position().left
    let $impY = $impenetrable.eq(i).position().top

    // check top boxes
    if (topX === $impX && topY === $impY) {
      // console.log('cant go up!');
      canMove.up = false;
    }
    else if ((topX === $impX + 26 && topY === $impY) || (topX === $impX - 26 && topY === $impY)) {
      // console.log('still cant go up!');
      canMove.up = false;
    }

    // check right boxes
    if (rightX === $impX && rightY === $impY) {
      // console.log('cant go right');
      canMove.right = false;
    }
    else if ((rightX === $impX && rightY === $impY + 26) || (rightX === $impX && rightY === $impY - 26)) {
      // console.log('still cant go right!');
      canMove.right = false;
    }

    // check bottom boxes
    if (bottomX === $impX && bottomY === $impY) {
      // console.log('cant go down!');
      canMove.down = false;
    }
    else if ((bottomX === $impX + 26 && bottomY === $impY) || (bottomX === $impX - 26 && bottomY === $impY)) {
      // console.log('still cant go down!');
      canMove.down = false;
    }

    // check left boxes
    if (leftX === $impX && leftY === $impY) {
      // console.log('cant go left!');
      canMove.left = false;
    }
    else if ((leftX === $impX && leftY === $impY + 26) || (leftX === $impX && leftY === $impY - 26)) {
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


    // change character from idle to walking animation
    if (pressedKeys[e.which] === true && e.which !== 32 ) {
      $('.bomberman').addClass('walking');
      $('.bomberman').removeClass('idle');
    }

// Kill player ////////////////////////////////////////////////////////////////

    const killPlayer = function( $burgerPosition ) {

      let $bLeft = $('.bomberman').position().left;
      let $bTop = $('.bomberman').position().top;
      let $burgerLeft = $burgerPosition.left
      let $burgerTop = $burgerPosition.top

      // If player is on bomb, or next to bomb, die
      if ( $bLeft === $burgerLeft && $bTop === $burgerPosition.top ) { // have to use left and top
        // console.log('you dead');
        // console.log('left:', $bLeft, 'top:', $bTop);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind(); // works for now, ideally just stop bomberman from being able to move, if unbind, eventPreventDefault disabled
      }
      // player is left of burger
      else if ( $bLeft >= $burgerLeft - 78 && $bLeft <= $burgerLeft + 26 && $bTop === $burgerTop ) {
        console.log('you still dead');
        // console.log($burgerPosition.left - 52)
        // console.log($bLeft >= ($burgerPosition.left - 52));
        // console.log('left:', $bLeft, 'top:', $bTop);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind();
      }
      // if player is right of burger
      else if ( $bLeft <= $burgerLeft + 78 && $bLeft >= $burgerLeft + 26 && $bTop === $burgerTop ) {
        console.log('you die anyways1');
        // console.log('left:', $bLeft, 'top:', $bTop);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind();
      }
      // if player is below burger
      else if ( $bTop <= $burgerTop + 78 && $bTop >= $burgerTop + 26 && $bLeft === $burgerLeft ) {
        console.log('you die anyways2');
        // console.log('left:', $bLeft, 'top:', $bTop);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind();
      }
      // player on top of burger
      else if ( $bTop >= $burgerTop - 78  && $bTop <= $burgerTop + 26 && $bLeft === $burgerLeft ) {
        console.log('you die anyways3');
        // console.log('left:', $bLeft, 'top:', $bTop);
        // console.log($burgerPosition.left, $burgerPosition.top)
        $('.bomberman').addClass('dead');
        $('.bomberman').removeClass('.bomberman');
        $(document).unbind();
      }
    }


// Kill bricks ////////////////////////////////////////////////////////////////
    const killBricks = function( $burgerPosition ) {
      for (let i = 0; i < $('.impenetrable').length; i++) {
        $impenetrable = $('.impenetrable').eq(i)
        $impPosition = $('.impenetrable').eq(i).position()
        $hasBrick = $('.impenetrable').eq(i).hasClass('brick');
        if ($hasBrick) {
          // console.log($impenetrable);
          // console.log($burgerPosition.left = 52, $impenetrable.position().left);
          // if brick is right of burger
          if ( $burgerPosition.left + 52 === $impPosition.left && $burgerPosition.top === $impPosition.top ) {
            console.log('exploding right bricks!');
            $impenetrable.addClass('box');
            $impenetrable.removeClass('brick');
            $impenetrable.removeClass('impenetrable');
          }
          // if brick is left of burger
          if ( $burgerPosition.left - 52 === $impPosition.left && $burgerPosition.top === $impPosition.top ) {
            console.log('exploding left bricks!');
            $impenetrable.addClass('box');
            $impenetrable.removeClass('brick');
            $impenetrable.removeClass('impenetrable');
          }

          // THIS PART IS WEIRD IF I SWAP ABOVE WITH BELOW
          // if brick is above burger
          if ( $burgerPosition.left === $impPosition.left && $burgerPosition.top - 52 === $impPosition.top ) {
            console.log('exploding top bricks!');
            $impenetrable.addClass('box');
            $impenetrable.removeClass('brick');
            $impenetrable.removeClass('impenetrable');
          }
          // if brick is below burger
          if ( $burgerPosition.left === $impPosition.left && $burgerPosition.top + 52 === $impPosition.top ) {
            console.log('exploding bottom bricks!');
            $impenetrable.addClass('box');
            $impenetrable.removeClass('brick');
            $impenetrable.removeClass('impenetrable');
          }
        }
      }
    }




// When bomb Detonates ////////////////////////////////////////////////////////
    const detonateBreaks = function( $burgerPosition ) {
      // kill player
      killPlayer( $burgerPosition );

      // remove bricks
      killBricks( $burgerPosition );
    }


    // function to run when spacebar is pressed and bomb is placed
    const placeBomb = function() {
      // need to setTimeout to explode bomb

      // for any space the character can move (not impenetrable)
      if (burgerPlaced !== burgerAmmo) {
        for (let i = 0; i < $('.box').length; i++) {

          // let $boxPosition = $box.eq(i).position() // NEED TO CHANGE
          let $burger = $('.box').eq(i);
          let $boxLeft = $('.box').eq(i).position().left
          let $boxTop = $('.box').eq(i).position().top
          let $bLeft = $('.bomberman').position().left
          let $bTop = $('.bomberman').position().top

          // if space is position where player is standing, place bomb there
          if ($boxLeft === $bLeft && $boxTop === $bTop) {

            // save function for when bomb explodes, require burgerPosition as argument for detonateBreaks to know surrounding bricks to break
            // explode($burger);
            // event when bomb explodes ///////////////////////////////////////////////////
                const explode = function() {

                  // clearTimeout(timeoutId);

                  let $burgerPosition = $burger.position();
                  let burgerLeft = $burger.position().left;
                  let burgerTop = $burger.position().top;
                  let $box = $('.box');

                  // console.log('BOOOM!, ', i);
                  // console.log($('.box').eq(i));

                  $burger.removeClass('burger');


                  for (let i = 0; i < $('.box').length; i++) {

                    const fire = function() {
                      $box.eq(i).removeClass('fire');
                    }

                    console.log('running for loop')
                    let $bLeft = $('.box').eq(i).position().left;
                    let $bTop = $('.box').eq(i).position().top;
                    console.log($bLeft, burgerLeft);
                    console.log($bTop, burgerTop);
                    // if burger on box
                    if ($bLeft === burgerLeft && $bTop === burgerTop) {
                      console.log('explosions! A LOT OF EXPLOSIONS');
                      $box.eq(i).addClass('fire');
                      timeoutId = setTimeout(fire,500);
                    }
                    // if box is left of burger
                    else if ($bLeft === burgerLeft - 52 && $bTop === burgerTop) {
                      console.log('explosions! A LOT OF EXPLOSIONS');
                      $box.eq(i).addClass('fire');
                      timeoutId = setTimeout(fire,500);
                    }
                    // if box is right of burger
                    else if ($bLeft === burgerLeft + 52 && $bTop === burgerTop) {
                      console.log('explosions! A LOT OF EXPLOSIONS');
                      $box.eq(i).addClass('fire');
                      timeoutId = setTimeout(fire,500);
                    }
                    // if box is above burger
                    else if ($bLeft === burgerLeft && $bTop === burgerTop - 52) {
                      console.log('explosions! A LOT OF EXPLOSIONS');
                      $box.eq(i).addClass('fire');
                      timeoutId = setTimeout(fire,500);
                    }
                    // if box is below burger
                    else if ($bLeft === burgerLeft && $bTop === burgerTop + 52) {
                      console.log('explosions! A LOT OF EXPLOSIONS');
                      $box.eq(i).addClass('fire');
                      timeoutId = setTimeout(fire,500);
                    }
                  }
                  burgerPlaced -= 1;

                  // console.log($burgerPosition);
                  console.log($burgerPosition);
                  detonateBreaks($burgerPosition);

                }


            $('.box').eq(i).addClass('burger');
            timeoutId = setTimeout(explode,3000);
          }
        }
        burgerPlaced += 1;
      }
    }

    if (e.which === 32) {
      event.preventDefault();
      placeBomb();
    }

    // check if any of arrow keys are being pressed and do following
    if ((e.which === 37 && canMove.left) || (e.which === 38 && canMove.up) || (e.which === 39 && canMove.right) || (e.which === 40 && canMove.down) ) { // dont run for any other button except arrow keys
      event.preventDefault();

      const move = function() {
        // console.log($bLeft);
        // console.log($bTop);
        $('.bomberman').css(action[e.which])
        if (e.which === 37) {
          $('.bomberman').css({'transform': 'scaleX(-1)'})
        }
        if (e.which === 39) {
          $('.bomberman').css('transform', 'scaleX(1)')
        }

        $('.top').css(action[e.which])
        $('.right').css(action[e.which])
        $('.bottom').css(action[e.which])
        $('.left').css(action[e.which])


        moving = true; // move code runs only once, maybe remove this

      }

      // if character is not yet moving, move once
      if (!moving && pressedKeys[e.which] === true) {
        move();
      }
    }
  }))




  $(document).on("keyup",(function(e) {

    // Revert animation to idle when keys are not being pressed
    $('.bomberman').addClass('idle');
    $('.bomberman').removeClass('walking');

    moving = false;

    //power up Function ///////////////////////////////////////////////////////
    for (let i = 0; i < $('.powerup').length; i ++) {
      if ($('.powerup').eq(i).position().left === $('.bomberman').position().left &&
          $('.powerup').eq(i).position().top === $('.bomberman').position().top) {
        console.log('GRABBING POWERUP!');
        $('.powerup').eq(i).removeClass('powerup');
        burgerAmmo += 1;
      }
    }
    // }

    // Once stop moving, see where else can player move
    checkImpenetrable(); // checking only once after init after keyup, if allowing function to hold keys, need to check other times

  }))


})
