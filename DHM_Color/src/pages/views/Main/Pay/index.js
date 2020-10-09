import React from 'react'
import PropTypes from 'prop-types'

const Pay = props => {
    return (
        <div>
            <div className="container">
                <div className="check">
                    <h1>Thông tin giỏ hàng </h1>
                    <hr />
                    <div className="form">
                        <div className="col-md-8 contact-grid">
                            <form>
                                <label className='lb'>Họ và tên</label>
                                <input type="text" />
                                <label className='lb'>Số điện thoại</label>
                                <input type="text" />
                                <label className='lb'>Địa chỉ</label>
                                <input type="text" />
                                <label className='lb'>Ghi chú</label>
                                <textarea cols={77} rows={6} />
                                <button className="btn btn-secondary">Gửi</button>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-3 cart-total" style={{ paddingTop: '27px', marginLeft: '45px' }}>
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

Pay.propTypes = {

}

export default Pay
