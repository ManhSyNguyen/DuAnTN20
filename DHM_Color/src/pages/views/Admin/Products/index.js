import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiProducts from '../../../../api/productApi';
import apiCategory from '../../../../api/categoryApi';
const ProductsManager = () => {

    const [products, setProducts] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [currentCate, setCurrentCate] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const retrieveProducts = () => {
        apiProducts.getAll()
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const refreshList = () => {
        retrieveProducts();
        setCurrentCate(null);
        setCurrentIndex(-1);
    };


    // const setActiveCate = (category, index) => {
    //     setCurrentCate(category);
    //     setCurrentIndex(index);
    // };
    const removeHandle = () => {
        apiProducts.removeAll()
        Swal.fire({
            title: 'Bạn có muốn thực hiện?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(response => {
            if (response.isConfirmed) {
                console.log(response.data);
                refreshList();
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
            .catch(e => {
                console.log(e);
            });
    };

    //Phân trang
    const [Sotrang, setSotrang] = useState(0)

    const tongSp = products.length;
    console.log(222, products)

    const tinhTrang = Math.ceil(tongSp / 6);

    const mang = [];
    for (var i = 1; i <= tinhTrang; i++) {
        mang.push(i)
    }
    return (
        <div>
            <div className="mb4-4 d-flex justify-content-between align-items-center">
                <h1 className="h3 text-gray-800">
                    Thêm sản phẩm
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/product/add">Thêm sản phẩm</Link><hr />

            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Quản lý kho hàng</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Ảnh </th>
                                        <th scope="col">SL</th>
                                        <th scope="col">Danh mục</th>
                                        <th scope="col">Màu</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Tình trạng</th>
                                        <th scope="col">Giá </th>
                                        <th scope="col">Ngày tạo </th>
                                        <th scope="col">Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map(({ id, nameproduct, idcategory, price, status, image, decription, purchase, createdate }, index) => (
                                        index < (((Sotrang + 1) * 6)) && index > ((Sotrang * 6) - 1) &&
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            {/* <td><Link to={`/admin/detail/${id}`} style={{ textDecoration: "none" }}>{ten_sp}</Link></td> */}
                                            <td>{nameproduct}</td>
                                            <td><img src={image} alt="" width="50" /></td>
                                            <td>
                                                {categorys && categorys.map((id) => {
                                                    if (idcategory == id.id) {
                                                        return id.name;
                                                    }
                                                })}
                                            </td>

                                            <td>{status == "true" ? <span className="label label-warning">Còn hàng</span> : <span className="label label-default">Hết hàng</span>}</td>
                                            <td>{price} vnđ</td>
                                            <td>{decription}</td>
                                            <td>{purchase}</td>
                                            <td>{createdate}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button>&nbsp;
                                                {/* <Link className="btn btn-primary" to={`/admin/edit/${id}`}>Sửa</Link>&nbsp; */}

                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    {Sotrang > 0 &&
                                        <li className="page-item" onClick={() => setSotrang(Sotrang - 1)}>
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>}
                                    {mang && mang.map((sotrang, index) =>
                                        <li onClick={() => setSotrang(sotrang - 1)} className={Sotrang == (index) && "page-item"}><a className="page-link" href="#">{sotrang}</a></li>)}
                                    {Sotrang < (mang.length - 1) &&
                                        <li className="page-item" onClick={() => setSotrang(Sotrang + 1)}>
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">&raquo;</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>}
                                </ul>
                            </nav>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
