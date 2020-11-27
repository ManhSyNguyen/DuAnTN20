import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import apiColor from '../../../../api/colorApi'
const AddColor = () => {
    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();

    const colorState = {
        id: null,
        name: '',
        status: false,
        createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
    };

    let history = useHistory();

    const [colors, setColors] = useState(colorState);
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setColors({ ...colors, [name]: value });
    };

    const saveColor = () => {
        // debugger
        var data = {
            name: colors.name,
            status: colors.status,
            createdate: colors.createdate,
        };

        apiColor.create(data)
            .then(res => {
                setColors({
                    id: res.data.id,
                    name: res.data.name,
                    status: res.data.status,
                    createdate: res.data.creatdate,
                });
                setSubmitted(true);
                console.log(res.data);
                history.push("/admin/v1/api/categorys");
                Swal.fire(
                    'Thêm thành công',
                    'You clicked the button!',
                    'success'
                )

            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm Màu</h6>
                </div>

                <div className="card-body" >
                    <form onSubmit={handleSubmit(saveColor)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tên màu</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="name"
                                value={colors.name}
                                onChange={handleInputChange}
                                ref={register({
                                    required: true,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.name && errors.name.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}

                            {errors.name && errors.name.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Trạng thái</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="status"
                                value={colors.status}
                                onChange={handleInputChange}
                                ref={register({ required: true })} >
                                <option></option>
                                <option>true</option>
                                <option>false</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Ngày tạo</label>
                            <input type="datetime" name="ngaytao" ref={register}
                                // value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                                value={colors.creatdate}
                                className="form-control" id="exampleInputEmail1" disabled />
                        </div>
                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

AddColor.propTypes = {

}

export default AddColor
