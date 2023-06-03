import React, { useState } from 'react'

import { Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import data from '../../../assets/data';

import { setPicture } from '../../../configure/configure';

function RightTopBar({ handleSizeChange, getVariantByColor, setSelectedSize }) {
    const [selectedColor, setSelectedColor] = useState('');
    const dispatch = useDispatch()

    const star = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0HmahLflc6QVFR2q2URFte5EJjChKmGCNA&usqp=CAU'

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setSelectedSize('');
        dispatch(setPicture(color))
    };

    const isSizeActive = (size) => {
        const variants = getVariantByColor(selectedColor);
        return variants.some(
            (variant) => variant.attributes.find((attribute) => attribute.name === 'Beden').value === size
        );
    };

    return (
        <div>
            <h3>{data.productTitle}</h3>
            <Row className='container__icons'>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <img src={star} alt="Star" />
                    <p>30 Yorum</p>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className='container__rightBar-piece'>
                    <h1>600 Tl - 800 Tl <span className='container__rightBar__span' >/Adet</span></h1>
                    <span className='container__rightBar-piece__span' >100 adet ( Minimum sipariş adedi)</span>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className='rightbar__content'>
                    <div className='rightbar__content__top-info'>
                        {data.selectableAttributes
                            .filter((attribute) => attribute.name === 'Renk')
                            .map((attribute) => (
                                <div key={attribute.name}>
                                    <h4>{attribute.name}</h4>
                                    <div className='rightbar__content__title'>
                                        {attribute.values.map((value) => (
                                            <p key={value} onClick={() => handleColorChange(value)} className={selectedColor === value ? 'active' : ''}>
                                                {value}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className='rightbar__alt__content'>
                    <h4>Beden</h4>
                    <div className='rightbar__content-altinformation'>
                        {selectedColor &&
                            data.selectableAttributes
                                .find((attribute) => attribute.name === 'Beden')
                                .values.map((size) => (
                                    <button key={size} onClick={() => handleSizeChange(size)} className={isSizeActive(size) ? 'active' : 'inactive'} disabled={!isSizeActive(size)}>
                                        {size}
                                    </button>
                                ))}
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default RightTopBar
