import React, { useState } from 'react';
import data from '../../assets/data';

import './index.scss';

const RightBar = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedSize('');
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const getVariantByColor = (color) => {
    return data.productVariants.filter((variant) =>
      variant.attributes.some(
        (attribute) => attribute.name === 'Renk' && attribute.value === color
      )
    );
  };

  const getAvailableSizes = (color) => {
    const variants = getVariantByColor(color);
    const availableSizes = variants.map((variant) =>
      variant.attributes.find((attribute) => attribute.name === 'Beden').value
    );
    return availableSizes;
  };

  const isSizeActive = (size) => {
    const variants = getVariantByColor(selectedColor);
    return variants.some(
      (variant) => variant.attributes.find((attribute) => attribute.name === 'Beden').value === size
    );
  };

  return (
    <div className="container-RightBar">
      <h3>{data.productTitle}</h3>
      <div>
        {data.selectableAttributes
          .filter((attribute) => attribute.name === 'Renk')
          .map((attribute) => (
            <div key={attribute.name}>
              <h4>{attribute.name}</h4>
              <div>
                {attribute.values.map((value) => (
                  <p
                    key={value}
                    onClick={() => handleColorChange(value)}
                    className={selectedColor === value ? 'active' : ''}
                    style={{
                      background: selectedColor === value ? 'blue' : 'transparent',
                      color: selectedColor === value ? 'white' : 'black',
                    }}
                  >
                    {value}
                  </p>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div>
        <h4>Beden</h4>
        <div>
          {selectedColor &&
            data.selectableAttributes
              .find((attribute) => attribute.name === 'Beden')
              .values.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeChange(size)}
                  className={isSizeActive(size) ? 'active' : 'inactive'}
                  disabled={!isSizeActive(size)}
                >
                  {size}
                </button>
              ))}
        </div>
      </div>
    </div>
  );
};

export default RightBar;
