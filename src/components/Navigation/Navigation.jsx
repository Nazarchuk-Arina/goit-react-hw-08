import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={s.nav}>
      <NavLink className={s.link} to="/" aria-label="Home">
        <span className={s.text}>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.link} to="/contacts" aria-label="Contacts">
          <span className={s.text}>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;