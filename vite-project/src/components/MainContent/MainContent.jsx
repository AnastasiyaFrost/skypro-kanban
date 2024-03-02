import { Container } from "../../styled/common/Common.styled";
import { MainBlock, StyledMain, StyledMainContent } from "./MainContent.styled";

export default function MainContent({ children }) {
  return (
    <StyledMain>
      <Container>
        <MainBlock>
          <StyledMainContent>{children}</StyledMainContent>
        </MainBlock>
      </Container>
    </StyledMain>
  );
}
