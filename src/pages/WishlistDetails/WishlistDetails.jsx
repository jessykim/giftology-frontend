import { useState, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

// import { wishlists } from "../../components/data"

// components
// import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import ItemCard from "../../components/ItemCard/ItemCard"
import styles from "./WishlistDetails.module.css"

// Services
import * as wishlistService from "../../services/wishlistService"

const WishlistDetails = ({items, setItems, setWishlistId}) => {
  // const navigate = useNavigate()
  const { id } = useParams()

  const [wishlist, setWishlist] = useState({})

  useEffect(() => {
    const fetchWishlist = async () => {
      const data = await wishlistService.show(id)
      setWishlist(data)
      const itemData = await wishlistService.itemIndex(id)
      setItems(itemData)

      setWishlistId(id)
    }
    fetchWishlist()
  }, [id])

  return (
    <main className={styles.container}>
      <article>
        <div>
        {/* <div className={styles.header}> */}
          <h1>{wishlist.name}</h1>
          <div className={styles.discription}>
            <p>{wishlist.description}</p>
          </div>
          <Link to={`/wishlists/${wishlist._id}/new-item`} >
            <button>Add Item</button>
          </Link>
        </div>
        <div className={styles.cardsContainer}> 
          {items.map((item, idx) => (
            <ItemCard key={idx} item={item} />
          ))}
        </div>
      </article>
    </main>
  )
}

export default WishlistDetails