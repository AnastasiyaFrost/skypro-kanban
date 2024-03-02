import { Container } from "../../styled/common/Common.styled";
import * as S from "./Header.styled";
export default function Header() {
import { useState } from "react";

export default function Header({onCardAdd}) {
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
            <S.HeaderBtnMainNew onClick={onCardAdd} id="btnMainNew">
              <S.HeaderBtnMainNewLink href="#popNewCard">
                Создать новую задачу
              </S.HeaderBtnMainNewLink>
            </S.HeaderBtnMainNew>
            <S.HeaderUser onClick={togglePopup} href="#user-set-target">Ivan Ivanov</S.HeaderUser>
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
              <S.HeaderPopUserSetBtn type="button">
                <S.HeaderPopUserSetLink href="#popExit">
                  Выйти
                </S.HeaderPopUserSetLink>
              </S.HeaderPopUserSetBtn>
            </S.HeaderPopUserSet>
            )}
            

          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.StyledHeader>
  );
}
