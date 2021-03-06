import React, { Component } from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { LOGIN_API } from '../../config';
import { Link } from 'react-router-dom';
import './Login.scss';
import '../../Styles/reset.scss';
import '../../Styles/common.scss';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  inputIdValidator = email => {
    if (email === '') return '';
    if (email.length <= 2) return 'inputFail';
    if (email.length > 3) return 'inputSuccess';
  };

  inputPwValidator = pw => {
    if (pw === '') return '';
    if (pw.length > 8) return 'inputSuccess';
    if (pw.length !== '') return 'inputFail';
  };

  buttonValidator = (email, pw) => {
    if (email.length > 3 && pw.length > 8) return 'btnSuccess';
    return '';
  };

  goToMain = e => {
    e.preventDefault();
    fetch(`${LOGIN_API}`, {
      method: 'POST',
      body: JSON.stringify({
        login_id: this.state.email,
        password: this.state.password,
      }),
    })
      .then(data => data.json())
      .then(data => {
        if (data.MESSAGE === 'SUCCESS') {
          alert('로그인 성공');
          this.props.history.push('/');
          localStorage.setItem('token', data.TOKEN);
        } else {
          alert('로그인 실패');
        }
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <Nav />
        <section className="login">
          <div className="loginContainer">
            <h2>로그인</h2>
            <form>
              <div className="loginInput">
                <input
                  onChange={this.handleInput}
                  type="text"
                  placeholder="아이디"
                  className={`inputId ${this.inputIdValidator(email)}`}
                  name="email"
                />
                <img
                  src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_id.png"
                  alt="아이디 이미지입니다"
                />
                <i
                  class={`far fa-check-circle ${this.inputIdValidator(email)}`}
                />
              </div>
              <div className="loginInput">
                <input
                  onChange={this.handleInput}
                  type="password"
                  placeholder="비밀번호"
                  className={`inputId ${this.inputPwValidator(password)}`}
                  name="password"
                />
                <img
                  src="https://lush.co.kr/data/skin/front/howling/img/etc/icon_password.png"
                  alt="비밀번호 이미지입니다"
                />
                <i
                  className={`far fa-check-circle ${this.inputPwValidator(
                    password
                  )}`}
                />
              </div>
              <div className="loginSave">
                <div className="save">
                  <label>
                    <input type="checkbox" className="checkbox" />
                    아이디 저장
                  </label>
                </div>
              </div>
              <button
                onClick={this.goToMain}
                className={`loginBtn ${this.buttonValidator(email, password)}`}
              >
                <span>로그인</span>
              </button>
              <div className="loginMenu">
                <Link to="/signUp">
                  <button className="btnMenu">회원가입</button>
                </Link>
                <button className="btnMenu">아이디 찾기</button>
                <button className="btnMenu">비밀번호 찾기</button>
              </div>
            </form>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default Login;
