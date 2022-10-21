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
		// props.handleAddWishlist(form)
  }

  return (
    <main className={styles.container}>
      <WishlistForm wishlistForm={wishlistForm} />
    </main>
  )
}

export default NewWishlist