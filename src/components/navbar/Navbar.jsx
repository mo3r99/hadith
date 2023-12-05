import Styles from "./Navbar.module.css";
import Logo from "/src/assets/book.png";
import homeLogo from "/src/assets/home.png";
import collectionsLogo from "/src/assets/collections.png";
import currentLogo from "/src/assets/current.png";
import settingsLogo from "/src/assets/settings.png";
import favouritesLogo from "/src/assets/favourites.png";
import "./Navbar.scss";

function Navbar() {
    return (
        <div className="navBar">
            <div className="container">
                <div className="left">
                    <div className="item">
                        <img src={homeLogo} />
                        <span>Home</span>
                    </div>

                    <div className="item">
                        <img src={collectionsLogo} />
                        <span>Collections</span>
                    </div>

                    <div className="item">
                        <img src={currentLogo} />
                        <span>Current</span>
                    </div>
                </div>
                <div className="middle">
                    <img src={Logo} />
                </div>
                <div className="right">
                    <div className="item">
                        <img src={favouritesLogo} />
                        <span>Favourites</span>
                    </div>

                    <div className="item">
                        <img src={settingsLogo} />
                        <span>Settings</span>
                    </div>
                </div>
            </div>
        </div>

        // <nav className="navBar">
        //     <ul>
        //         <li>
        //             <img src={homeLogo} />
        //             <span>Home</span>
        //         </li>
        //         <li>
        //             <img src={collectionsLogo} />
        //             <span>Collections</span>
        //         </li>
        //         <li className={Styles.bold}>
        //             <img src={currentLogo} />
        //             <span>Current</span>
        //         </li>

        //     </ul>
        //     <div className={Styles.logo}>
        //
        //     </div>
        // </nav>
    );
}

export default Navbar;
