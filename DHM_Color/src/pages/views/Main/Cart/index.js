import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../ActionCart'

export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)
    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cart])
    const reduction = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item => {
            if (item.id === id) {
                item.count += 1;
            }
        })
        setCart([...cart])
    }
    const removeProduct = id => {
        if (window.confirm("Bạn có muốn xóa sản phẩm")) {
            cart.forEach((item, index) => {
                if (item.id === id) {
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }

    if (cart.length === 0)
        return <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>
    return (
        <div>
            <div className="container">
                <div className="check">
                    <h1>Giỏ hàng </h1>
                    <p>Giá có thể thay đổi dựa trên giá có hiệu lực vào ngày thanh toán</p>
                    <hr />

                    <div className="col-md-9 cart-items" style={{ paddingTop: '20px' }}>
                        {cart.map(item => (
                            <div className="cart-header">
                                <div className="close1" onClick={() => removeProduct(item.id)}> </div>
                                <div className="cart-sec simpleCart_shelfItem">
                                    <div className="cart-item cyc">
                                        <img src={item.anh} className="img-responsive" alt="" />
                                    </div>
                                    <div className="cart-item-info">
                                        <h3><a href="#">Tên sản phẩm : {item.ten_sp}</a></h3>
                                        <h2>Giá : {item.gia_ban * item.count}</h2>
                                        <ul className="qty">
                                            <li><p>Size : </p></li>
                                            <li><p>Số lượng :
                                                <button className="count" onClick={() => reduction(item.id)}> - </button>
                                                <span>{item.count}</span>
                                                <button className="count" onClick={() => increase(item.id)}> + </button>
                                            </p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        ))}
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

