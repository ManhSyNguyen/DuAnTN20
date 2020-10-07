import React from 'react'
import PropTypes from 'prop-types'

const Register = props => {
    return (
        <div>
            <div className=" container">
                <div className=" register">
                    <h1>DHM COLOR</h1>
                    <h2>Đăng ký</h2>
                    <form>
                        <div className="col-md-6 register-top-grid">
                            <h3>Thông tin cá nhân</h3>
                            <div>
                                <span>Họ tên</span>
                                <input type="text" placeholder="First Name" />
                            </div>
                            <div>
                                <span>Tên đệm</span>
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div>
                                <span>Email Address</span>
                                <input type="text" placeholder="Enter Email" />
                            </div>
                        </div>
                        <div className="col-md-6 register-bottom-grid">
                            <h3>Đăng nhập thông tin</h3>
                            <div>
                                <span>Mật khẩu</span>
                                <input type="password" placeholder="Password" />
                            </div>
                            <div>
                                <span>Nhập lại mật khẩu</span>
                                <input type="password" placeholder="Confirm Password" />
                            </div>
                            <div className="btn_re">
                                <button><span>Đăng ký</span></button>&nbsp;
                                <button><span>Hủy</span></button>
                            </div>
                        </div>
                        <div className="clearfix"> </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

Register.propTypes = {

}

export default Register
