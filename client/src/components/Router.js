import React from 'react';
import { Route }from "react-router-dom";
import HomePage from './HomePage.js';
import ProductPage from './ProductPage.js';
import ShopingCart from './ShopingCart.js';
import Blog from './Blog.js';
import About from './About.js';
import Contact from './Contact.js';
import ProductDetail from './ProductDetail.js';

function Router () {
    return (
        <div>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/Products">
                <ProductPage />
            </Route>
            <Route exact path="/Product-detail/:id">
                <ProductDetail />
            </Route>
            <Route exact path="/Shoping-Cart">
                <ShopingCart />
            </Route>
            <Route exact path="/Blog">
                <Blog />
            </Route>
            <Route exact path="/About">
                <About />
            </Route>
            <Route exact path="/Contact">
                <Contact />
            </Route>
        </div>
    );
}

export default Router;