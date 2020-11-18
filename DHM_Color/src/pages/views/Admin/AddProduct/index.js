import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from "react-hook-form";
import firebase from '../../../../firebase';
import Swal from 'sweetalert2';
const AddProduct = ({ onAdd, categorys }) => {
    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const onHandleAdd = (data) => {
        let file = data.anh[0];
        let storageRef = firebase.storage().ref(`images/${file.name}`);
        storageRef.put(file).then(function () {
            storageRef.getDownloadURL().then((url) => {
                console.log(url)
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    anh: url
                }
                console.log(newData);
                //     e.preventDefault();
                onAdd(newData)
                history.push("/admin/products");
                Swal.fire(
                    'Thêm thành công',
                    'You clicked the button!',
                    'success'
                )
            })
        });
    }

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm sản phẩm</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleAdd)}>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Tên sản phẩm</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="productName" name="ten_sp"
                                ref={register({
                                    required: true,
                                    minLength: 5, pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.ten_sp && errors.ten_sp.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.ten_sp && errors.ten_sp.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.ten_sp && errors.ten_sp.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Nội dung ngắn</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="productNdNgan" name="nd_ngan"
                                ref={register({ required: true, minLength: 5, pattern: /[A-Z a-z0-9]/ })} />
                            {errors.nd_ngan && errors.nd_ngan.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.nd_ngan && errors.nd_ngan.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.nd_ngan && errors.nd_ngan.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Số lượng</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="number"
                                className="form-control"
                                id="InputProductName"
                                name="so_luong"
                                ref={register({ required: true, min: 0, pattern: /[-+]?[0-9]*[.,]?[0-9]+/ })}
                            />
                            {errors.so_luong && errors.so_luong.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.so_luong && errors.so_luong.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tình trạng</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="tinh_trang" ref={register({ required: true })} >
                                <option></option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                            {errors.tinh_trang && errors.tinh_trang.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>


                        <div className="form-group">
                            <label htmlFor="InputProductSize">Size</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select
                                name="size"
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">--Lựa chọn size--</option>
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductColor">Màu</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select
                                name="Color"
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">--Lựa chọn màu--</option>
                                <option value="">Đen</option>
                                <option value="">Đỏ</option>
                                <option value="">Trắng</option>
                            </select>
                        </div>

                        <div className="control">
                            <label htmlFor="InputProductStatus">Danh mục</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select
                                name="danhmuc_Id"
                                ref={register()}
                                tabIndex={1}
                                data-placeholder="Select here.."
                                className="form-control "
                            >
                                <option value="">--Lựa chọn danh mục--</option>
                                {categorys.map((category, index) => (
                                    <option key={index} value={category.id}>
                                        {category.ten_danhmuc}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="productPrice">Ảnh sản phẩm</label>
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file"
                                        className="custom-file-input"
                                        id="inputGroupFile02"
                                        name="anh"
                                        ref={register}
                                    />
                                    <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                                    <label className="custom-file-label" htmlFor="inputGroupFile02" aria-describedby="imageHelp">Choose image</label>
                                </div>
                            </div>
                            {errors.anh && errors.anh.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Giá nhập</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="number" className="form-control"
                                id="productRegularPrice" name="gia_nhap"
                                ref={register({
                                    required: true, min: 0
                                    , pattern: /[-+]?[0-9]*[.,]?[0-9]+/
                                })} />
                            {errors.gia_nhap && errors.gia_nhap.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.gia_nhap && errors.gia_nhap.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductPrice">Giá bán</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="number" className="form-control" id="productSalePrice" name="gia_ban"
                                ref={register({
                                    required: true, min: 0
                                    , pattern: /[-+]?[0-9]*[.,]?[0-9]+/
                                })} />
                            {errors.gia_ban && errors.gia_ban.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.gia_ban && errors.gia_ban.type === "min"
                                && <span style={{ color: "red" }} >Sai định dạng</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Nội dung chi tiết</label>
                            <span style={{ color: 'red' }}>*</span>
                            <textarea type="text" className="form-control"
                                id="productName" name="nd_chitiet"
                                ref={register({
                                    required: true,
                                    minLength: 5, pattern: /[A-Z a-z0-9]/
                                })} ></textarea>
                            {errors.nd_chitiet && errors.nd_chitiet.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.nd_chitiet && errors.nd_chitiet.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.nd_chitiet && errors.nd_chitiet.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductName">Ngày tạo</label>
                            <input type="datetime" name="ngaytao" ref={register}
                                value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                                className="form-control" id="exampleInputEmail1" disabled />
                        </div>
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>

        </div >
    )
}

AddProduct.propTypes = {
    onAdd: PropTypes.func
}

export default AddProduct