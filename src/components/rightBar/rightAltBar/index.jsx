import React from 'react';
import { Row, Col } from 'react-bootstrap';


function RightAltBar({ list, activeBarem, handleChange, amountError }) {
    return (
        <div>
            <Row className='container__barem'>
                <Col lg={12} md={12} sm={12}>
                    <div className='container__barem__tittle'>
                        <h2>Toptan Fiyat</h2>
                        <p>(Adet)</p>
                    </div>
                </Col>
                <Col lg={12} md={12} sm={12}>
                    <div className='container__barem-bar'>
                        {list.baremList.map((barem, keyBarem) => (
                            <div className='barem' key={keyBarem}>
                                <p className={`barem__p ${activeBarem ? 'baremClassActive' : ''}`}>{barem.minimumQuantity}</p>
                                <p className='barem__p'>{barem.maximumQuantity}</p>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col lg={12} md={12} sm={12}>
                    <div className='barem__amount__info'>
                        <p>Adet</p>
                        <input onChange={handleChange} placeholder="100" />
                        <p className='barem__amount__piece'>Adet</p>
                        <p className={`barem__amount-p ${amountError ? 'errorColor' : ''}`}>Stok Adeti: 500</p>
                    </div>
                </Col>
            </Row>
            <Row className='barem__altInfo'>
                <Col lg={12} md={12} sm={12}>
                    <h3>Toplam:</h3>
                    <div className='barem__altInfo__content'>
                        <div className='barem__first-chlid'><strong>3000 Tl</strong></div>
                        <div className='barem__second-child'>Kargo Ücreti :</div>
                        <div className='barem__second-third'><span>Alıcı Öder</span></div>
                        <div className='barem__price__option'><span>Ödeme Seçenekleri</span></div>
                    </div>
                    <button className='barem__button'>SEPETE EKLE</button>
                </Col>
            </Row>
        </div>
    )
}

export default RightAltBar;
