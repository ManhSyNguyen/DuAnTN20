import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import apiProduct from '../../../../api/productApi'
import apiCategory from '../../../../api/categoryApi'

const Categorys = () => {

    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        apiProduct.getAll().then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
    }, []);

    useEffect(() => {
        apiCategory.getAll().then((res) => {
            console.log(res.data);
            setCategorys(res.data)
        })
    }, []);

    const { id } = useParams()
    const product = products.filter(product => product.id_category === id)
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
                                    {categorys.map(({ id, name, index }) => (
                                        <div className="size__list color__list" key={index}>
                                            <Link className="link_cate" to={"/cate/" + id}>{name}</Link>
                                            {console.log(name)}
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


                            {product?.map((sh, index) => (
                                <div className="col-md-4 bottom-cd simpleCart_shelfItem" key={index}>
                                    <div className="product-at ">
                                        <Link to={`/product/${sh.id}`}><img className="img-responsive" src={sh.image} alt="" />
                                            <div className="pro-grid">
                                                <span className="buy-in">Buy Now</span>
                                            </div>
                                        </Link>
                                    </div>
                                    <p className="tun">{sh.nameproduct}</p>
                                    <p className="tun1">Size : S - M - L - XL</p>
                                    <Link to={`/product/${sh.id}`} className="item_add">
                                        <p className="number item_price"><i> </i>{sh.price} vnđ</p>
                                    </Link>
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
