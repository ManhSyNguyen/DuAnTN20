import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import apiRequestCt from '../../../../api/categoryApi';
import Swal from 'sweetalert2';
const EditCategory = ({ onUpdateCt }) => {
    const da = new Date();
    const year = da.getFullYear();
    const month = da.getMonth() + 1;
    const day = da.getDate();
    const house = da.getHours();
    const minu = da.getMinutes();
    const second = da.getSeconds();
    const { id } = useParams();
    const history = useHistory()
    const [editCategorys, setEditCategorys] = useState({});
    const { register, handleSubmit, errors } = useForm();
    useEffect(() => {
        const getCategorys = async () => {
            try {
                const { data } = await apiRequestCt.get(id);
                setEditCategorys(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        };
        getCategorys()
    }, [])

    const onHandleSubmit = async (data) => {
        const newData = {
            id,
            ...data,
        }
        onUpdateCt(newData);
        console.log(newData)
        history.push('/admin/categorys');
        Swal.fire(
            'Sửa thành công',
            'You clicked the button!',
            'success'
        )
    }

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="form-group">
                        <h2 className="sidebar-brand-text mx-3">Sửa danh mục</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tên danh mục</label>
                        <input type="text"
                            name="ten_danhmuc"
                            className="form-control"
                            defaultValue={editCategorys.ten_danhmuc}
                            id="exampleInputEmail1"
                            ref={register({ required: true, pattern: /[A-Z a-z0-9]/ })}
                        />
                        <small className="form-text text-danger">
                            {errors.ten_danhmuc && errors.ten_danhmuc.type === "required" && <span>Vui lòng không để trống</span>}
                            {errors.ten_danhmuc && errors.ten_danhmuc.type === "pattern" && <span className="text-danger">Không được cách</span>}
                        </small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InputProductName">Ngày tạo</label>
                        <input type="datetime" name="ngaytao" ref={register}
                            value={`${day}-${month}-${year} / ${house}:${minu}:${second}s`}
                            className="form-control" id="exampleInputEmail1" disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Mô tả</label>
                        <input type="text"
                            name="mota"
                            className="form-control"
                            defaultValue={editCategorys.mota}
                            id="exampleInputEmail1"
                            ref={register({ required: true, pattern: /[A-Z a-z0-9]/ })}
                        />
                        <small className="form-text text-danger">
                            {errors.mota && errors.mota.type === "required" && <span>Vui lòng không để trống</span>}
                            {errors.mota && errors.mota.type === "pattern" && <span className="text-danger">Không được cách</span>}
                        </small>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

EditCategory.propTypes = {

}

export default EditCategory
