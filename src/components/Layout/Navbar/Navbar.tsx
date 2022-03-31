import * as React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import authContext from "../../../store/auth-context";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar: React.FC = () => {
  const [clicked, setClicked] = React.useState<boolean>(true);
  const authCtxt = React.useContext(authContext);
  const isLoggedIn = authCtxt.isLoggedIn;

  const clickHandler = () => {
    setClicked((prevState) => !clicked);
  };
  const closeMobileMenuHandler = () => {
    setClicked(false);
  };

  return (
    <div className={styles["nav-container"]}>
      <div
        className={clicked ? styles["navbar-menu-active"] : styles["nav-item"]}
      >
        {!isLoggedIn && (
          <Link
            to="/signin"
            className={styles["nav-link"]}
            onClick={closeMobileMenuHandler}
          >
            Sign In
          </Link>
        )}
        <Link
          to="/signup"
          className={styles["nav-link"]}
          onClick={closeMobileMenuHandler}
        >
          Sign Up
        </Link>
        <Link
          to="/new-idea"
          className={styles["nav-link"]}
          onClick={closeMobileMenuHandler}
        >
          Add New Idea
        </Link>
        <Link
          to="/"
          className={styles["nav-link"]}
          onClick={closeMobileMenuHandler}
        >
          Home
        </Link>
        <Link
          to="/ideas"
          className={styles["nav-link"]}
          onClick={closeMobileMenuHandler}
        >
          <ActionLightbulbOutline />
        </Link>
        {isLoggedIn && (
          <button onClick={authCtxt.logout} className={styles["nav-button"]}>
            Logout
          </button>
        )}
      </div>
      <div className={styles["navbar-toggle-icons"]} onClick={clickHandler}>
        {/* <FontAwesomeIcon
          icon={clicked ? faXmark : faBars}
          onClick={clickHandler}
        /> */}
        {clicked ? <CloseIcon /> : <MenuIcon />}
      </div>
    </div>
  );
};
export default Navbar;
