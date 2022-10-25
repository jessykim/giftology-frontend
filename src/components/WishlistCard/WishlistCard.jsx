import { Link } from "react-router-dom"
import styles from './WishlistCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const WishlistCard = ({ wishlist, handleDeleteWishlist }) => {
  // console.log(wishlist)
  return (
    <>
      <Link to={`/wishlists/${wishlist._id}/`}>
        <article className={styles.container}>
          <h2>
            {wishlist.name}
          </h2>
          <p>
            {wishlist.description}
          </p>
        </article>
      </Link>
      <Link to={`/wishlists/${wishlist._id}/edit`} state={wishlist} >
        <button>Edit</button>
      </Link>
      <button onClick={() => handleDeleteWishlist(wishlist._id)}>Delete</button>
    </>
  )
}

export default WishlistCard