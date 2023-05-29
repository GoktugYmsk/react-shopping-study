import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../../assets/data';
import { setSelectedImage } from '../../configure/configure';
import './index.scss';

function AltBar() {
  const [list, setList] = useState(data);
  const dispatch = useDispatch();
  const [selectPicture, setSelectPicture] = useState('');

  const picture = useSelector((state) => state.componentControl.picture);

  useEffect(() => {
    if (list.productVariants.length > 0 && list.productVariants[0].images1) {
      const firstImage = list.productVariants[0].images1[0];
      dispatch(setSelectedImage(firstImage));
      setSelectPicture(firstImage);
    }
  }, [list.productVariants, dispatch]);

  const handleImageClick = (image) => {
    dispatch(setSelectedImage(image));
    setSelectPicture(image);
  };

  return (
    <div className='container-calculateBar'>
      {list.productVariants.map((variant, index) => {
        if (picture === 'Siyah' && variant.images1) {
          return variant.images1.map((image, idx) => (
            <img
              className={`calculate__images ${selectPicture === image ? 'selected' : ''}`}
              key={idx}
              src={image}
              alt="Product"
              onClick={() => handleImageClick(image)}
            />
          ));
        }
        else if (picture === 'Lacivert' && variant.images2) {
          return variant.images2.map((image, idx) => (
            <img
              className={`calculate__images ${selectPicture === image ? 'selected' : ''}`}
              key={idx}
              src={image}
              alt="Product"
              onClick={() => handleImageClick(image)}
            />
          ));
        }
        return null;
      })}
    </div>
  );
}

export default AltBar;
