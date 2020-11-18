import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = props => {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* Sidebar - Brand */}
            <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink" />
                </div>
                <img className="img_sidebar" src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.0-9/120321837_104956478041476_7176881432022885481_n.png?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=K3O9FfA_rl8AX_eow7w&_nc_ht=scontent.fhan2-4.fna&oh=8db316ece0079d14cb39c196f0204515&oe=5FBEA709" />
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
            {/* Quan ly tai khoan*/}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/users">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý tài khoản</span></Link>
            </li>
            {/* Quan ly danh muc*/}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/categorys">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý danh mục</span></Link>
            </li>
            {/* Quan ly size*/}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/sizes">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý size</span></Link>
            </li>
            {/* Quan ly mau*/}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/colors">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý màu</span></Link>
            </li>
            {/* Quan ly bai viet */}
            <li className="nav-item">
                <Link className="nav-link" to="/admin/posts">
                    <i className="fas fa-fw fa-chart-area" />
                    <span>Quản lý bài viết</span></Link>
            </li>
            {/* Quan ly san pham */}
            <li className="nav-item active">
                <Link className="nav-link" to="/admin/products">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý kho hàng</span></Link>
            </li>
            {/* Quan ly don hang */}
            <li className="nav-item active">
                <Link className="nav-link" to="#">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Quản lý đơn hàng</span></Link>
            </li>

            {/* Liên hệ */}
            <li className="nav-item active">
                <Link className="nav-link" to="/admin/contacts">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Liên hệ</span></Link>
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



