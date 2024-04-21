import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useState } from "react";
import { signin } from "../../api";
import { useUser } from "../../hooks/useUser";
import * as S from "./SigninPage.styled";

export default function Signin() {
  const { login } = useUser();
  const navigate = useNavigate();
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
    await signin(loginData)
      .then((responseData) => {
        login(responseData.user);
        navigate(appRoutes.MAIN);
      })
      .catch((error) => {
        alert(error.message + ": попробуйте повторить запрос");
      });
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              Вход
            </S.ModalTtl>
            <S.ModalFormLogin id="formLogIn" action="#">
              <S.ModalInput
                type="text"
                onChange={handleInputChange}
                name="login"
                value={loginData.login}
                id="formlogin"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                onChange={handleInputChange}
                name="password"
                value={loginData.password}
                id="formpassword"
                placeholder="Пароль"
              />

              <S.ModalButtonEnter
                onClick={handleLogin}
                id="btnEnter"
              >
                Войти
              </S.ModalButtonEnter>

              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to={appRoutes.SIGNUP}>Регистрируйтесь здесь</Link>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}
