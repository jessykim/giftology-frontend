import styles from "./WishlistForm.module.css"

const WishlistForm = (props) => {  
  return ( 
    <>
      <form onSubmit={props.handleSubmit} className={styles.container}>
        {props.editForm ?
        <h1>Edit Wishlist</h1>
        : <h1>New Wishlist</h1>
}
        <label htmlFor="name-input" className={styles.label}>Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={props.wishlistForm.name}
          placeholder="Birthday"
          autoComplete="off"
          onChange={props.handleChange}
        />
        <label htmlFor="description-input" className={styles.label}>Description</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={props.wishlistForm.description}
          placeholder="As y'all know, or should know, my bday is..."
          autoComplete="off"
          onChange={props.handleChange}
        />
        {props.editForm ?
        <button type="submit" className={styles.button}>Save Wishlist</button>
        : <button type="submit" className={styles.button}>Add Wishlist</button>
}
      </form>
    </>
  );
}

export default WishlistForm;
