import React from "react";
// import axios from "axios";

import Cart from "./layout/Cart";
import Slider from "./layout/Slider";
import BackToTop from "./layout/BackToTop";
import  Modall from "./layout/Modall";
class ShopingCart
 extends React.Component {
    render() {
        return (
            <div>
                <Cart />
                <Slider />
                <h1>ShopingCart
                </h1>
                <BackToTop />
                <Modall />
            </div>
        );
    }
}
export default ShopingCart
;