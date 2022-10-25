import styles from "./WishlistForm.module.css"
import { useState } from "react"
import { useLocation } from "react-router-dom"

const WishlistForm = (props) => {  
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
    <>
      <form onSubmit={handleSubmit} className={styles.itemForm}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={wishlistForm.name}
          placeholder="Name"
          onChange={handleChange}
        />
        <label htmlFor="description-input">Description</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={wishlistForm.description}
          placeholder="Description"
          onChange={handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default WishlistForm;
