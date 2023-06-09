import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import data from '../../../assets/data';
import { setPicture } from '../../../configure/configure';
import { setSelectedImage } from '../../../configure/configure';

function RightTopBar({ handleSizeChange, getVariantByColor, setSelectedSize }) {
    const [table, setTable] = useState(data)
    const [selectedColor, setSelectedColor] = useState('');
    const dispatch = useDispatch();

    const star = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0HmahLflc6QVFR2q2URFte5EJjChKmGCNA&usqp=CAU';

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setSelectedSize('');
        dispatch(setPicture(color));

        table.productVariants.forEach((variant) => {
            if (color.toLowerCase() === 'siyah' && variant.images1 && variant.images1.length > 0) {
                const colorBlack = variant.images1[0]
                dispatch(setSelectedImage(colorBlack))
            }
            else if(color.toLowerCase() === 'lacivert' && variant.images2 && variant.images2.length > 0)
            {
                const colorBlue = variant.images2[0]
                dispatch(setSelectedImage(colorBlue))
            }
        });
    };


    const isSizeActive = (size) => {
        const variants = getVariantByColor(selectedColor);
        return variants.some(
            (variant) => variant.attributes.find((attribute) => attribute.name === 'Beden').value === size
        );
    };

    useEffect(() => {
        const defaultColor = 'Siyah';
        setSelectedColor(defaultColor);
        dispatch(setPicture(defaultColor));
    }, []);

    return (
        <div>
            <h3>{data.productTitle}</h3>
            <div className='container__icons'>
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <p>30 Yorum</p>
            </div>
            <div className='container__rightBar-piece'>
                <h1>600 Tl - 800 Tl <span className='container__rightBar__span'>/Adet</span></h1>
                <span className='container__rightBar-piece__span'>100 adet ( Minimum sipariş adedi)</span>
            </div>
            <div className='rightbar__content'>
                <div className='rightbar__content__top-info'>
                    {data.selectableAttributes
                        .filter((attribute) => attribute.name === 'Renk')
                        .map((attribute) => (
                            <div key={attribute.name}>
                                <h4>{attribute.name}</h4>
                                <div className='rightbar__content__title'>
                                    {attribute.values.map((value) => (
                                        <p
                                            key={value}
                                            onClick={() => handleColorChange(value)}
                                            className={selectedColor === value ? 'active' : ''}
                                        >
                                            {value}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                </div>
            </div>
            <div className='rightbar__alt__content'>
                <h4>Beden</h4>
                <div className='rightbar__content-altinformation'>
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
    )
}

export default RightTopBar
