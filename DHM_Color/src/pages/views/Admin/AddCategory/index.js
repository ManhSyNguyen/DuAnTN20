import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
const AddCategory = ({ onAddCt }) => {
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
        onAddCt(newdata);
        history.push("/admin/categorys");
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
                    <h6 className="m-0 font-weight-bold text-primary">Thêm danh mục</h6>
                </div>
                <div className="card-body" >
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Tên danh muc</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="ten_danhmuc"
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.ten_danhmuc && errors.ten_danhmuc.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.ten_danhmuc && errors.ten_danhmuc.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.ten_danhmuc && errors.ten_danhmuc.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputProductName">Ngày tạo</label>
                            <input type="datetime" name="ngaytao" ref={register}
                                value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                                className="form-control" id="exampleInputEmail1" disabled />
                        </div>
                        <div className="form-group">
                            <label htmlFor="InputCategoryName">Mô tả</label>
                            <span style={{ color: 'red' }}>*</span>
                            <input type="text" className="form-control"
                                id="categoryName" name="mota"
                                ref={register({
                                    required: true, minLength: 3,
                                    pattern: /[A-Z a-z0-9]/
                                })} />
                            {errors.mota && errors.mota.type === "required"
                                && <span style={{ color: "red" }}>Vui lòng không để trống</span>}
                            {errors.mota && errors.mota.type === "minLength"
                                && <span style={{ color: "red" }}>Giá trị phải lớn hơn 5 kí tự</span>}
                            {errors.mota && errors.mota.type === "pattern"
                                && <span style={{ color: "red" }}>Không chứa kí tự đặc biệt</span>}
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
