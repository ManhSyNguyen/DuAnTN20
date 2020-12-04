import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../ActionCart';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)
    const [qty, setQty] = useState(0)

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
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
                item.count == item.so_luong ? item.count = item.so_luong : item.count += 1;
            }
        })
        setCart([...cart])
    }
    const removeProduct = id => {
        Swal.fire({
            title: 'Bạn có muốn thực hiện?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                cart.forEach((item, index) => {
                    if (item.id === id) {
                        cart.splice(index, 1)
                    }
                })
                setCart([...cart])
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div>
            <div className="container">
                <div className="check">
                    <h1>Giỏ hàng </h1>
                    <p>Giá có thể thay đổi dựa trên giá có hiệu lực vào ngày thanh toán</p>
                    <hr />

                    <div className="col-md-12 cart-items" style={{ paddingTop: '20px' }}>
                        {cart.map(item => (
                            <div className="cart-header">
                                <div className="close1" onClick={() => removeProduct(item.id)}> </div>
                                <div className="cart-sec simpleCart_shelfItem">
                                    <div className="cart-item cyc">
                                        <img src={item.image} className="img-responsive" alt="" />
                                    </div>
                                    <div className="cart-item-info">
                                        <p>Tên sản phẩm : {item.nameproduct}</p><br />
                                        <p>Giá : {item.price} vnđ</p>
                                        <ul className="qty">
                                            <li><p>Size : </p></li>
                                            <li>
                                                <div className="buttons_added">
                                                    <p>Số lượng :</p>&nbsp;
                                                    <input className="minus is-form" type="button" defaultValue="-" onClick={() => reduction(item.id)} />
                                                    <input aria-label="quantity" className="input-qty" type="number" placeholder={item.count} disabled />
                                                    <input className="plus is-form" type="button" defaultValue="+" onClick={() => increase(item.id)} />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="contact-form">
                        <div className="col-md-8 contact-grid">
                            <form>
                                <div className="form-group">
                                    <label className='lb'>Họ và tên</label>
                                    <input type="text" className="form-control"
                                        id="name" name="name" />
                                </div>
                                <div className="form-group">
                                    <label className='lb'>Số điện thoại</label>
                                    <input type="text" lassName="form-control"
                                        id="sdt" name="sdt" />
                                </div>
                                <div className="form-group">
                                    <label className='lb'>Địa chỉ</label>
                                    <input type="text" lassName="form-control"
                                        id="address" name="address" />
                                </div>
                                <div className="form-group">
                                    <label className='lb'>Ghi chú</label>
                                    <textarea cols={77} rows={6} lassName="form-control"
                                        id="note" name="note" />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-md-3 cart-total" style={{ paddingTop: '29px', left: '50px' }}>
                        <a className="continue" href="#">Tóm tắt đơn hàng</a>
                        <div className="price-details">
                            <h3>Tổng đơn hàng : {cart.length} đơn hàng</h3>
                            <h3>Tổng sản phẩm : {qty} sản phẩm</h3>
                            <span>Giá : </span>
                            <span className="total1">{total} vnđ</span>

                        </div>
                        <ul className="total_price">
                            <li className="last_price"> <h4>TOTAL :</h4></li>
                            <li className="last_price"><span>{total} vnđ</span></li>
                            <div className="clearfix"> </div>
                        </ul>
                        <div className="clearfix" />
                        <Link className="order" to="#" >Đặt hàng </Link>
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

