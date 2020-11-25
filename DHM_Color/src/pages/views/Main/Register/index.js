import React, { Component } from 'react'
import userApi from '../../../../api/userApi';
import { useHistory, withRouter } from "react-router-dom";
import Swal from 'sweetalert2';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            createby: '',
            email: '',
            username: '',
            password: ''
        }
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeCreateByHandler = this.changeCreateByHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.createUsers = this.createUsers.bind(this);
    }
    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }
    changeCreateByHandler = (event) => {
        this.setState({ createby: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    createUsers = (e) => {
        e.preventDefault();
        let user = {
            createby: this.state.createby,
            email: this.state.email,
            username: this.state.username,
            password: this.state.password
        };
        console.log('user => ' + JSON.stringify(user));
        userApi.createUser(user).then(res => {
            Swal.fire(
                'Đăng ký thành công',
                'You clicked the button!',
                'success'
            )
            this.props.history.push('/login');
        })
    }

    render() {
        return (
            <div>
                <div className=" container">
                    <div className=" register">
                        <h1>DHM COLOR</h1>
                        <h2>Đăng ký</h2>
                        <form>
                            <div className="col-md-6 register-top-grid">
                                <h3>Thông tin cá nhân</h3>
                                <div className="form-group">
                                    <span>Họ tên</span>
                                    <input type="text" placeholder="First Name" className="form-control" value={this.state.createby} onChange={this.changeCreateByHandler} />
                                </div>
                                <div className="form-group">
                                    <span>Email Address</span>
                                    <input type="text" placeholder="Enter Email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler} />
                                </div>
                            </div>
                            <div className="col-md-6 register-bottom-grid ">
                                <h3>Đăng nhập thông tin</h3>
                                <div className="register-top-grid form-group">
                                    <span>Tài khoản</span>
                                    <input type="text" placeholder="Username" value={this.state.username} className="form-control" onChange={this.changeUsernameHandler} />
                                </div>
                                <div className="form-group">
                                    <span>Mật khẩu</span>
                                    <input type="password" placeholder="Password" value={this.state.password} className="form-control" onChange={this.changePasswordHandler} />
                                </div>
                                {/* <div className="form-group">
                                    <span>Nhập lại mật khẩu</span>
                                    <input type="password" placeholder="Confirm Password" className="form-control" />
                                </div> */}
                                <div className="btn_re">
                                    <button onClick={this.createUsers}><span>Đăng ký</span></button>&nbsp;
                                    <button><span>Hủy</span></button>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default withRouter(Register);


