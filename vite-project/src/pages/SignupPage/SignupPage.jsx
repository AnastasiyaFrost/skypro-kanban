import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { signup } from "../../api";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";
import * as S from "../SigninPage/SigninPage.styled";


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
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalFormLogin id="formLogUp" action="#">
              <S.ModalInput
                type="text"
                onChange={handleInputChange}
                name="first-name"
                id="first-name"
                value={registerData.name}
                placeholder="Имя"
              />
              <S.ModalInput
                type="text"
                onChange={handleInputChange}
                name="login"
                id="loginReg"
                value={registerData.login}
                placeholder="Эл. почта"
              />
              <S.ModalInput
                type="password"
                onChange={handleInputChange}
                name="password"
                value={registerData.password}
                id="passwordFirst"
                placeholder="Пароль"
              />
              <S.ModalButtonEnter
                onClick={handleRegister}
                id="SignUpEnter"
              >
                Зарегистрироваться
              </S.ModalButtonEnter>
              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт?{" "}
                  <Link to={appRoutes.SIGNIN}>Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalFormLogin>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}
