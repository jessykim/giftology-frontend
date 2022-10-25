import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

import { wishlists } from "../../components/data"

// components
import Loading from "../Loading/Loading"
// import AuthorInfo from "../../components/AuthorInfo/AuthorInfo"
import ItemCard from "../../components/ItemCard/ItemCard"
import styles from "./WishlistDetails.module.css"

// Services
// import * as wishlistService from "../../services/wishlistService"

const WishlistDetails = (props) => {
  // const { id } = useParams()
  // const [wishlist, setWishlist] = useState(null)

  // useEffect(() => {
  //   const fetchWishlist = async () => {
  //     const data = await wishlistService.show(id)
  //     setWishlist(data)
  //   }
  //   fetchWishlist()
  // }, [id])

  // setWishlist(wishlists[0])

  let wishlist = wishlists[0]

  console.log("Styles:", styles);

  // if (!wishlist) return <Loading />

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h1>{wishlist.name}</h1>
          <p>{wishlist.description}</p>
          <Link to="/wishlists/1/new">
            <button>Add Item</button>
          </Link>
        </header>
        <div className={styles.cardsContainer}>
          {wishlist.items.map((item, idx) => (
            <ItemCard key={idx} item={item} />
          ))}
        </div>
      </article>
    </main>
  )
}

export default WishlistDetails