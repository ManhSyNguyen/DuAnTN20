import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Color = ({ colors, onRemoveColor }) => {
    const removeHandleC = (id) => {
        onRemoveColor(id)
        console.log(onRemoveColor(id))
    }
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
                            {colors.map(({ id, tenmau, trangthai, ngaytao }, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{tenmau}</td>
                                    <td>{trangthai}</td>
                                    <td>{ngaytao}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeHandleC(id)}>Xóa</button>&nbsp;
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
