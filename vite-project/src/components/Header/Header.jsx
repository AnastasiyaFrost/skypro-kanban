import { Link } from "react-router-dom";
import { Container } from "../../styled/common/Common.styled";
import * as S from "./Header.styled";
import { useState } from "react";
import { appRoutes } from "../../lib/appRoutes";

export default function Header() {
  const [isOpened, setIsOpened] = useState(false);
  function togglePopup () {
    setIsOpened ((prev) => !prev);
  }

  return (
    <S.StyledHeader>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogo className="_show _light">
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderLogo className="_dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderNav>
            <Link to={"/task/add"}>
              <S.HeaderMainNewCard id="btnMainNew">
                <S.HeaderBtnMainNewCardText>
                  Создать новую задачу
                </S.HeaderBtnMainNewCardText>
              </S.HeaderMainNewCard>
            </Link>
            <S.HeaderUser onClick={togglePopup} href="#user-set-target">
              Ivan Ivanov
            </S.HeaderUser>
            {isOpened && (
              <S.HeaderPopUserSet id="user-set-target">
                {/* <a href="">x</a> */}
                <S.HeaderPopUserSetName>Ivan Ivanov</S.HeaderPopUserSetName>
                <S.HeaderPopUserSetMail>
                  ivan.ivanov@gmail.com
                </S.HeaderPopUserSetMail>
                <S.HeaderPopUserSetTheme>
                  <S.HeaderPopUserSetThemeText>
                    Темная тема
                  </S.HeaderPopUserSetThemeText>
                  <S.HeaderPopUserSetThemeInp
                    // onChange={toggleTheme}
                    type="checkbox"
                    name="checkbox"
                  />
                </S.HeaderPopUserSetTheme>
                <Link to={appRoutes.EXIT}>
                  <S.HeaderPopUserSetBtn>Выйти</S.HeaderPopUserSetBtn>
                </Link>
              </S.HeaderPopUserSet>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
