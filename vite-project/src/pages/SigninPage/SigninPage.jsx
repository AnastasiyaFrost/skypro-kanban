import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { signin } from "../../api";

export default function Signin({loginUser}) {
  const [loginData, setLoginData] = useState({ login: "", password: "" });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    await signin(loginData).then((responseData) => {
      loginUser(responseData.user);
    }).catch((error)=>{
      alert(error.message + ": попробуйте повторить запрос")
    });
  };
  return (
    <Wrapper>
      <div className="container-signin">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Вход</h2>
            </div>
            <div className="modal__form-login" id="formLogIn" action="#">
              <input
                className="modal__input"
                type="text"
                onChange={handleInputChange}
                name="login"
                value={loginData.login}
                id="formlogin"
                placeholder="Эл. почта"
              />
              <input
                className="modal__input"
                type="password"
                onChange={handleInputChange}
                name="password"
                value={loginData.password}
                id="formpassword"
                placeholder="Пароль"
              />

              <button
                onClick={handleLogin}
                className="modal__btn-enter _hover01"
                id="btnEnter"
              >
                Войти
              </button>

              <div className="modal__form-group">
                <p>Нужно зарегистрироваться?</p>
                <Link to={appRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
