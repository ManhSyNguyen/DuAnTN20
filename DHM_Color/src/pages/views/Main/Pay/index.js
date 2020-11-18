import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../ActionCart';

const Pay = props => {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)
    const [qty, setQty] = useState(0)
    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.gia_ban * item.count)
            }, 0)
            setTotal(res)
        }
        const getQty = () => {
            const quantity = cart.reduce((prev, item) => {
                return prev + (item.count * 1)
            }, 0)
            setQty(quantity)
        }
        getTotal()
        getQty()
    }, [cart])
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
                            </form>
                        </div>
                    </div>

                    <div className="col-md-3 cart-total" style={{ paddingTop: '30px' }}>
                        <a className="continue" href="#">Tóm tắt đơn hàng</a>
                        <div className="price-details">
                            <h3>Tổng đơn hàng : {cart.length} đơn hàng</h3>
                            <h3>Tổng sản phẩm : {qty} sản phẩm</h3>
                            <h3>VAT : 10%</h3>
                            <span>Giá : </span>
                            <span className="total1">{total} vnđ</span>

                        </div>
                        <ul className="total_price">
                            <li className="last_price"> <h4>TOTAL :</h4></li>
                            <li className="last_price"><span>{total} vnđ</span></li>
                            <div className="clearfix"> </div>
                        </ul>
                        <div className="clearfix" />
                        <a className="order" href="#" >Đặt hàng </a>
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
