import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Categorys = ({ categorys, products }) => {
    const { id } = useParams()
    const product = products.filter(product => product.danhmuc_Id === id)
    return (

        <div>
            <div className="product">
                <div className="container">
                    <div className="col-md-3 product-price">
                        <div className=" rsidebar span_1_of_left">
                            <div className="of-left">
                                <h3 className="cate">Categories</h3>
                            </div>
                            <ul className="menu">
                                <li className="item4">
                                    <Link className="link_cate" to={"/sanpham"}>Tất cả</Link>
                                    {categorys.map(({ id, ten_danhmuc, index }) => (
                                        <div className="size__list color__list" key={index}>
                                            <Link className="link_cate" to={"/cate/" + id}>{ten_danhmuc}</Link>
                                        </div>
                                    ))}
                                </li>

                            </ul>
                        </div>
                        {/*initiate accordion*/}
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


                    </div>

                    <div className="col-md-9 product1">
                        <div className=" bottom-product">


                            {product.map((sh, index) => (
                                <div className="col-md-4 bottom-cd simpleCart_shelfItem" key={index}>
                                    <div className="product-at ">
                                        <Link to={`/product/${sh.id}`}><img className="img-responsive" src={sh.anh} alt="" />
                                            <div className="pro-grid">
                                                <span className="buy-in">Buy Now</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <p className="tun">{sh.ten_sp}</p>
                                    <p className="tun1">Size : S - M - L - XL</p>
                                    <a href="#" className="item_add">
                                        <p className="number item_price"><i> </i>{sh.gia_ban} vnđ</p>
                                    </a>
                                </div>

                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Categorys.propTypes = {

}

export default Categorys
