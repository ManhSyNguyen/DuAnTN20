import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Login = props => {
    return (
        <div>
            <div className="container">
                <div className="account">
                    <h1>DHM COLOR</h1>
                    <h2>Đăng nhập</h2>
                    <div className="account-pass">
                        <div className="col-md-12 account-top">
                            <form>
                                <div>
                                    <span>Email</span>
                                    <input type="text" placeholder="Enter email" />
                                </div>
                                <div>
                                    <span>Mật khẩu</span>
                                    <input type="password" placeholder="Password" />
                                </div>

                                <button className="btn_login"><span>Đăng nhập</span></button>
                                <div className="link_forgot"><Link to="/forgotpass">Quên mật khẩu</Link></div>
                            </form>
                        </div>
                        <div className="clearfix"> </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

Login.propTypes = {

}

export default Login
