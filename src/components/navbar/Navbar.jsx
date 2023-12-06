import { NavLink } from "react-router-dom";

import Styles from "./Navbar.module.css";

import Logo from "/src/assets/book.png";

import homeLogo from "/src/assets/home.png";
import collectionsLogo from "/src/assets/collections.png";
import currentLogo from "/src/assets/current.png";
import settingsLogo from "/src/assets/settings.png";
import favouritesLogo from "/src/assets/favourites.png";
import { useContext } from "react";
import { HadithContext } from "../../store/AppContext";

function Navbar() {
  const currentReadingContext = useContext(HadithContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <img src={homeLogo} />
            <span>Home</span>
          </NavLink>
        </li>
        <li
          className={({ isActive, isPending }) =>
            isPending ? Styles.pending : isActive ? Styles.active : ""
          }
        >
          <NavLink to="/collections">
            <img src={collectionsLogo} />
            <span>Collections</span>
          </NavLink>
        </li>
        <li
          className={({ isActive, isPending }) =>
            isPending ? Styles.pending : isActive ? Styles.active : ""
          }
        >
          <NavLink to={`/hadith/${currentReadingContext.bookName}/${currentReadingContext.hadithNo}`}>
            <img src={currentLogo} />
            <span>Current</span>
          </NavLink>
        </li>
        <li
          className={({ isActive, isPending }) =>
            isPending ? Styles.pending + "right" : isActive ? Styles.active + "right" : "right"
          }
        >
          <NavLink to="/favourites">
            <img src={favouritesLogo} />
            <span>Favourites</span>
          </NavLink>
        </li>
        <li
          className={({ isActive, isPending }) =>
            isPending ? Styles.pending : isActive ? Styles.active : ""
          }
        >
          <NavLink to="/settings">
            <img src={settingsLogo} />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
      <div className={Styles.logo}>
        <img src={Logo} />
      </div>
    </nav>
  );
}

export default Navbar;
