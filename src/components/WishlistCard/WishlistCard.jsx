import { Link } from "react-router-dom"
import styles from './WishlistCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const WishlistCard = ({ wishlist }) => {
  console.log(wishlist)
  return (
    <div className={styles.container}>
      <Link to={`/wishlists/${wishlist._id}/`}>
        <article>
          <h2>
            {wishlist.name}
          </h2>
          <p>
            {wishlist.description}
          </p>
        </article>
      </Link>
      <div>
        <Link to={`/wishlists/${wishlist._id}/edit`}>
          <button>Edit</button>
        </Link>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default WishlistCard