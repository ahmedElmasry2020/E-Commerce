import React from 'react';
import './item_menu.scss'
const ItemMenu = ({ img, title }) => {

    return (
        <div className="item_menu" style={{backgroundImage:`url(${img}) `}}>

            <div className="item_menu_box">
                <p>{title}</p>
                <p>Shop Now</p>
            </div>

        </div>
    )
}
export default ItemMenu