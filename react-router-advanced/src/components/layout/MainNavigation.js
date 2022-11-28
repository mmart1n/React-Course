import { NavLink, useLocation } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = (props) => {
  const { pathname } = useLocation();

  const isActive = () => {
    return (
      !pathname.includes("/quotes/new-quote") && pathname.includes("/quotes")
    );
  };
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes/"
              isActive={isActive}
              activeClassName={classes.active}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/quotes/new-quote" activeClassName={classes.active}>
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
