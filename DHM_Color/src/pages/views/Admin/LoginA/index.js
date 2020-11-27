
// import React, { Component } from 'react'
// import userApi from '../../../../api/userApi'
// import { Link, withRouter } from 'react-router-dom'
// import Swal from 'sweetalert2';

// class LoginA extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userName: '',
//             password: ''
//         }
//         this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
//         this.changePasswordHandler = this.changePasswordHandler.bind(this);
//         this.onLogin = this.onLogin.bind(this);
//     }
//     changeUsernameHandler = (event) => {
//         this.setState({ userName: event.target.value });
//     }
//     changePasswordHandler = (event) => {
//         this.setState({ password: event.target.value });
//     }

//     onLogin = (e) => {
//         e.preventDefault();
//         let authReq = {
//             userName: this.state.userName,
//             password: this.state.password
//         };
//         console.log('authReq => ' + JSON.stringify(authReq));
//         userApi.loginUser(authReq).then(res => {
//             Swal.fire(
//                 'Đăng nhập thành công',
//                 'You clicked the button!',
//                 'success'
//             )
//             this.props.history.push('/admin');
//         })
//     }
//     render() {
//         return (
//             <div>

//                 <div className="main">
//                     <form action method="POST" className="form" id="form-1">
//                         <h1>DHM COLOR</h1>
//                         <h2>Đăng nhập</h2>
//                         <div className="spacer" />
//                         <div className="form-group">
//                             <label htmlFor="fullname" className="form-label">User name</label>
//                             <input id="fullname" name="userName" type="text" placeholder="Tên tài khoản"
//                                 className="form-control"
//                                 value={this.state.userName} onChange={this.changeUsernameHandler} />
//                             <span className="form-message" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="password" className="form-label">Mật khẩu</label>
//                             <input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
//                                 className="form-control"
//                                 value={this.state.password} onChange={this.changePasswordHandler} />
//                             <span className="form-message" />
//                         </div>
//                         <button onClick={this.onLogin} className="form-submit">Đăng nhập</button>
//                         <Link className="dangki" to="/registera">Tạo tài khoản</Link>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// }
// export default withRouter(LoginA);


import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { loginUser } from "../../../../actions/auth";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const LoginA = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(loginUser(username, password))
                .then(() => {
                    props.history.push("/admin");
                    window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    if (isLoggedIn) {
        return <Redirect to="/admin" />;
    }
    return (
        <div>

            <div className="main">
                <Form onSubmit={handleLogin} ref={form}
                    action method="POST" className="form" id="form-1">
                    <h1>DHM COLOR</h1>
                    <h2>Đăng nhập</h2>
                    <div className="spacer" />
                    <div className="form-group">
                        <label htmlFor="fullname" className="form-label">User name</label>
                        <Input id="fullname" name="username" type="text" placeholder="Tên tài khoản"
                            className="form-control"
                            value={username}
                            onChange={onChangeUsername}
                            validations={[required]} />
                        <span className="form-message" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">Mật khẩu</label>
                        <Input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
                            className="form-control"
                            value={password}
                            onChange={onChangePassword}
                            validations={[required]} />
                        <span className="form-message" />
                    </div>
                    <button className="form-submit" disabled={loading}>
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}<span>Đăng nhập</span>
                    </button>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    <Link className="dangki" to="/registera">Tạo tài khoản</Link>
                </Form>
            </div>
        </div>
    )
}
export default LoginA;