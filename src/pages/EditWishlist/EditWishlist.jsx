import styles from './EditWishlist.module.css'
import WishlistForm from '../../components/WishlistForm/WishlistForm'
import { useState } from "react"
import { useLocation } from "react-router-dom"

const EditWishlist = (props) => {
  const { state } = useLocation()
  const [wishlistForm, setWishlistForm] = useState(state)

  const handleChange = ({ target }) => {
    setWishlistForm({ ...wishlistForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleUpdateWishlist(wishlistForm)
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <WishlistForm handleUpdateWishlist={props.handleUpdateWishlist} wishlistForm={wishlistForm} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </main>
  )
}

export default EditWishlist