import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { FaSignOutAlt } from "react-icons/fa";
import s from "./UserMenu.module.css";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}!</p>

      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={s.logoutButton}
        aria-label="Logout"
      >
        Log Out
      </button>
    </div>
  );
};
