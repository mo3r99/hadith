import Styles from './Navbar.module.css'

import Logo from '/src/assets/book.png'

import homeLogo from '/src/assets/home.png'
import collectionsLogo from '/src/assets/collections.png'
import currentLogo from '/src/assets/current.png'
import settingsLogo from '/src/assets/settings.png'
import favouritesLogo from '/src/assets/favourites.png'

function Navbar() {
  return (
    <nav>
        <ul>
            <li><img src={homeLogo} /><span>Home</span></li>
            <li><img src={collectionsLogo} /><span>Collections</span></li>
            <li className={Styles.bold}><img src={currentLogo} /><span>Current</span></li>
            <li className={Styles.right}><img src={favouritesLogo} /><span>Favourites</span></li>
            <li className={Styles.right}><img src={settingsLogo} /><span>Settings</span></li>
        </ul>
        <div className={Styles.logo}>
            <img src={Logo} />
        </div>
    </nav>
  )
}

export default Navbar