# Project 0: Bomberman

Remake of bomberman, because its my all time favourite retro game.

## Version 2.9

## Link - Deployed on GitHub Pages
[Bomberman Game](https://victorzw895.github.io/project0-bomberman/)

## Features
- Move with arrow keys
- Place a bomb with space bar
- Detect collision with outer walls, bricks, inner walls
- Clear bricks and path with bombs, able to walk through

### New Features
- Explosions show when burger bomb detonate
- Player dies when explosion hits player
- Running animation added
- Animation facing direction added


## Current Bugs

1. *burger*: Burger bomb glitches when too many are placed at the same time.
2. ~~*player dies*: Player not dying only when directly next to bomb.~~ *FIXED*

#### Minor Bugs
1. *player dies*: Player not dying when partially covered by wall and partially next to bomb. Need to add feature
2. *bomb*: Bomb is still placed when standing between two boxes. bomb does not appear, but needs to timeout before being able to place another bomb.
3. *border*: Border is currently set to test game proper function. When adjusting width and height, need to ensure these borders are still impenetrable.

## Fixed Bugs

1. *burger*: TEMPORARY FIX, reduced number of bombs to one at a time.
   bombs seem to have stopped glitching.
2. *burger*: Would only not blow up brick bellow bomb, if there was a brick above the bomb.
3. *player dies*: Player now dies when on bomb, next to bomb or partially next to bomb. Still minor bug when partially covered to be fixed
4. *fire explosions*: not disappearing correctly. Fixed


## TODO
- Add bots
- Add AI to bots
- allow bomb to destroy bots, bricks and player
- make player and bots unable to pass through bombs
- power ups (extra bombs, explode range, *push bombs*)
- change board size
- add explosion animation
- network multiplayer
- more colours
- more intense emotions

## Technologies
- Made with jQuery

## Thank You
- Joel and Rashida for what you've taught me about HTML, CSS, JavaScript, DOM, jQuery so far!
