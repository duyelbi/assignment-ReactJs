import React from "react";
import axios from "axios";

import Modall from "./layout/Modall";
import Products from "./Products";
class ProductPage extends React.Component {
    render() {
        return (
            <div>
                {/* Title page */}
                <section className="bg-img1 txt-center p-lr-15 p-tb-92" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                    <h2 className="ltext-105 cl0 txt-center">
                        Product Page
    </h2>
                </section>
                <Products />
                <Modall />
            </div>
        );
    }
}
export default ProductPage;