import React from 'react'
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';

const ProductsManager = ({ products, onRemove, categorys }) => {

    const removeHandle = (id) => {
        onRemove(id)

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
                        <h6 className="m-0 font-weight-bold text-primary">Quản lý sản phẩm</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên sản phẩm</th>
                                        <th scope="col">Ảnh </th>
                                        <th scope="col">Danh mục</th>
                                        <th scope="col">Màu</th>
                                        <th scope="col">Size</th>
                                        <th scope="col">Tình trạng hàng</th>
                                        <th scope="col">Giá </th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(({ id, ten_sp, danhmuc_Id, mau, size, tinh_trang, anh, gia_ban }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{ten_sp}</td>
                                            <td><img src={anh} alt="" width="50" /></td>
                                            <td>
                                                {categorys.map((id) => {
                                                    if (danhmuc_Id == id.id) {
                                                        return id.ten_danhmuc;
                                                    }
                                                })}
                                            </td>
                                            <td>{mau}</td>
                                            <td>{size}</td>

                                            <td>{tinh_trang == "true" ? <span className="label label-warning">Còn hàng</span> : <span className="label label-default">Hết hàng</span>}</td>
                                            <td>{gia_ban} vnđ</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => removeHandle(id)}>Xóa</button>&nbsp;
                                                <Link className="btn btn-primary" to={`/admin/edit/${id}`}>Sửa</Link>&nbsp;
                                                <Link className="btn btn-dark" to={`/admin/detail/${id}`}>Chi tiết</Link>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

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
