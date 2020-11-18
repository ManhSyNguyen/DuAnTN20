import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const User = ({ users }) => {
    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Quản lý tài khoản</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Họ tên</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Tên tài khoản</th>
                                    <th scope="col">Mật khẩu</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(({ id, hoten, email, tenTK, matkhau, trangthai, ngaytao }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{hoten}</td>
                                        <td>{email}</td>
                                        <td>{tenTK}</td>
                                        <td>{matkhau}</td>
                                        <td>{trangthai}</td>
                                        <td>{ngaytao}</td>
                                        <td>
                                            <button className="btn btn-danger">Xóa</button>&nbsp;
                                                    <Link className="btn btn-primary" >Sửa</Link>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

User.propTypes = {

}

export default User
