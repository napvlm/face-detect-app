import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This App will detect faces in your pictures. Give it a try!'}
      </p>
      <div className='center'>
        <div className='center pa4 br-3 shadow-3'>
          <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} />
          <button type='submit'className='w-30 f4 link ph3 pv2 bg-yellow' onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;