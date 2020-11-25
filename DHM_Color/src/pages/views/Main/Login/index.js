
import React, { Component } from 'react'
import userApi from '../../../../api/userApi'
import { Link, withRouter } from 'react-router-dom'
import Swal from 'sweetalert2';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }
    changeUsernameHandler = (event) => {
        this.setState({ userName: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    onLogin = (e) => {
        e.preventDefault();
        let authReq = {
            userName: this.state.userName,
            password: this.state.password
        };
        console.log('authReq => ' + JSON.stringify(authReq));
        userApi.loginUser(authReq).then(res => {
            Swal.fire(
                'Đăng nhập thành công',
                'You clicked the button!',
                'success'
            )
            this.props.history.push('/');
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="account">
                        <h1>DHM COLOR</h1>
                        <h2>Đăng nhập</h2>
                        <div className="account-pass">
                            <div className="col-md-12 account-top">
                                <form>
                                    <div className="form-group">
                                        <span>Tài khoản</span>
                                        <input type="text" className="form-control" placeholder="Entel Username" value={this.state.userName} onChange={this.changeUsernameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <span>Mật khẩu</span>
                                        <input type="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.changePasswordHandler} />
                                    </div>
                                    <button className="btn_login" onClick={this.onLogin}><span>Đăng nhập</span></button>
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
}
export default withRouter(Login);
