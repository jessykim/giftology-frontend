import { Link } from 'react-router-dom'
import styles from './WishlistIndex.module.css'
import WishlistCard from "../../components/WishlistCard/WishlistCard"
// import { wishlists } from "../../components/data"

const WishlistIndex = (props) => {
  const wishlists = props.wishlists
  // console.log(wishlists)
  return (
    <main className={styles.container}>
      <h1>Wishlist Index</h1>
      <Link to="/wishlists/new">
        <button id="create">Create</button>
      </Link>

      {wishlists.map((wishlist, idx) => (
        <WishlistCard wishlist={wishlist} key={idx} handleDeleteWishlist={props.handleDeleteWishlist} />
      ))}
    </main>
  )
}

export default WishlistIndex