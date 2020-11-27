import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import apiColor from '../../../../api/colorApi'
import Swal from 'sweetalert2'

const Color = () => {
    const [colors, setColors] = useState([]);
    const [currentColor, setCurrentColor] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const retrieveColors = () => {
        apiColor.getAll()
            .then(response => {
                setColors(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    const refreshList = () => {
        retrieveColors();
        setCurrentColor(null);
        setCurrentIndex(-1);
    };
    // const setActiveCate = (category, index) => {
    //     setCurrentCate(category);
    //     setCurrentIndex(index);
    // };
    const removeHandleCol = () => {
        // const newSizes = sizes.filter(size => size.id !== id)
        apiColor.removeAll()
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
                    Thêm Màu
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/color/add">Thêm Màu</Link><hr />
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên màu</th>
                                <th scope="col">Trang thái</th>
                                <th scope="col">Ngày tạo</th>
                                <th scope="col">Tùy chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {colors && colors.map(({ id, name, status, createdate }, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{status}</td>
                                    <td>{createdate}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeHandleCol(id)}>Xóa</button>&nbsp;
                                                    <Link className="btn btn-primary" to={`/admin/color/edit/${id}`}>Sửa</Link>
                                    </td>
                                </tr>
                            ))}

                        </tbody>
                    </table>

                </div>
            </div>
        </div>

    )
}

Color.propTypes = {

}

export default Color
