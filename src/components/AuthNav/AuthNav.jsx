import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";

const AuthNav = () => {
  return (
    <div className={s.auth}>
      <NavLink className={s.link} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={s.link} to="/login">
        Sign In
      </NavLink>
    </div>
  );
};

export default AuthNav;
