import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>

                <div className="sidebar-brand-text mx-3">D H M COLOR</div>
            </Link>
            {/* Divider */}
            <hr className="sidebar-divider my-0" />
            {/* Nav Item - Dashboard */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Bảng điều khiển</span></Link>
            </li>
            {/* Quan ly nhan vien*/}
            <li className="nav-item">
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý nhân viên</span></Link>
            </li>
            {/* Quan ly danh muc*/}
            <li className="nav-item">
                {/* <Link className="nav-link" to="/admin/categorys"> */}
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý danh mục</span></Link>
            </li>
            {/* Quan ly size*/}
            <li className="nav-item">
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý size</span></Link>
            </li>
            {/* Quan ly mau*/}
            <li className="nav-item">
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý màu</span></Link>
            </li>
            {/* Quan ly bai viet */}
            <li className="nav-item">
                {/* <Link className="nav-link" to="/admin/posts"> */}
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Quản lý bài viết</span></Link>
            </li>
            {/* Quan ly san pham */}
            <li className="nav-item active">
                <Link className="nav-link" to="/admin/products">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý sản phẩm</span></Link>
            </li>
            {/* Quan ly don hang */}
            <li className="nav-item active">
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý đơn hàng</span></Link>
            </li>
            {/* Trang chu */}
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Trang chủ </span></Link>
            </li>
        </ul>
    )
}

Sidebar.propTypes = {

}

export default Sidebar
