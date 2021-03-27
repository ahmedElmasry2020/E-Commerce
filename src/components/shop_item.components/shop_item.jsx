import React, { useState } from 'react'

import './shop_item.scss'

const ShopItem = ({ imgUrl, description, price }) => {
    const [displayAddCart, setDisplayAddCart] = useState(false)

    return (

        <div className="shop_item_container" onMouseEnter={() =>setDisplayAddCart(true)} onMouseLeave={()=>setDisplayAddCart(false)}>
            <img className="shop_item_container__img" src={imgUrl} alt={description} />
            <div className="shop_item_container_overlay" style={displayAddCart ? { display: 'block' } : { display: 'none' }}>

                <div className="shop_item_container__addtocart">
                    <button className="shop_item_container__addtocart--button">Add To Cart </button>
                </div>
            </div>
            <div className="shop_item_container__desc">
                <span className="shop_item_container__desc--desc">{description?.toUpperCase()}</span>
                <span className="shop_item_container__desc--price">${price}</span>
            </div>
        </div>
    )


}

export default ShopItem