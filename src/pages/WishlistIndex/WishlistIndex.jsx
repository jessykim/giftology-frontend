import styles from './WishlistIndex.module.css'
import WishlistCard from "../../components/WishlistCard/WishlistCard"
import { wishlists } from "../../components/data"

const WishlistIndex = (props) => {
  return (
    <main className={styles.container}>
      <h1>Wishlist Index</h1>
      {/* <button>Create Wishlist</button> */}

      {wishlists.map((wishlist, idx) => (
        <WishlistCard wishlist={wishlist} key={idx} 
        />
      ))}
    </main>
  )
}

export default WishlistIndex