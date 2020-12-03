import React, { useState, useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom';
import apiProduct from '../../../../api/productApi';
import apiProductDetail from '../../../../api/productDetailApi';
import { DataContext } from '../ActionCart';

const ProductDetail = () => {
    const idproduct = useParams().idproduct;
    const [product, setProducts] = useState({});
    // const product = products.find(item => item.id === id)
    const value = useContext(DataContext);
    const addCart = value.addCart;
    // useEffect(() => {
    //     const getProduct = async () => {
    //         try {
    //             const { data } = await apiRequest.get(id);
    //             setProduct(data)
    //             console.log(data)
    //         } catch (error) {
    //             console.log('Faile to request API', error)
    //         }
    //     }
    //     getProduct()
    // }, {})

    useEffect(() => {
        apiProductDetail.get(idproduct).then((res) => {
            console.log(res.data);
            setProducts(res.data)
        })
    }, []);

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
                                <li className="item1"><a href="#">Tất cả </a>
                                </li>
                                <li className="item2"><a href="#">Dior </a>
                                </li>
                                <li className="item4"><a href="#">Louis Vuitton</a>
                                </li>
                                <li className="item4"><a href="#">Chanel</a>
                                </li>
                                <li className="item4"><a href="#">Gucci</a>
                                </li>
                                <li className="item4"><a href="#">Versace</a>
                                </li>
                                <li className="item4"><a href="#">Dolce & Gabbana</a>
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
                        {/*initiate accordion*/}
                        {/**/}

                        {/**/}
                    </div>
                    <div className="col-md-9 product-price1">
                        <div className="col-md-5 single-top">
                            <img src={product.image} width="300" />
                        </div>
                        <div className="col-md-7 single-top-in simpleCart_shelfItem">
                            <div className="single-para ">
                                <h4><strong>{product.idcolor}</strong></h4>
                                <div className="star-on">
                                    <ul className="star-footer">
                                        <li><a href="#"><i> </i></a></li>
                                        <li><a href="#"><i> </i></a></li>
                                        <li><a href="#"><i> </i></a></li>
                                        <li><a href="#"><i> </i></a></li>
                                        <li><a href="#"><i> </i></a></li>
                                    </ul>

                                    <div className="clearfix"> </div>
                                </div>
                                <h5 className="item_price">{product.price} vnđ</h5>

                                <ul className="tag-men">
                                    <li><span>TAG</span>
                                        <span className="women1">: Men</span></li>
                                </ul>
                                <span className="women1">{product.status == 'true' ? <p className="women1" style={{ color: '#00BB00' }}>Còn hàng
                                <br></br>
                                    <Link to="/cart" onClick={() => addCart(product.id)} className="add-cart item_add" >ADD TO CART</Link>
                                </p> : <p className="women1" style={{ color: 'red' }}>Hết hàng
                                <br></br>
                                        <Link className="add-cart item_add disabled-link" >ADD TO CART</Link></p>}
                                </span>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                        {/**/}


                        <div className="clearfix" />

                    </div>
                </div></div></div>



    )
}

ProductDetail.propTypes = {

}

export default ProductDetail
