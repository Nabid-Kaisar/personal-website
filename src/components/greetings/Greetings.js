import { LANDING_NAV_ROUTES } from "../../common/constants/CONSTANTS";
import { Link } from "react-router-dom";

export default function Greetings() {
  return (
    <>
      <header>
        Feel free to explore and learn more about me. Greetings, I am Nabid, a
        professional software engineer.
      </header>
      <nav>
        {LANDING_NAV_ROUTES.map((route, idx) => {
          return <Link to={route.route}>{route.pathName}</Link>;
        })}
      </nav>
      <br />
    </>
  );
}
