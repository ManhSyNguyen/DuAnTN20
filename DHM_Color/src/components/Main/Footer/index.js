import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Footer = props => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer-top-at">
                    <div className="col-md-4 amet-sed">
                        <h4>THÊM THÔNG TIN</h4>
                        <ul className="nav-bottom">
                            <li><a href="https://trangnguyensport.com/trang-web-nike-com-da-co-mat-tai-viet-nam-xem-cach-mua-hang-truc-tuyen/">Làm sao để đặt hàng</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><Link to="/lienhe">Vị trí</Link></li>
                            <li><a href="#">Chuyển hàng</a></li>
                            <li><a href="#">Thành viên</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 amet-sed ">
                        <h4>LIÊN HỆ VỚI CHÚNG TÔI</h4>
                        <p>
                            Số 179, Phố Trịnh Văn Bô, Xuân Phương</p>
                        <p>Q.Nam từ Liêm - Hà Nội</p>
                        <p>Số điện thoại:  +12 34 995 0792</p>
                        <ul className="social">
                            <li><a href="https://www.facebook.com/DMH-Color-104956168041507"><i> </i></a></li>
                            <li><a href="#"><i className="twitter"> </i></a></li>
                            <li><a href="#"><i className="rss"> </i></a></li>
                            <li><a href="#"><i className="gmail"> </i></a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 amet-sed">
                        <h4>DHM COLOR</h4>
                        <p>Mua hàng để nhận được tất cả các ưu đãi và khuyến mại</p>

                        <form>
                            <input type="text" />
                            <input type="submit" value="Tìm kiếm" />
                        </form>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="footer-class">
                <p>DHM COLOR © MODERN & YOUTHFUL FASHION </p>
            </div>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
