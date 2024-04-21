import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../hooks/useUser";
import * as E from "./PopExit.styled";

export default function PopExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <E.PopExitDiv>
      <E.Container>
        <E.Block>
          <E.Ttl>Выйти из аккаунта?</E.Ttl>

          <form action="#">
            <E.FormGroup>
              <E.ExitYes
                onClick={() => {
                  logout();
                  navigate(appRoutes.SIGNIN);
                }}
              >
                <p>Да, выйти</p>
              </E.ExitYes>

              <E.ExitNo
                onClick={() => {
                  navigate(appRoutes.MAIN);
                }}
              >
                <p>Нет, остаться</p>
              </E.ExitNo>
            </E.FormGroup>
          </form>
        </E.Block>
      </E.Container>
    </E.PopExitDiv>
  );
}
