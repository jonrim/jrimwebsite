import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import { Image } from 'semantic-ui-react';

export default (props) => {
  const { pictures, lightboxHandler, onMoveNextRequest, onMovePrevRequest,
          lightboxIsOpen, photoIndex } = props;
  return (
    <span>
      {
        pictures.map((picture, index) => (
          <button
            key={index}
            type="button"
            onClick={e => {lightboxHandler(true, index); console.log(photoIndex, index) }}
          >
            <Image src={picture} size='small' />
          </button>
        ))
      }
      {
        lightboxIsOpen &&
        <Lightbox
          mainSrc={pictures[photoIndex]}
          nextSrc={pictures[(photoIndex + 1) % pictures.length]}
          prevSrc={pictures[(photoIndex + pictures.length - 1) % pictures.length]}
          onCloseRequest={e => lightboxHandler(false, 0) }
          onMovePrevRequest={e => onMovePrevRequest(pictures, photoIndex)}
          onMoveNextRequest={e => onMoveNextRequest(pictures, photoIndex)}
        />
      }
    </span>
  );
}