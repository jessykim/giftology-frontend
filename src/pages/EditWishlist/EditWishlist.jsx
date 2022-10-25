import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditWishlist.module.css'
import WishlistForm from '../../components/WishlistForm/WishlistForm'

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
    <main className={styles.container}>
      <WishlistForm wishlistForm={wishlistForm} handleChange={handleChange} handleSubmit={handleSubmit} />
    </main>
  )
}

export default EditWishlist