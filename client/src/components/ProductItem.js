import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductItem extends React.Component {
    quickView = () => {
        // let img = item.img.substring(0, item.img.length - 1).split(',');
        // console.log(img);
        // this.setState({
        //     item: item,
        //     img: img,
        //     a: {
        //         visibility: 'visible',
        //         opacity: '1',
        //     }
        // });
        alert("quick View");
    }

    closeModal = () => {
        this.setState({
            a: {},
        });
    }
    render() {
        const { _id, name, image, price, cate } = this.props.product;
        // const { nameCate } = this.props.cate;
        const strCate = cate.join(' ').toString();
        // console.log(strCate);
        const srcCate = `col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${strCate}`;
        // console.log(srcCate);
        const src = `upload/${image}`;
        const srcImg = src.split(' ').join('');
        const srcImage = srcImg.substring(0, srcImg.length).split(",");
    //    const srcCate = `col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item ${nameCate}`;
    //    console.log(srcCate);
        return (
            <div className={srcCate}>
                {/* Block2 */}
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <img src= {srcImage[0]} alt="IMG-PRODUCT" width="auto" height="423" />
                        <button className={"block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1" + _id} onClick={() => this.quickView()}>
                            Quick View
        </button>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <Link to={"product-detail/" + _id} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                {name}
                            </Link>
                            <span className="stext-105 cl3">
                                ${price}
                            </span>
                        </div>
                        <div className="block2-txt-child2 flex-r p-t-3">
                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;