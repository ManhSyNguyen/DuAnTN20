import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import apiRequestCt from './../../../../api/categoryApi';
const AddCategory = () => {

    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();

    const categoryState = {
        id: null,
        name: '',
        status: false,
        createdate: `${day}-${month}-${year} / ${house}:${minu}:${second}s`,
        createby: null
    };

    let history = useHistory();

    const [categorys, setCategorys] = useState(categoryState);
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCategorys({ ...categorys, [name]: value });
    };

    const saveCategory = () => {
        // debugger
        var data = {
            name: categorys.name,
            status: categorys.status,
            createdate: categorys.createdate,
            createby: null
        };

        apiRequestCt.create(data)
            .then(res => {
                setCategorys({
                    id: res.data.id,
                    name: res.data.name,
                    status: res.data.status,
                    createdate: res.data.creatdate,
                    createby: null
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

    // const newCate = () => {
    //     setCategorys(categorys);
    //     setSubmitted(false);
    // };



    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Thêm danh mục</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(saveCategory)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tên danh mục</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="name"
                                value={categorys.name}
                                onChange={handleInputChange}
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.name && errors.name.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.name && errors.name.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.name && errors.name.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductStatus">Tình trạng</label>
                            <span style={{ color: 'red' }}>*</span>
                            <select className="form-control form-control"
                                name="status" ref={register({ required: true })}
                                value={categorys.status}
                                onChange={handleInputChange}>
                                <option value=""></option>
                                <option>1</option>
                                <option>2</option>
                            </select>
                            {errors.status && errors.status.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductName">Ngày tạo</label>
                            <input type="datetime" name="createdate" ref={register}
                                // value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                                value={categorys.creatdate}
                                className="form-control" id="exampleInputEmail1"
                                onChange={handleInputChange}
                                disabled />
                        </div>

                        <button type="submit" className="btn btn-success">Lưu</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
AddCategory.propTypes = {

}

export default AddCategory
