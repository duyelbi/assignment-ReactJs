import React, { Component } from 'react';

class CategoryItem extends React.Component {
    render() {
        const { name } = this.props.cate;
        const src = `.${name}`;
        return (
            <button className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" data-filter={src} >
                {name}
            </button>
        );
    }
}

export default CategoryItem;