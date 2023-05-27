import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from '../../assets/data';
import { setSelectedImage } from '../../configure/configure';
import './index.scss';

function AltBar() {
  const [list, setList] = useState(data);
  const dispatch = useDispatch();
  const [selectPicture, setSelectPicture] = useState('');

  const resim = useSelector((state) => state.componentControl.resim);

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
        if (resim === '1' && variant.images1) {
          return variant.images1.map((image, idx) => (
            <img
              className={`calculate__images ${selectPicture === image ? 'selected' : ''}`}
              key={idx}
              src={image}
              alt="Product"
              onClick={() => handleImageClick(image)}
            />
          ));
        } else if (resim === '2' && variant.images2) {
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
        else if (resim === '3' && variant.images3) {
          return variant.images3.map((image, idx) => (
            <img
              className={`calculate__images ${selectPicture === image ? 'selected' : ''}`}
              key={idx}
              src={image}
              alt="Product"
              onClick={() => handleImageClick(image)}
            />
          ));
        }
        else if (resim === '4' && variant.images4) {
          return variant.images4.map((image, idx) => (
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
