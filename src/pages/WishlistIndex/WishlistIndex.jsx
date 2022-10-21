import styles from './WishlistIndex.module.css'
import WishlistCard from "../../components/WishlistCard/WishlistCard"

const WishlistIndex = (props) => {
  return (
    <main className={styles.container}>
      <h1>Wishlist Index</h1>
      {/* <button>Create Wishlist</button> */}
      <WishlistCard />
    </main>
  )
}

export default WishlistIndex