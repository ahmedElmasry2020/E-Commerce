import React from 'react'
import Hats from '../../screens/categories/hats/hats'
import Children from '../../screens/categories/children/children'
import Jackets from '../../screens/categories/jackets/jackets'
import Mens from '../../screens/categories/mens/mens'
import Snenakers from '../../screens/categories/sneakers/sneakers'

import Home from '../../screens/home/home'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";


const Nav = () => {
    return (
        <Router>
            <Switch>
                <Route path="/shop/hats">
                    <Hats />
                </Route>
                <Route path="/shop/jackets">
                    <Jackets />
                </Route>
                <Route path="/shop/children">
                    <Children />
                </Route>
                <Route path="/shop/sneakers">
                    <Snenakers />
                </Route>
                <Route path="/shop/mens">
                    <Mens />
                </Route>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </Router >
    )
}
export default Nav