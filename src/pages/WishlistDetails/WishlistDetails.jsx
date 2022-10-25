import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

// import { wishlists } from "../../components/data"

// components
// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import ItemCard from "../../components/ItemCard/ItemCard"
import styles from "./WishlistDetails.module.css"

// Services
import * as wishlistService from "../../services/wishlistService"

const WishlistDetails = (props) => {
  const { id } = useParams()

  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await wishlistService.show(id)
      setWishlist(data)
    }
    fetchWishlist()
  }, [id])

  // if (!wishlist) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <div>
        {/* <div className={styles.header}> */}
          <h1>{wishlist.name}</h1>
          <div className={styles.discription}>
            <p>{wishlist.description}</p>
          </div>
          <Link to={`/wishlists/${wishlist._id}/new`}>
            <button>Add Item</button>
          </Link>
        </div>
        {/* <div className={styles.cardsContainer}>
          {wishlist.items.map((item, idx) => (
            <ItemCard key={idx} item={item} />
          ))}
        </div> */}
      </article>
    </main>
  )
}

export default WishlistDetails