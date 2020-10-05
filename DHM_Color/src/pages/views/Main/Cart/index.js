import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../CartControl'

const Cart = props => {
    const value = useContext(DataContext)
    const [carts, setCart] = value.carts;
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const res = carts.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [carts])

    const reduction = id => {
        carts.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...carts])
    }
    const increase = id => {
        carts.forEach(item => {
            if (item.id === id) {
                item.count += 1;
            }
        })
        setCart([...carts])
    }

    const removeProduct = id => {
        if (window.confirm("Bạn có muốn xóa sản phẩm")) {
            carts.forEach((item, index) => {
                if (item.id === id) {
                    carts.splice(index, 1)
                }
            })
            setCart([...carts])
        }
    }


    if (carts.length === 0)
        return

    return (
        <div>
            <div className="container">
                <div className="check">
                    <h1>My Shopping Bag ({carts.length})</h1>
                    <div className="col-md-9 cart-items">
                        <div className="cart-header">

                            {
                                carts.map(sp => (
                                    <div className="cart-sec simpleCart_shelfItem" key={sp.id}>
                                        <div className="close1" onClick={() => removeProduct(sp.id)}> </div>
                                        <div className="cart-item cyc">
                                            <img src={sp.anh} className="img-responsive" alt="" />
                                        </div>
                                        <div className="cart-sp-info">
                                            <h3><a href="#">{sp.ten_sp}</a></h3>
                                            <ul className="qty">
                                                <li><p>Size : </p></li>
                                                <li><p>Màu : 1</p></li>
                                            </ul>
                                            <div className="delivery">
                                                <p>Giá : {sp.gia_ban * sp.count}</p>
                                                {/* <span>Delivered in 2-3 bussiness days</span> */}
                                                <div className="clearfix" />
                                            </div>

                                            <div className="amount">
                                                <button className="count" onClick={() => reduction(sp.id)}> - </button>
                                                <span>{sp.count}</span>
                                                <button className="count" onClick={() => increase(sp.id)}> + </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }


                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="col-md-3 cart-total">
                        <h1>Tóm tắt đơn hàng</h1>
                        <div className="price-details">
                            <h3>Tổng đơn hàng</h3>
                            <span>Giá: </span>
                            <span className="total1">6200.00</span>
                            <div className="clearfix" />
                        </div>
                        <ul className="total_price">
                            <li className="last_price"> <h4>Tổng :</h4></li>
                            <li className="last_price"><span>6350.00</span></li>
                            <div className="clearfix"> </div>
                        </ul>
                        <div className="clearfix" />
                        <a className="order" href="#">Thanh Toán</a>
                        <div className="total-item">
                            <h3>Chúng tôi tiếp nhận</h3>
                            <a className="cpns" href="#">Apply Coupons</a>
                            <p><a href="#">Log In</a> to use accounts - linked coupons</p>
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
