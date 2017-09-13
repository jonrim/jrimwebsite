import React, { Component } from 'react';
import { Button, Grid } from 'semantic-ui-react';
import StandardModal from 'lib/components/Modal';

import './index.scss';

export default class WorkWork extends Component {
  render() {
    return (
      <Grid.Column className='grid-col' id='col-4'>
        <div className='col-wrapper'>
          <div className='work' id='workwork'>
            <div className='work-wrapper'>
              <div className='info'>
                <h2>WORKWORK.JS</h2>
                <p className="subtitle">JAVASCRIPT LIBRARY THAT CAN RUN COMPUTATION-HEAVY TASKS CONCURRENTLY IN THE BROWSER</p>
              </div>
              <a href='https://workworkjs.github.io/workworkjs/index.html' target='_blank'>
                <Button className='website-button' icon='world' content='www' />
              </a>
              <div className='description'>
                <p>Assists the native Array.prototype methods by running tasks simultaneously using HTML5 Web Workers.</p>
                <StandardModal
                  name='WORKWORK.JS'
                  descriptions={descriptions}
                  headerPhotos={headerPhotos}
                  introduction={introduction}
                  challenges={challenges}
                />
              </div>
              <img src='https://res.cloudinary.com/fresh-aire-mechanical-co/image/upload/v1504773170/html5_nepitm.png' />
            </div>
          </div>
        </div>
      </Grid.Column>
    )
  }
}

let descriptions = [
  `https://workworkjs.github.io/workworkjs`,
  `https://github.com/workworkjs/workworkjs`,
  `A Javascript library that can run computation-heavy tasks simultaneously in a browser.`,
  `Uses HTML5 Web Workers, Regular Expressions, and sample algorithms.`,
  `Faster and simpler than a previously existing library (Parallel.js)!`
];

let headerPhotos = [
  'https://i.gyazo.com/33ee2642d0bee717621495391b3271b9.png',
  'https://i.gyazo.com/5c438a1d04bbc0956c521015cd0cc7a2.png'
];

let introduction = [
  {
    header: `Multithreading in Javascript?`,
    body: [
      {
        text: `Multithreading is the spawning of multiple threads/processes and
              execution of code that can run concurrently (simultaneously).`
      },
      {
        text: `What does multithreading in Javascript look like? This question is what led to
              this project. As displayed in the screenshot, a quick google search reveals the 
              first result's description, which states that Javascript doesn't really have
              multithreading capabilities. The very next result shows HTML5 Web Workers, which
              I explored and used for this project.`,
        pictureType: 'right',
        picture: 'https://i.gyazo.com/9c20069fc4df16406089d53468420805.png'
      }
    ]
  },
  {
    header: `How does it work?`,
    body: [
      {
        text: `HTML5 Web Workers use a main parent thread that can spawn "threads" or workers.
              Each worker can receive information from the parent, complete a task, then send
              the results back to the parent.`
      },
      {
        text: `With the help of some ridiculous regular expressions that contain double escaped
              characters, we can make the parent send algorithms to the children, let the children
              parse the data using regular expressions, run the parsed algorithm, and then send
              the results back to the parent.`,
        pictureType: 'right',
        picture: 'https://i.gyazo.com/5b7eecf21af0787def383a5647da4704.png'
      },
      {
        text: `After setting up the web workers, we can now create our own Array.prototype methods
              that behave similarly to Javascript's native Array methods, except now every input
              in the array can be inputted into an algorithm at the same time.`,
        pictureType: 'left',
        picture: 'https://i.gyazo.com/10eb412807138e60386b16a54c7b5ad5.png'
      }
    ]
  },
  {
    header: `How do you use it?`,
    body: [
      {
        text: `WorkWork's array methods are used exactly the same as Javascript's native methods,
              except that since they run algorithms asynchronously, we need to include a promise
              right after the method call to get the results.`,
        pictureType: 'right',
        picture: 'https://i.gyazo.com/5c438a1d04bbc0956c521015cd0cc7a2.png'
      },
      {
        text: `To see a demonstration, click on the link at the very top of this modal. Click on one of the
              tabs at the top, then click on 'Reset' to create an array of random high numbers. Click on 
              'Native Start' to run Javascript's normal Array.prototype methods. This will make the browser
              freeze for around 10-15 seconds, since the load is really taxing. You can then click on
              'WorkWork Start' to run the same input array using our methods. You can easily see that this
              doesn't freeze the GIF on the left, and that the time spent is much shorter. For the skeptics,
              clicking on 'Soft Reset' (after running a method and getting the output) will return the array
              back to the original input.`
      }
    ]
  }
];

let challenges = [
  {
    header: `Double escaping characters`,
    body: [
      {
        text: `You probably noticed that really long regular expression right after 'obj.fn.match'
              on line 5. The backslashes look like they make up more than half of that expression. Regular
              expressions use backslashes to denote a token. e.g. '\\s' denotes a whitespace instead of
              the regular 's' letter. But what happens when the regular expression (which is a string),
              is inside another string (the data that was sent to the worker)? We now need to use double
              escaped characters, since the escaped characters need to be escaped again, otherwise the
              regular expression will think that a '\\s' is actually just an 's'.`,
        pictureType: 'right',
        picture: 'https://i.gyazo.com/5b7eecf21af0787def383a5647da4704.png'
      }
    ]
  }
]