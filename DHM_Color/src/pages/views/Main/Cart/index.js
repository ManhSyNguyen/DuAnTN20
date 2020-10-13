import React from 'react'


const Cart = props => {
    return (
        <div>
            <div className="container">
                <div className="check">
                    <h1>Giỏ hàng </h1>
                    <p>Giá có thể thay đổi dựa trên giá có hiệu lực vào ngày thanh toán</p>
                    <hr />
                    <div className="col-md-9 cart-items" style={{ paddingTop: '20px' }}>
                        <div className="cart-header">
                            <div className="close1"> </div>
                            <div className="cart-sec simpleCart_shelfItem">
                                <div className="cart-item cyc">
                                    <img src="images/San_pham/1.png" className="img-responsive" alt="" />
                                </div>
                                <div className="cart-item-info">
                                    <h3><a href="#">Tên sản phẩm</a></h3>
                                    <ul className="qty">
                                        <li><p>Size : </p></li>
                                        <li><p>Số lượng : </p></li>
                                    </ul>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                        <div className="cart-header2">
                            <div className="close2"> </div>
                            <div className="cart-sec simpleCart_shelfItem">
                                <div className="cart-item cyc">
                                    <img src="images/San_pham/2.png" className="img-responsive" alt="" />
                                </div>
                                <div className="cart-item-info">
                                    <h3><a href="#">Tên sản phẩm</a></h3>
                                    <ul className="qty">
                                        <li><p>Size : </p></li>
                                        <li><p>Số lượng : </p></li>
                                    </ul>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 cart-total" style={{ paddingTop: '20px' }}>
                        <a className="continue" href="#">Tóm tắt đơn hàng</a>
                        <div className="price-details">
                            <h3>Tổng đơn hàng</h3>
                            <span>Giá : </span>
                            <span className="total1">6200.00</span>
                        </div>
                        <ul className="total_price">
                            <li className="last_price"> <h4>TOTAL</h4></li>
                            <li className="last_price"><span>6200.00</span></li>
                            <div className="clearfix"> </div>
                        </ul>
                        <div className="clearfix" />
                        <a className="order" href="#">Đặt hàng </a>
                        <div className="total-item">
                            <h3>Thanh toán an toàn : </h3>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>

        </div>
    )
}

Cart.propTypes = {

}

export default Cart
