import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import StandardModal from 'lib/components/Modal';

import './index.scss';

export default class FreshAire extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-2'>
        <div className='col-wrapper'>
          <div className='work' id='fresh-aire'>
            <div className='work-wrapper'>
              <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773170/freshaire_bgia4e.png' />
              <div className='info'>
                <h4>Full Stack Engineer</h4>
                <p className='subtitle'><span>Jan 2017</span> - <span>Present</span></p>
              </div>
              <a href='//www.freshaireny.com' target='_blank'>
                <Button className='website-button' icon='world' content='www' />
              </a>
              <div className='description'>
                <p>Built a website for father's company.</p>
                <p>Serves as a flyer for clients looking for HVAC services.</p>
                <StandardModal
                  name='FRESH AIRE MECHANICAL CO.'
                  descriptions={descriptions}
                  headerPhotos={headerPhotos}
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
  `www.freshaireny.com`,
  `Built a website for my father's company. Focused on responsive design as well as cross-browser
    compatibility. For Internet Explorer, only versions 10 and 11 are supported.`
];

let headerPhotos = [
  'https://i.gyazo.com/9b62dd9ca6d2157cda8cb06f30be5ee3.jpg',
  'https://i.gyazo.com/1de945a829f49cae4c327619b5e901b2.jpg',
  'https://i.gyazo.com/3db11bd114affdb9c5ca21556b97ecc5.png',
  'https://i.gyazo.com/a57d8baff018cf69e491b9a3d526f815.png',
  'https://i.gyazo.com/e139405f3769cf179a0b32a07a591805.png'
];

let challenges = [
  {
    header: `Bootstrap's Navbar`,
    body: [
      {
        text: `Bootstrap's navbar is broken down into two elements: the entire container, and the inside contents.
              How do you make the navbar's opacity change smoothly based on scroll position (the more you scroll down,
              the opacity increases), while still making it so that only the contents' opacity is fixed at a certain 
              percentage for mobile devices (The hamburger menu on mobile uses the inside contents, so it can't be completely
              transparent on mobile)? How do you correctly reset the opacity when you visit a different page? 
              How do you transition the text's color from white to black based on scroll position? If you login and log 
              back out, the login button is actually the wrong color since you have to iterate through each item and 
              change its color manually. I had to check different edge cases to make sure the navbar worked as intended.`
      }
    ]
  },
  {
    header: `Image Scaling and Content Centering in Internet Explorer and Edge`,
    body: [
      {
        text: `IE requires all images to have a specified height before trying to center content. This height allows 
              "margin: auto" to work on elements that have a parent element of "display: inline-block" or "display: flex". 
              Specifying a constant height can be a hindrance for responsive elements that change in height.`
      },
      {
        text: `IE (and Edge) also doesn't scale images correctly since "height: auto" doesn't work on images with a specified width.
              I had to make my own small polyfill that correctly scales the picture using the ratio of desired width to actual
              width of the picture, and apply that ratio to the height to get the desired height.`
      },
      {
        text: `Note: I use 'object-fit-images' polyfill + and the postcss plugin, 'postcss-object-fit-images', to scale images on 
              this website (jonathanrim.com) and will use these in the future.`,
        pictureType: 'multi',
        pictures: ['https://i.gyazo.com/f7b77f5d1f3cc996df8ff1dc012a181e.png',
                  'https://i.gyazo.com/5aa9c07a3984e2fd45848496cc9f7bd6.png', 
                  'https://i.gyazo.com/d6998eaa91cc6155df40dcbcc3a03da3.png']
      }
    ]
  }
]