import React from 'react';
import { useSelector } from 'react-redux';

import './index.scss';

function LeftBar() {

  const selectedImage = useSelector((state) => state.componentControl.selectedImage)

  return (
    <div className='container-leftBar'>
      <div className='leftBar__images-container'>
        <img className='leftBar__images' src={selectedImage} />
      </div>
    </div>
  );
}

export default LeftBar;
