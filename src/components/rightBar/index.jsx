import React, { useState } from 'react';

import data from '../../assets/data';

import RightAltBar from './rightAltBar';
import RightTopBar from './rightTopBar';
import './index.scss';

const RightBar = () => {
    const [selectedSize, setSelectedSize] = useState('');
    const [amountError, setAmounError] = useState(false)
    const [inputValue, setInputValue] = useState()
    const [activeBarem, setActiveBarem] = useState(false)

    const [list, setList] = useState(data);

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

    const handleChange = (e) => {
        setInputValue(e.target.value);

        const baremAmountMax = Math.max(...list.baremList.map((barem) => barem.maximumQuantity));
        const baremAmountMin = Math.min(...list.baremList.map((barem) => barem.minimumQuantity));

        if (e.target.value > 500) {
            setAmounError(true);
        }
        else if (baremAmountMin < e.target.value && e.target.value < baremAmountMax) {
            setActiveBarem(true);
        } else {
            setActiveBarem(false);
            setAmounError(false);
        }
    };

    return (
        <div className="container-RightBar">
            <RightTopBar handleSizeChange={handleSizeChange} getVariantByColor={getVariantByColor} list ={list}
                setSelectedSize={setSelectedSize} />
            <RightAltBar list={list} activeBarem={activeBarem} handleChange={handleChange} amountError={amountError} />
        </div >
    );
};

export default RightBar;
