import React, {Component} from 'react';
import "./Login.css";
import logoText from "./WeStagram/img/logo_text.png";


export default class Login extends Component {
    constructor () {
        super();
        this.state = {
            id:"",
            pw:"",
            activeness: "inactive"
        }
    }

    handleId = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    handlePw = (e) => {
        this.setState({
            pw: e.target.value
        })
    }

    handleKeyUp = (e) => {
        if (e.keyCode !==8  && this.state.id && this.state.pw) {
            this.setState({
                activeness: "active"
            })
        }
        else if (e.keyCode === 8 && (this.state.id === "" || this.state.pw ==="")) {
            this.setState({
                activeness: "inactive"
            })
        }
    }


    render() {
        return (
            <body>
                <div className="loginContain">
                    <div className="logoImg">
                        <img alt="Instagram" src={logoText} />
                    </div>
                    <div className="inputButton">
                        <div>
                            <input 
                            type="text" className="userPw"
                            id="userName"
                            value = {this.state.id}
                            onChange={this.handleId}
                            onKeyUp={this.handleKeyUp}
                            placeholder="전화번호, 사용자 이름 또는 이메일" /> 
                        </div>
                        <div>
                            <input 
                            type="password" className="userPw" id="password"
                            value = {this.state.pw}
                            onChange={this.handlePw}
                            onKeyUp={this.handleKeyUp}
                            placeholder="비밀번호" />
                        </div>
                    </div>
                    <div className="loginButton">
                        <button 
                        className={`${this.state.activeness}`}
                        >로그인</button>
                    </div>
                    <div className="forgotPW">
                        <a href="https://www.instagram.com/accounts/password/reset/?hl=ko" title=
                        "Password 찾기" target="_blank">비밀번호를 잊으셨나요?</a>
                    </div>
                </div>
            </body>
            

        )
    }


}

