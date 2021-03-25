import React from 'react';
import './item_menu.scss'
import {
    withRouter,
    Link
} from "react-router-dom";


const ItemMenu = ({ img, title }) => {

    return (
        <div className="item_menu" style={{ backgroundImage: `url(${img}) ` }}>
            <Link to={`shop/${title}`}>
                <div className="item_menu_box">
                    <p>{title}</p>
                    <p>Shop Now</p>
                </div>
            </Link>
        </div>
    )
}

export default withRouter(ItemMenu)