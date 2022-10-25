import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav className={styles.navbar}>
      {user ?
        <ul>
          <li>{user.name}</li>
          <li><Link to="/profiles">PROFILES</Link></li>
          <li><Link to="/wishlists">Wishlists</Link></li>
          <li><Link to="/friends">FRIENDS</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          {/* <li><Link to="/changePassword">Change Password</Link></li> */}
        </ul>
      :
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
