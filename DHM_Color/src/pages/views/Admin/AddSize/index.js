import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddSize = ({ onAddS }) => {

    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();
    let history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onHandleSubmit = (data) => {
        const newdata = {
            id: Math.random().toString(36).substr(2, 9),
            ...data,
        };
        console.log(newdata)
        onAddS(newdata);
        history.push("/admin/sizes");
        Swal.fire(
            'Thêm thành công',
            'You clicked the button!',
            'success'
        )
    };

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm Size</h6>
                </div>

                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tên size</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="tenSize"
                                ref={register({
                                    required: true,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.tenSize && errors.tenSize.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}

                            {errors.tenSize && errors.tenSize.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Trạng thái</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="trangthai" ref={register({ required: true })} >
                                <option></option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                            {errors.trangthai && errors.trangthai.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
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
        </div>
    )
}

AddSize.propTypes = {

}

export default AddSize
