import React from "react";
import axios from "axios";

import Slider from "./layout/Slider";
import Banner from "./layout/Banner";
import Products from "./Products";
class HomePage extends React.Component {
    state = {
        isShowModall: false
        // products: [],
        // cates: []
    }

    // componentDidMount() {
    //     let srcProduct = "http://localhost:9000/products";
    //     let srcCategory = "http://localhost:9000/cates";

    //     // giới hạn số sản phẩm trả về
    //     const config = {
    //         params: {
    //             _limit: 16
    //         }
    //     };
    //     // tạo GET request để lấy danh sách sản phẩm
    //     // axios
    //     //     .get("http://localhost:9000/products", config)
    //     //     .then(response => this.setState({ products: response.data }));

    //     const getProduct = axios.get(srcProduct);
    //     const getCategory = axios.get(srcCategory);

    //     axios.all([getProduct, getCategory]).then(axios.spread((...responses) => {
    //         const resProduct = responses[0]
    //         const resCategory = responses[1]
    //         // use/access the results
    //         // console.log(resProduct.data);
    //         // console.log(resCategory.data);
    //         this.setState({ products: resProduct.data});
    //         this.setState({ cates: resCategory.data});
    //     })).catch(errors => {
    //         // react on errors.
    //         console.log(errors);
    //     })
    // }
    render() {
        return (
            <div>
                <Slider />
                <Banner />
                <Products />
            </div>
        );
    }
}
export default HomePage;