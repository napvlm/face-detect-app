import React from 'react';

const FaceRecognition = ({ imageUrl }) => {
  return(
    <div className='center pa3'>
      <img src={imageUrl} alt='' />
    </div>
  );
}

export default FaceRecognition;