import { Link } from "react-router-dom"
import styles from './WishlistCard.module.css'

const WishlistCard = ({ wishlist, handleDeleteWishlist }) => {
  return (
    <div className={styles.wishlistBox}>
      <div className={styles.title}>{wishlist.name}</div>
      <div>
        <Link to={`/wishlists/${wishlist._id}`}>
          <button className={styles.viewButton}>View wishlist</button>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link to={`/wishlists/${wishlist._id}/edit`} state={wishlist}>
          <button className={styles.viewButton}>Edit</button>
        </Link>
        <button onClick={() => handleDeleteWishlist(wishlist._id)} className={styles.viewButton}>Delete</button>
      </div>
    </div>
  )
}

export default WishlistCard