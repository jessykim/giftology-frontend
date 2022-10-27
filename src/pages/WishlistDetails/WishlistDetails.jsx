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

const WishlistDetails = ({user, items, setItems, setWishlistId, handleDeleteItem}) => {
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
  }, [id, setItems, setWishlistId])

  return (
    <main className={styles.page}>
      <article className={styles.container}>
        {/* <div> */}
          {/* <div className={styles.header}> */}
          <div className={styles.wishlistName}>{wishlist.name}</div>
          <div className={styles.discription}>
            <p>{wishlist.description}</p>
          </div>
          {user.profile === wishlist.author ?
            <Link to={`/wishlists/${wishlist._id}/new-item`} >
              <button>Add Item</button>
            </Link>
          :
            <div></div>
          }
        {/* </div> */}
        <div className={styles.cardsContainer}> 
          {items.map((item, idx) => (
            <ItemCard key={idx} item={item} handleDeleteItem={handleDeleteItem} wishlistId={id} />
          ))}
        </div>
      </article>
    </main>
  )
}

export default WishlistDetails