import { useState } from "react"
import styles from './NewWishlist.module.css'
import WishlistForm from '../../components/WishlistForm/WishlistForm'

const NewWishlist = (props) => {
  const [wishlistForm, setWishlistForm] = useState({
    name: '',
    description: '',
    items: [],
  })

  const handleChange = ({ target }) => {
    setWishlistForm({ ...wishlistForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		props.handleAddWishlist(wishlistForm)
  }

  return (
    <main className={styles.container}>
      <WishlistForm wishlistForm={wishlistForm} handleChange={handleChange} handleSubmit={handleSubmit} />
    </main>
  )
}

export default NewWishlist