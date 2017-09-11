import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Image } from 'semantic-ui-react';

import './index.scss';

export default (props) => {
  const { pictures, lightboxHandler, onMoveNextRequest, onMovePrevRequest,
          lightboxIsOpen, photoIndex, name } = props;
  return (
    <div className='lightbox-photo'>
      {
        pictures.map((picture, index) => (
          <button
            key={index}
            type="button"
            onClick={e => lightboxHandler(true, name, index)}
          >
            <Image src={picture} size='small' />
          </button>
        ))
      }
      {
        lightboxIsOpen[name] &&
        <Lightbox
          mainSrc={pictures[photoIndex]}
          nextSrc={pictures[(photoIndex + 1) % pictures.length]}
          prevSrc={pictures[(photoIndex + pictures.length - 1) % pictures.length]}
          onCloseRequest={e => lightboxHandler(false, name, 0) }
          onMovePrevRequest={e => onMovePrevRequest(pictures, photoIndex)}
          onMoveNextRequest={e => onMoveNextRequest(pictures, photoIndex)}
        />
      }
    </div>
  );
}