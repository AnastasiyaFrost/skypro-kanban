import { useState } from "react";
import { Container } from "../../styled/common/Common.styled";
import { HeaderBlock, HeaderBtnMainNew, HeaderBtnMainNewLink, HeaderLogo, HeaderNav, HeaderPopUserSet, HeaderPopUserSetBtn, HeaderPopUserSetLink, HeaderPopUserSetMail, HeaderPopUserSetName, HeaderPopUserSetTheme, HeaderPopUserSetThemeInp, HeaderPopUserSetThemeText, HeaderUser, StyledHeader } from "./Header.styled";
export default function Header() {
  
const [theme, setTheme] = useState("light");
const toggleTheme = () => {
  if (theme === "light") {
    setTheme("dark");
  } else {
    setTheme("light");
  }
};

  return (
    <StyledHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderNav>
            <HeaderBtnMainNew id="btnMainNew">
              <HeaderBtnMainNewLink href="#popNewCard">
                Создать новую задачу
              </HeaderBtnMainNewLink>
            </HeaderBtnMainNew>
            <HeaderUser href="#user-set-target">Ivan Ivanov</HeaderUser>
            <HeaderPopUserSet id="user-set-target">
              {/* <a href="">x</a> */}
              <HeaderPopUserSetName>Ivan Ivanov</HeaderPopUserSetName>
              <HeaderPopUserSetMail>ivan.ivanov@gmail.com</HeaderPopUserSetMail>
              <HeaderPopUserSetTheme>
                <HeaderPopUserSetThemeText>
                  Темная тема
                </HeaderPopUserSetThemeText>
                <HeaderPopUserSetThemeInp
                  onChange={toggleTheme}
                  type="checkbox"
                  name="checkbox"
                />
              </HeaderPopUserSetTheme>
              <HeaderPopUserSetBtn type="button">
                <HeaderPopUserSetLink href="#popExit">
                  Выйти
                </HeaderPopUserSetLink>
              </HeaderPopUserSetBtn>
            </HeaderPopUserSet>
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
