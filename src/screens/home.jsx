import React from 'react';
import ItemMenuWrapper from '../components/item_menu_wrapper.components/item_menu_wrapper'
import './home.scss'
const Home = () => {
    return (

        <div className="home_container" style={{padding:'3rem'}}>
            {/* <div className="home_container_row1" >
                <ItemMenu img="https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" title="Hats" />

            </div> */}
            <ItemMenuWrapper />
        </div>
    )
}

export default Home


