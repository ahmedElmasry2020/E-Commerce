import React, { useState } from 'react'
import ItemMenu from '../item_menu.components/item_menu'
import "./item_menu_wrapper.scss"
const MenuItemWrapper = () => {

    const items = [
        {
            id: 1,
            description: 'hats',
            imgUrl: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        },
        {
            id: 2,
            description: 'jackets',
            imgUrl: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=752&q=80'
        },
        {
            id: 3,
            description: 'sneakers',
            imgUrl: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
        },
        {
            id: 4,
            description: 'children',
            imgUrl: 'https://images.unsplash.com/photo-1445796886651-d31a2c15f3c9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        },
        {
            id: 5,
            description: 'mens',
            imgUrl: 'https://images.unsplash.com/photo-1512768657367-9ed8e38f2313?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
        }
    ]

    return (
        <div className="menu_item_wrapper">
            {
                items.map(({ id, description, imgUrl }) => {
                    return <  ItemMenu key={id} img={imgUrl} title={description} />
                })
            }
        </div>

    )
}

export default MenuItemWrapper