import React, { useState } from 'react';
import { HiOutlineTruck } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import data from '../../assets/data';
import { setPicture } from '../../configure/configure';
import './index.scss';

const RightBar = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');
    const star = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0HmahLflc6QVFR2q2URFte5EJjChKmGCNA&usqp=CAU'
    const [amountError, setAmounError] = useState(false)
    const [list, setList] = useState(data);
    const [active, setActive] = useState(true)

    const dispatch = useDispatch()

    const handleColorChange = (color) => {
        setSelectedColor(color);
        setSelectedSize('');
        setActive(false)
        dispatch(setPicture(color))
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

    const isSizeActive = (size) => {
        const variants = getVariantByColor(selectedColor);
        return variants.some(
            (variant) => variant.attributes.find((attribute) => attribute.name === 'Beden').value === size
        );
    };

    const handleChange = (e) => {
        if (e > 500) {
            setAmounError(true)
        }
        else {
            setAmounError(false)
        }
    }

    return (
        <div className="container-RightBar">
            <h3>{data.productTitle}</h3>
            <div className='container__icons'>
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <img src={star} alt="Star" />
                <p>30 Yorum</p>
            </div>
            <div className='container__rightBar-piece' >
                <h1>600 Tl - 800 Tl <span className='container__rightBar__span' >/adet</span></h1>
                <span className='container__rightBar-piece__span' >100 adet ( Minimum sipariş adedi)</span>
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
                <div className='rightbar__alt__content'>
                    <h4>Beden</h4>
                    {active && (
                        <div className='active__class'>
                            <p>S</p>
                            <p>M</p>
                            <p>L</p>
                        </div>
                    )}
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

            <div className='container__barem' >
                <div className='container__barem__tittle'>
                    <h2>Toptan Fiyat</h2>
                    <p>(Adet)</p>
                </div>
                <div className='container__barem-bar' >
                    {list.baremList.map((barem, keyBarem) => (
                        <div className='barem' key={keyBarem}>
                            <p className='barem__p' >{barem.minimumQuantity}</p>
                            <p className='barem__p' >{barem.maximumQuantity}</p>
                        </div>
                    ))}
                </div>
                <div className='barem__amount__info' >
                    <p>Adet</p>
                    <input onChange={e => handleChange(e.target.value)} />
                    <p className='barem__amount__piece' >Adet</p>
                    <p className={`barem__amount-p ${amountError ? 'errorColor' : ''}`} >Stok Adeti: 500</p>
                </div>
            </div>
            <div className='barem__altInfo' >
                <h3>Toplam:</h3>
                <div className='barem__altInfo__content' >
                    <p className='barem__first-chlid'><strong>3000 Tl</strong></p>
                    <p className='barem__second-child' >Kargo Ücreti :</p>
                    <p className='barem__second-third' ><span>Alıcı Öder</span></p>
                    <p className='barem__price__option' ><span>Ödeme Seçenekleri</span></p>
                </div>
                <button className='barem__button' >SEPETE EKLE</button>
            </div>
      
        </div>
    );
};

export default RightBar;
