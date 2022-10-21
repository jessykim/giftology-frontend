import { Link } from "react-router-dom"
import styles from './WishlistCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const WishlistCard = ({ wishlist }) => {
  return (
    <>
      <h2>Wishlist #1</h2>
      <h2>
        {wishlist.name}
      </h2>
      <p>
        {wishlist.description}
      </p>
      {/* <Link to={`/wishlists/${wishlist._id}`}>
        <article className={styles.container}>
          <header>
            <span>
              <Icon category={blog.category} />
            </span>
            <AuthorInfo content={blog} />
          </header>
          <p>{wishlist.description}</p>
        </article>
      </Link> */}
    </>
  )
}

export default WishlistCard