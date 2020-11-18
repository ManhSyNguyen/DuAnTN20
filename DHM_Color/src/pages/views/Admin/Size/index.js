import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Size = ({ sizes, onRemoveS }) => {
    const removeHandleS = (id) => {
        onRemoveS(id)
        console.log(onRemoveS(id))
    }
    return (
        <div>
            <div className="mb4-4 d-flex justify-content-between align-items-center">
                <h1 className="h3 text-gray-800">
                    Thêm Size
                </h1><br />

            </div>
            <Link className="btn btn-danger" to="/admin/size/add">Thêm Size</Link><hr />
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Tên size</th>
                                <th scope="col">Trang thái</th>
                                <th scope="col">Ngày tạo</th>
                                <th scope="col">Tùy chọn</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sizes.map(({ id, tenSize, trangthai, ngaytao }, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{tenSize}</td>
                                    <td>{trangthai}</td>
                                    <td>{ngaytao}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => removeHandleS(id)}>Xóa</button>&nbsp;
                                        <Link className="btn btn-primary" to={`/admin/size/edit/${id}`}>Sửa</Link>
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

Size.propTypes = {

}

export default Size
