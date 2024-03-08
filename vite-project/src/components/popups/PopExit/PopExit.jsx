import { Link, useNavigate } from "react-router-dom";
import { appRoutes } from "../../../lib/appRoutes";
import { useUser } from "../../../hooks/useUser";

export default function PopExit() {
  const { logout } = useUser();
  const navigate = useNavigate();
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <Link to={appRoutes.SIGNIN}>
                <span
                  onClick={() => {
                    logout();
                    navigate(appRoutes.SIGNIN);
                  }}
                  className="pop-exit__exit-yes _hover01"
                  id="exitYes"
                >
                  Да, выйти
                </span>
              </Link>
              <Link to={appRoutes.MAIN}>
                <span
                  onClick={navigate(appRoutes.MAIN)}
                  className="pop-exit__exit-no _hover03"
                  id="exitNo"
                >
                  Нет, остаться
                </span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
