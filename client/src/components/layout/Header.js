import React from "react";
import {
  NavLink
} from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header>
        {/* Header desktop */}
        <div className="container-menu-desktop">
          {/* Topbar */}
          <div className="top-bar">
            <div className="content-topbar flex-sb-m h-full container">
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  Help &amp; FAQs
                </a>

                <a href="/users/login" className="flex-c-m trans-04 p-lr-25">
                  Login
                </a>
                <a href="/users/register" className="flex-c-m trans-04 p-lr-25">
                  Register
                </a>

                <a href="/" className="flex-c-m trans-04 p-lr-25">
                  Log out
                </a>

                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  EN
                </a>
                <a href="#" className="flex-c-m trans-04 p-lr-25">
                  USD
                </a>
              </div>
            </div>
          </div>
          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              {/* Logo desktop */}
              <a href="/" className="logo">
                <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
              </a>
              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                    {/* <a href="/">Home</a> */}
                  </li>
                  <li>
                    <NavLink to="/products" activeClassName="active">Product</NavLink>
                    {/* <a href="http://localhost:3000/product">Shop</a> */}
                  </li>
                  <li className="label1" data-label1="hot">
                    <NavLink to="/shoping-cart" activeClassName="active">ShopingCart</NavLink>
                    {/* <a href="http://localhost:3000/shoping-cart">Features</a> */}
                  </li>
                  <li>
                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                    {/* <a href="http://localhost:3000/blog">Blog</a> */}
                  </li>

                  <li>
                    <NavLink to="/blog/new" activeClassName="active">BlogNew</NavLink>
                    {/* <a href="http://localhost:3000/blog/new">New Blog</a> */}
                  </li>

                  <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    {/* <a href="http://localhost:3000/about">About</a> */}
                  </li>
                  <li>
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                    {/* <a href="http://localhost:3000/contact">Contact</a> */}
                  </li>
                </ul>
              </div>
              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search" />
                </div>
                <div
                  className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                  data-notify={2}
                >
                  <i className="zmdi zmdi-shopping-cart" />
                </div>
                <a
                  href="#"
                  className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                  data-notify={0}
                >
                  <i className="zmdi zmdi-favorite-outline" />
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <a href="/">
              <img src="/images/icons/logo-01.png" alt="IMG-LOGO" />
            </a>
          </div>
          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search" />
            </div>
            <div
              className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
              data-notify={2}
            >
              <i className="zmdi zmdi-shopping-cart" />
            </div>
            <a
              href="#"
              className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
              data-notify={0}
            >
              <i className="zmdi zmdi-favorite-outline" />
            </a>
          </div>
          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile">
          <ul className="topbar-mobile">
            <li>
              <div className="left-top-bar">
                Free shipping for standard order over $100
              </div>
            </li>
            <li>
              <div className="right-top-bar flex-w h-full">
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  Help &amp; FAQs
                </a>

                <a href="/users/login" className="flex-c-m p-lr-10 trans-04">
                  Login
                </a>
                <a href="/users/register" className="flex-c-m p-lr-10 trans-04">
                  Register
                </a>

                <a href="/" className="flex-c-m trans-04 p-lr-25">
                  Log out
                </a>

                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  EN
                </a>
                <a href="#" className="flex-c-m p-lr-10 trans-04">
                  USD
                </a>
              </div>
            </li>
          </ul>
          <ul className="main-menu-m">
            <li>
              <NavLink to="/" activeClassName="active">Home</NavLink>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </li>
            <li>
              <NavLink to="/products" activeClassName="active">Product</NavLink>
            </li>
            <li>
              {/* <a
                href="http://localhost:3000/shoping-cart"
                className="label1 rs1"
                data-label1="hot"
              >
                Features
              </a> */}
              <NavLink to="/shoping-cart" activeClassName="active label1 rs1" data-label1="hot">ShopingCart</NavLink>
            </li>

            <li>
              <NavLink to="/blog" activeClassName="active">Blog</NavLink>
            </li>

            <li>
              <NavLink to="/blog/new" activeClassName="active">BlogNew</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
        </div>
        {/* Modal Search */}
        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="/images/icons/icon-close2.png" alt="CLOSE" />
            </button>
            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input
                className="plh3"
                type="text"
                name="search"
                placeholder="Search..."
              />
            </form>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
