import styles from './WishlistIndex.module.css'
import WishlistCard from "../../components/WishlistCard/WishlistCard"

const WishlistIndex = (props) => {
  return (
    <main className={styles.container}>
      <h1>Wishlist Index</h1>
      <WishlistCard />
    </main>
  )
}

export default WishlistIndex