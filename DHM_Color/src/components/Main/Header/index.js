import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = props => {
    return (

        <div className="header">
            <div className="header-top">
                <div className="container">
                    <div className="search">
                        <input type="text" placeholder="Tìm kiếm sản phẩm ... " />
                        <button>
                            <img src="images/search.png" />
                        </button>
                    </div>
                    <div className="header-left">
                        <ul>
                            <li><a className="lock" href="#">Đăng nhập</a></li>
                            <li><a className="lock" href="#">Đăng ký</a></li>
                            <li>
                            </li>
                        </ul>
                        <div className="cart box_1">
                            <a href="#">
                                <h3> <div className="total">
                                    <span className="simpleCart_total" /> (<span id="simpleCart_quantity" className="simpleCart_quantity" /> items)</div>
                                    <img src="images/cart.png" alt="" /></h3>
                            </a>
                            <p><a href="#" className="simpleCart_empty">Giỏ hàng rỗng</a></p>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="container">
                <div className="head-top">
                    <div className="logo">
                        <Link to="/"><img src="images/logo1.png" alt="" /></Link>
                    </div>
                    <div className=" h_menu4">
                        <ul className="memenu skyblue">
                            <li className="active grid"><Link className="color8" to="/">TRANG CHỦ</Link></li>

                            <li><Link className="color4" to="/sanpham">SẢN PHẨM</Link></li>
                            <li><Link className="color1" to="/gioithieu">GIỚI THIỆU</Link></li>
                            <li><Link className="color6" to="/lienhe">LIÊN HỆ</Link></li>
                            <li><Link className="color6" to="/baiviet">BÀI VIẾT</Link></li>
                        </ul>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    )
}

Header.propTypes = {

}

export default Header
