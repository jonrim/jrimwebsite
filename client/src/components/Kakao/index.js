import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import StandardModal from 'lib/components/Modal';

import './index.scss';

export default class Kakao extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-kakao'>
        <div className='col-wrapper'>
          <div className='work' id='kakao'>
            <div className='work-wrapper'>
              <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1541415680/KakaoTalk_logo_Kakao_Talk_rtqtbc.png' />
              <div className='info'>
                <h2>KAKAOTALK</h2>
                <p className='subtitle'>A SIMPLE REMAKE OF A POPULAR MESSAGING APP</p>
              </div>
              <a href='//kakao-ksj-jr.herokuapp.com' target='_blank'>
                <Button className='website-button' icon='world' content='www' />
              </a>
              <div className='description'>
                <p>Remade a simple version of KakaoTalk from scratch.</p>
                <p>Utilizes React, Redux, Socket.js, Node.js.</p>
                <StandardModal
                  name='KAKAOTALK REMAKE'
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
  `kakao-ksj-jr.herokuapp.com`,
  `Remade a simpler version of a popular messaging app to get my feet back into React v16, React Router v4, Redux, Node, and Socket.`
];

let headerPhotos = [
  'https://i.gyazo.com/1311bbb4a7a26b53a39b0527b1b48d76.png',
  'https://i.gyazo.com/512234eddd9a8008cc17b7c957fa3e0c.png',
  'https://i.gyazo.com/c790071f1c2fa5b1191647bfdecb8ced.png',
  'https://i.gyazo.com/89a1440916ba48fbd73816ca047aaec8.jpg',
  'https://i.gyazo.com/bff36225312b0bc33e917b95279553dd.jpg'
];

let challenges = [
  {
    header: `Upgrading React and React Router`,
    body: [
      {
        text: `Having just gotten back into web development after a year, I had to upgrade a lot of packages. Some packages were now
               completely deprecated and not compatible with the latest version of React. React Router v4 was also unique because of
               its new dynamic routing (which lets the app render as it creates the routes rather than after). I also had to upgrade
               to webpack v4.`
      }
    ]
  },
  {
    header: `Text Message Formatting to Mimick the Actual KakaoTalk`,
    body: [
      {
        text: `Formatting the text messages proved to be challenging since I needed to see if a message that is sent is now:
               1. the first message of the day, 2. the first message of the minute (because the friend will see my photo for only the
               first message of the minute, and 3. if it's the last message of the minute, which removes the timestamp from all of the
               previous messages on the same minute.`
      },
      {
        text: `I also had to brush up on basic CSS skills such as using flex to position the timestamp and the unread message '1' stamp
               properly (for my own messages since the timestamp needs to be at the bottom left of a message that is floated to the right).`
      },
      {
        text: `Counting the total number of unread messages was also interesting. I need this number to be displayed at the top in the navbar`
      }
    ]
  },
  {
    header: `First Time Using Socket.js`,
    body: [
      {
        text: `It was my first time using socket.js, and it proved to be a bit challenging simply because there isn't a clear cut tutorial on
               how to set everything up properly with React. I've been given advice from a friend to setup and declare a socket in a separate file
               that should then be exported. However, for now, I've settled on adding it to state upon mount of the app and passing it in as props to
               subcomponents that require socket. I've also seen socket simply be declared in the constructor right on 'this'.`
      }
    ]
  },
]