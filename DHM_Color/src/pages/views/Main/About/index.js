import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'

const About = ({ products, categorys }) => {

    //Phân trang
    const [Sotrang, setSotrang] = useState(0)

    const tongSp = products.length;
    console.log(222, products)

    const tinhTrang = Math.ceil(tongSp / 9);

    const mang = [];
    for (var i = 1; i <= tinhTrang; i++) {
        mang.push(i)
    }
    return (
        <div>
            <div className="product">
                <div className="container">
                    <div className="col-md-3 product-price">
                        <div className=" rsidebar span_1_of_left">
                            <div className="of-left">
                                <h3 className="cate">Danh mục</h3>
                            </div>
                            <ul className="menu">
                                <li className="item1">
                                    <Link className="link_cate" to={"/sanpham"}>Tất cả</Link>
                                    {categorys.map(({ id, ten_danhmuc, index }) => (
                                        <div className="size__list color__list" key={index}>
                                            <Link className="link_cate" to={"/cate/" + id}>{ten_danhmuc}</Link>

                                        </div>
                                    ))}

                                </li>

                            </ul>
                        </div>

                        {/**/}
                        <div className="product-middle">
                            <div className="fit-top">
                                <h6 className="shop-top">New products</h6>
                                <Link to="/" className="shop-now">SHOP NOW</Link>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className="sellers">
                            <div className="of-left-in">
                                <h3 className="tag">Tags</h3>
                            </div>
                            <div className="tags">
                                <ul>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">lorem</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">dress</a></li>
                                    <li><a href="#">design</a></li>
                                    <li><a href="#">fashion</a></li>
                                    <li><a href="#">lorem</a></li>
                                    <li><a href="#">dress</a></li>
                                    <div className="clearfix"> </div>
                                </ul>
                            </div>
                        </div>
                        {/**/}
                        <div className="product-bottom">
                            <div className="of-left-in">
                                <h3 className="best">Bán chạy</h3>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/nk1.jpg" alt="" /></a>
                                </div>
                                <div className=" fashion-grid1">
                                    <h2 className="best2"><a href="#">Nike Sportswear</a></h2>
                                    <span className=" price-in1"> 919.000 vnđ</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                            <div className="product-go">
                                <div className=" fashion-grid">
                                    <a href="single.html"><img className="img-responsive " src="images/nk2.jpg" alt="" /></a>
                                </div>
                                <div className="fashion-grid1">
                                    <h2 className="best2"><a href="#">LGiannis Nike Dri-FIT </a></h2>
                                    <span className=" price-in1"> 819.000 vnđ</span>
                                </div>
                                <div className="clearfix"> </div>
                            </div>
                        </div>
                        <div className=" per1">
                            <a href="#"><img className="img-responsive" src="images/gy1.jpg" alt="" />
                                <div className="six1">
                                    <h4>DISCOUNT</h4>
                                    <p>Up to</p>
                                    <span>60%</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/**/}
                    <div className="col-md-9 product1">
                        <div className=" bottom-product">
                            {products && products.map((item, index) => (
                                index < (((Sotrang + 1) * 9)) && index > ((Sotrang * 9) - 1) &&
                                <div className="col-md-4 bottom-cd simpleCart_shelfItem" key={index}>
                                    <div className="product-at ">
                                        <Link to={`/product/${item.id}`}><img className="img-responsive" src={item.anh} alt="" />
                                            <div className="pro-grid">
                                                <span className="buy-in">Buy Now</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <p className="tun">{item.ten_sp}</p>
                                    <p className="tun1">Size : S - M - L -XL</p>

                                    <Link to="/pay" className="item_add">
                                        <p className="number item_price"><i> </i>{item.gia_ban} vnđ</p>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/**/}
                <div className="page container">
                    <nav className="in">
                        <ul className="pagination">
                            {Sotrang > 0 &&
                                <li
                                    onClick={() => setSotrang(Sotrang - 1)}><a href="#" aria-label="Previous">
                                        <span aria-hidden="true">«</span></a></li>}
                            {mang && mang.map((sotrang, index) =>
                                <li onClick={() => setSotrang(sotrang - 1)} className={Sotrang == (index) && "active"}>
                                    <a href="#">{sotrang}<span className="sr-only" /></a></li>)}
                            {Sotrang < (mang.length - 1) &&
                                <li onClick={() => setSotrang(Sotrang + 1)}><a href="#" aria-label="Next"><span aria-hidden="true">»</span> </a> </li>}
                        </ul>
                    </nav>
                </div>
            </div>
        </div >


    )
}

About.propTypes = {

}

export default About
