
import React from "react";
import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrowerToggle from "../SideDrawer/DrawerToggler/DrowerToggle";

const toolbar = (props) => {
  return (
    <header className="Toolbar">
      <DrowerToggle clicked={props.drowerToggleClicked} />
      <Logo height="50px" />
      <nav className="DesktopOnly">
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default toolbar;
