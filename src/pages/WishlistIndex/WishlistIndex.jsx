import { Link } from 'react-router-dom'
import styles from './WishlistIndex.module.css'
import WishlistCard from "../../components/WishlistCard/WishlistCard"

const WishlistIndex = (props) => {
  const wishlists = props.wishlists
  return (
    <div className={styles.outerContainer}>
      <h1>WISHLISTS</h1>
    <main className={styles.innerContainer}>
      <Link to="/wishlists/new">
        <button className={styles.create}>Create</button>
      </Link>
        {wishlists.map((wishlist, idx) => (
          <WishlistCard wishlist={wishlist} idx={idx}/>
        ))}
    </main>
    </div>
  )
}

export default WishlistIndex