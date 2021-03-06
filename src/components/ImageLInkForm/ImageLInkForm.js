import React from 'react';

const ImageLinkForm = ({ onInputChange, onSubmit, onEnterKey }) => {
  return (
    <div>
      <p className='f3'>
        {'This App will detect faces in your pictures. Give it a try!'} <br/><br/> {'Paste the url of an image with the human face pictured'}
      </p>
      <div className='center'>
        <div className='center pa4 br-3 shadow-3'>
          <input type='text' className='f4 pa2 w-70 center' onChange={onInputChange} onKeyPress={onEnterKey} />
          <button type='submit'className='w-30 f4 link ph3 pv2 bg-yellow' onClick={onSubmit}>Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;