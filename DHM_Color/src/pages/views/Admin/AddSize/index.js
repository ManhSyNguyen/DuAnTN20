import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import apiSize from '../../../../api/sizeApi';
const AddSize = () => {

    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();

    const sizeState = {
        id: null,
        namesize: '',
        status: false,
        createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
    };

    let history = useHistory();

    const [sizes, setSizes] = useState(sizeState);
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSizes({ ...sizes, [name]: value });
    };

    const saveSize = () => {
        // debugger
        var data = {
            namesize: sizes.namesize,
            status: sizes.status,
            createdate: sizes.createdate,
        };

        apiSize.create(data)
            .then(res => {
                setSizes({
                    id: res.data.id,
                    namesize: res.data.namesize,
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
                    <h6 className="m-0 font-weight-bold text-primary">Thêm Size</h6>
                </div>

                <div className="card-body" >
                    <form onSubmit={handleSubmit(saveSize)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tên Size</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="namesize"
                                value={sizes.namesize}
                                onChange={handleInputChange}
                                ref={register({
                                    required: true,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.namesize && errors.namesize.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.namesize && errors.namesize.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Trạng thái</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="status"
                                value={sizes.status}
                                onChange={handleInputChange}
                                ref={register({ required: true })} >
                                <option></option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="InputProductName">Ngày tạo</label>
                            <input type="datetime" name="ngaytao" ref={register}
                                // value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                                value={sizes.creatdate}
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
