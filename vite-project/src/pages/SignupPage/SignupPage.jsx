import { Link, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper/Wrapper";
import { appRoutes } from "../../lib/appRoutes";
import { signup } from "../../api";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

export default function Register() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [registerData, setregisterData] = useState({
    login: "",
    name: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setregisterData({
      ...registerData,
      [name]: value,
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    await signup(registerData)
      .then((responseData) => {
        login(responseData.user);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error.message + ": попробуйте повторить запрос");
      });
  };

  return (
    <Wrapper>
      <div className="container-signup">
        <div className="modal">
          <div className="modal__block">
            <div className="modal__ttl">
              <h2>Регистрация</h2>
            </div>
            <form className="modal__form-login" id="formLogUp" action="#">
              <input
                className="modal__input first-name"
                type="text"
                onChange={handleInputChange}
                name="first-name"
                id="first-name"
                value={registerData.name}
                placeholder="Имя"
              />
              <input
                className="modal__input login"
                type="text"
                onChange={handleInputChange}
                name="login"
                id="loginReg"
                value={registerData.login}
                placeholder="Эл. почта"
              />
              <input
                className="modal__input password-first"
                type="password"
                onChange={handleInputChange}
                name="password"
                value={registerData.password}
                id="passwordFirst"
                placeholder="Пароль"
              />
              <button
                onClick={handleRegister}
                className="modal__btn-signup-ent _hover01"
                id="SignUpEnter"
              >
                <a href="../main.html">Зарегистрироваться</a>{" "}
              </button>
              <div className="modal__form-group">
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={appRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
