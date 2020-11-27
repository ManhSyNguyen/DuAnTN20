// import React, { Component } from 'react'
// import userApi from '../../../../api/userApi';
// import { useHistory, withRouter } from "react-router-dom";
// import Swal from 'sweetalert2';

// class RegisterA extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             createby: '',
//             email: '',
//             username: '',
//             password: ''
//         }
//         this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
//         this.changePasswordHandler = this.changePasswordHandler.bind(this);
//         this.changeCreateByHandler = this.changeCreateByHandler.bind(this);
//         this.changeEmailHandler = this.changeEmailHandler.bind(this);
//         this.createUsers = this.createUsers.bind(this);
//     }
//     changeUsernameHandler = (event) => {
//         this.setState({ username: event.target.value });
//     }
//     changePasswordHandler = (event) => {
//         this.setState({ password: event.target.value });
//     }
//     changeCreateByHandler = (event) => {
//         this.setState({ createby: event.target.value });
//     }
//     changeEmailHandler = (event) => {
//         this.setState({ email: event.target.value });
//     }
//     createUsers = (e) => {
//         e.preventDefault();
//         let user = {
//             createby: this.state.createby,
//             email: this.state.email,
//             username: this.state.username,
//             password: this.state.password
//         };
//         console.log('user => ' + JSON.stringify(user));
//         userApi.createUser(user).then(res => {
//             Swal.fire(
//                 'Đăng ký thành công',
//                 'You clicked the button!',
//                 'success'
//             )
//             this.props.history.push('/logina');
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <div className="main">
//                     <form action method="POST" className="form" id="form-1">
//                         <h1>DHM COLOR</h1>
//                         <h2>Đăng kí</h2>
//                         <div className="spacer" />
//                         <div className="form-group">
//                             <label htmlFor="fullname" className="form-label">User name</label>
//                             <input id="fullname" name="userName" type="text" placeholder="Tên tài khoản"
//                                 className="form-control"
//                                 value={this.state.username} onChange={this.changeUsernameHandler} />
//                             <span className="form-message" />
//                         </div>
//                         <div className="form-group">
//                             <label htmlFor="password" className="form-label">Mật khẩu</label>
//                             <input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
//                                 className="form-control"
//                                 value={this.state.password} onChange={this.changePasswordHandler} />
//                             <span className="form-message" />
//                         </div>
//                         <button onClick={this.createUsers} className="form-submit">Đăng ký</button>
//                         {/* <Link className="dangki" to="/admin">Tạo tài khoản</Link> */}
//                     </form>
//                 </div>
//             </div>

//         )
//     }
// }

// export default withRouter(RegisterA);


import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { createUser } from "../../../../actions/auth";

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

// const validEmail = (value) => {
//     if (!isEmail(value)) {
//         return (
//             <div className="alert alert-danger" role="alert">
//                 This is not a valid email.
//             </div>
//         );
//     }
// };

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const RegisterA = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [userName, setUsername] = useState("");
    // const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const userName = e.target.value;
        setUsername(userName);
    };

    // const onChangeEmail = (e) => {
    //     const email = e.target.value;
    //     setEmail(email);
    // };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(createUser(userName, password))
                .then(() => {
                    setSuccessful(true);
                    props.history.push("/logina");
                })
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };
    return (
        <div>
            <div className="main">
                <Form onSubmit={handleRegister} ref={form}
                    action method="POST" className="form" id="form-1">
                    {!successful && (
                        <div>
                            <h1>DHM COLOR</h1>
                            <h2>Đăng kí</h2>
                            <div className="spacer" />
                            <div className="form-group">
                                <label htmlFor="fullname" className="form-label">User name</label>
                                <Input id="fullname" name="userName" type="text" placeholder="Tên tài khoản"
                                    className="form-control"
                                    value={userName}
                                    onChange={onChangeUsername}
                                    validations={[required, vusername]} />
                                <span className="form-message" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label">Mật khẩu</label>
                                <Input id="password" name="password" type="password" placeholder="Nhập mật khẩu"
                                    className="form-control"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]} />
                                <span className="form-message" />
                            </div>
                            <button className="form-submit">Đăng ký</button>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div className={successful ? "alert alert-success" : "alert alert-danger"} role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    {/* <Link className="dangki" to="/admin">Tạo tài khoản</Link> */}
                </Form>
            </div>
        </div>

    )
}
export default RegisterA;