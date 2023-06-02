import React from 'react'

function RightAltBar({list,activeBarem,handleChange,amountError}) {
    return (
        <div>
            <div className='container__barem' >
                <div className='container__barem__tittle'>
                    <h2>Toptan Fiyat</h2>
                    <p>(Adet)</p>
                </div>
                <div className='container__barem-bar' >
                    {list.baremList.map((barem, keyBarem) => (
                        <div className='barem' key={keyBarem}>
                            <p className={`barem__p ${activeBarem ? 'baremClassActive' : ''}`} >{barem.minimumQuantity}</p>
                            <p className='barem__p' >{barem.maximumQuantity}</p>
                        </div>
                    ))}
                </div>
                <div className='barem__amount__info' >
                    <p>Adet</p>
                    <input onChange={handleChange} placeholder="100" />
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
    )
}

export default RightAltBar
