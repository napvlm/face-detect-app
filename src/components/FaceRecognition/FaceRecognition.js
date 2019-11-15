import React from 'react';
import './FaceRecognition.scss';

const FaceRecognition = ({ imageUrl, box }) => {
  return(
    <div className='center pa3 ma'>
      <div className='absolute'>
        <img id='inputImage' src={imageUrl} width='500' height='auto' alt='' />
        <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
      </div>
    </div>
  );
}

export default FaceRecognition;