import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
import apiRequestCt from './../../../../api/categoryApi';
const Category = () => {

    const [categorys, setCategorys] = useState([]);
    const [currentCate, setCurrentCate] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const retrieveCategorys = () => {
        apiRequestCt.getAll()
            .then(response => {
                setCategorys(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const refreshList = () => {
        retrieveCategorys();
        setCurrentCate(null);
        setCurrentIndex(-1);
    };
    // const setActiveCate = (category, index) => {
    //     setCurrentCate(category);
    //     setCurrentIndex(index);
    // };
    const removeHandleCt = () => {
        apiRequestCt.removeAll()
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


    return (
        <div>
            <div className="mb4-4 d-flex justify-content-between align-items-center">
                <h1 className="h3 text-gray-800">
                    Thêm Danh Mục
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/v1/api/category/add">Thêm danh mục</Link><hr />

            <div>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Quản lý danh mục</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Tên danh mục</th>
                                        <th scope="col">Mô tả</th>
                                        <th scope="col">Ngày tạo</th>
                                        <th scope="col">Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categorys && categorys.map(({ id, name, status, createdate, createby }, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{name}</td>
                                            <td>{status}</td>
                                            <td>{createdate}</td>
                                            <td>{createby}</td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => removeHandleCt(id)}>Xóa</button>&nbsp;
                                                <Link className="btn btn-primary" to={`/admin/v1/api/category/edit/${id}`}>Sửa</Link>&nbsp;
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Category.propTypes = {

}

export default Category
