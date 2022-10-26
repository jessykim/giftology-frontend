import { Link } from "react-router-dom"
import styles from './WishlistCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const WishlistCard = ({ wishlist, handleDeleteWishlist }) => {
  // console.log(wishlist)
  return (
    <div className={styles.container}>
      <Link to={`/wishlists/${wishlist._id}/`}>
        <article>
          <div className={styles.title}>
            {wishlist.name}
          </div>
          {/* <p>
            {wishlist.description}
          </p> */}
        </article>
      </Link>
      <div>
        <Link to={`/wishlists/${wishlist._id}/edit`} state={wishlist}>
          <button>Edit</button>
        </Link>
        <button onClick={() => handleDeleteWishlist(wishlist._id)}>Delete</button>
      </div>
    </div>
  )
}

export default WishlistCard