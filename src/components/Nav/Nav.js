import { useSelector } from "react-redux";
import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

function Nav() {
  const isAuthenticated = useSelector(store => store.auth.idToken !== null);

  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/products"> Products</NavItem>
      <NavItem url="/contacts">Contacts</NavItem>
      { isAuthenticated ? <NavItem url="/signout">Sign out</NavItem> : null }
      { !isAuthenticated ? <NavItem url="/auth">Sign in</NavItem> : null }
    </ul>
  );
}

export default Nav;