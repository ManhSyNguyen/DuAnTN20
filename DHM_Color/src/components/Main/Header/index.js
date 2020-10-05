import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { DataContext } from '../../../pages/views/Main/CartControl';

const Header = props => {
    const value = useContext(DataContext)
    const [carts] = value.carts

    const [KeyWord, setKeyWord] = useState('');
    const handleChangeKeyWord = (e) => {
        const { value } = e.target;
        setKeyWord(value)

    }

    return (
        <div className="header">
            <div className="header-top">
                <div className="container">
                    <div className="search">
                        <form onKeyPress={handleChangeKeyWord} >
                            <input type="text" onChange={handleChangeKeyWord} placeholder="Tìm kiếm sản phẩm ... " />
                            <Link to={`/search/${KeyWord}`} className="button"><img src="images/search.png" /></Link>
                        </form>

                    </div>
                    <div className="header-left">
                        <ul>
                            <li><a className="lock" href="#">Đăng nhập</a></li>
                            <li><a className="lock" href="#">Đăng ký</a></li>
                            <li>
                            </li>
                        </ul>
                        <div className="cart box_1">
                            <Link to="/giohang">
                                <h3> <div className="total">
                                    <span className="simpleCart_total" /> (<span id="simpleCart_quantity" className="simpleCart_quantity" /> {carts.length})</div>
                                    <img src="images/cart.png" alt="" /></h3>
                            </Link>
                            {/* <p><a href="#" className="simpleCart_empty">Giỏ hàng rỗng</a></p> */}
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
