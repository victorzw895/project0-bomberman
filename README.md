# Project 0: Bomberman

Remake of bomberman, because its my all time favourite retro game.

## Version 3

## Table of Contents
1. Link
2. Features
  3. New Features
4. Challenges
5. Current Bugs
  6. Fixed Bugs
7. TODO List
8. Technologies
9. Thank You


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
- Added powerup boxes
- Added burger count, now increases burger ammo when grabbing powerup boxes

## Challenges
1. Learning how to get JavaScript to recognise keypress for arrow keys. Needed to use keydown and keyup instead.
2. Trying to get collision detection to work, not just between two objects, but main object and all the other hundreds of boxes in the game at the same time. quadtree might be a solution to look into for faster performance.
3. Getting main object to detect all possible collisions and prevent from being able to pass through impenetrable objects
4. Remove multiple objects/classes from elements running through a for loop. This causes weird things as the loop is running through a live object, as things get removed or added. Loop tends to skip elements or do other weird things.

## Current Bugs

1. ~~*burger*: Burger bomb glitches when too many are placed at the same time. Glitch appers again with extra burgers.~~ *FIXED*
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
5. *multiple burger*: multiple burger bomb glitch has been fixed.


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
