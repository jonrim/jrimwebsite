import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import StandardModal from 'lib/components/Modal';

import './index.scss';

export default class SuperMario extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-5'>
        <div className='col-wrapper'>
          <div className='work' id='super-mario'>
            <div className='work-wrapper'>
              <div className='info'>
                <h2>SUPER MARIO BROS. 3 REMAKE</h2>
                <p className="subtitle">EXPLORATION OF PHYSICS ENGINES & GAME DESIGN</p>
              </div>
              <div className='description'>
                <p>Completely remade the first level of Super Mario Bros. 3, and also made a unique custom level.</p>
                <p>Focused on building a collision detection system, a physics engine, and a state machine for animations that imitate the real game.</p>
                <StandardModal
                  name='SUPER MARIO BROS. 3 REMAKE'
                  descriptions={descriptions}
                  headerPhotos={headerPhotos}
                  introduction={introduction}
                  challenges={challenges}
                />
              </div>
            </div>
          </div>
        </div>
      </Grid.Column>
    )
  }
}

let descriptions = [
  `https://github.com/jonrim/Super-Mario-Bros.-3`,
  `Remade the entire first level and also made my own custom level.`,
  `Built the entire game from scratch. Made my own physics engine that uses actual physics equations (with thresholds so that Mario
  doesn't accelerate endlessly, and also to imitate the feel of the actual game), collision detection system, and state graph for animations and sounds.`,
  `Built using Unity and C#.`
];

let headerPhotos = [
  'http://i.imgur.com/b6DZx09.png',
  'http://i.imgur.com/Qe92C3Q.png',
  'http://i.imgur.com/7jutNQX.png',
];

let introduction = [
  {
    header: `Colliders control the game`,
    body: [
      {
        text: `In this game, behavior for every object occurs when a collider touches another collider. A collider doesn't necessarily have to be an object - its
              purpose can simply be to detect if the player has entered/exited it, and therefore do an action. For example, in the picture, the colliders for the enemy
              piranha plant are shown using green lines. If the player enters through the collision zone, reveal the plant and make it start attacking the player. 
              On exit, hide the plant.`,
        pictureType: 'right',
        picture: 'https://i.gyazo.com/d36950b2913f8b0b870bc75250114fe7.png'
      },
    ]
  },
  {
    header: `Thinking in quadrants`,
    body: [
      {
        text: `Everything in this game has a position with x and y coordinates. Because an object can't consist of one pixel, its very center is used to calculate
              its position, and the rest of the object surrounds that point. That's why there has to be quadrants for every object (see picture for a visual). To prevent
              the player from falling through random things, there has to be a collision detection.`,
        pictureType: 'right',
        picture: 'https://i.gyazo.com/a1932807210986b15e325bc7acc72769.png'
      },
      {
        text: `When a collision is detected between the player/enemy and the floor/block, halt the corresponding x or y velocity of the player/enemy. There are some edge
              cases, like the platforms which let the player move completely through from underneath but halt the player from above.`
      }
    ]
  },
  {
    header: `Super Mario's unique interactions: Maneuvering around a block`,
    body: [
      {
        text: `In Super Mario, there's a unique handling of collision when the player collides into the block from below at the very edge. See the photo
              for a visual understanding. The player can jump, 'slide' through the edge of the block, and land on top without touching any of the movement buttons.
              This lets the player control his/her vertical movement. I had to prevent this maneuvering from happening in other instances, e.g. when the player
              is moving in a northeast direction, and collides into the left side of the block. By comparing the location of the character at the point of collision with
              the previous location of the character just one frame prior, I can deduce 1) the character's velocity (both speed and direction), and 2) whether or not
              to let the maneuvering occur based on the positions of both the player and the block. For position, I use an equation like the following:`,
        pictureType: 'right',
        picture: 'https://i.gyazo.com/f2841a758b788c8fe95c4aef01689eaf.png'
      },
      {
        text: ` if player was moving right, (block's x-coordinate - 0.5 * width of block) - (player's x-coordinate + 0.5 * width of player) < 0.1 * width of block`
      },
      {
        text: `If the equation returns true, then I let the maneuvering go through. However, I can't let it go through if the horizontal velocity is either too high or at exactly 0
              (which is impossible) so I set a small threshold for the horizontal velocity (e.g. if absolute(x-velocity) < 0.05, then proceed). All of this lets me determine if the
              player collided with the block from the bottom at the very edge, and if so, let the player go through while also stopping the player at the very top (by checking
              to see if the y-velocity is negative and the x-velocity is once again within the threshold).`
      },
    ]
  },
];

let challenges = [
  {
    header: `Run meter`,
    body: [
      {
        text: `You do not want to see the script file that handles the player's movement.`,
      },
      {
        text: 'https://github.com/jonrim/Super-Mario-Bros.-3/blob/gh-pages/Super%20Mario%20Bros.%203/Assets/Scripts/PlayerMovement.cs'
      },
      {
        text: `Edge cases galore. The run meter is a mechanic in the game that lets the player accelerate/decelerate at different speeds depending on how
              much the meter is built up. The meter is shown at the bottom left of the screen. See picture for an example.`,
        pictureType: 'right',
        picture: 'http://i.imgur.com/b6DZx09.png'
      },
      {
        text: `Slowly stop the player if the meter is high and no movement direction button is being held down. Halt the player at a very high deceleration rate
              while also playing a unique sound and animation if the player's meter is full and he/she immediately changes direction. If the player has the tanooki (squirrel-like)
              power up, let the player use the flying mechanic if he/she jumps. And the list goes on...`
      }
    ]
  },
  {
    header: `Pretty much everything in this project`,
    body: [
      {
        text: `This was an incredibly difficult project but also very, very rewarding. There were so many small things like: letting the player control the height of a jump based on how long the jump
              button is held down. Let the player grab onto an enemy shell without accidentally dying if he/she collides with it horizontally while holding down the run button. Don't let the player
              accidentally die if he/she jumps on top of an enemy at a very high speed (Frames are limited: in one frame, the player can be above the enemy, but on the very next frame, the player
              can be completely overlapping the enemy. How do you determine if the player messed up, or if the player simply wanted to jump on the enemy?) How do I seamlessly transition animations
              for the small Mario, the big Mario, and tanooki Mario? How do I change Mario's hitbox when he crouches so that if I'm running and immediately crouch, I can slide underneath a block,
              while also using the tanooki suit's attack move? How can I....zzZZZ`,
      },
      {
        text: `Thank you for reading!`
      },
    ]
  }
]