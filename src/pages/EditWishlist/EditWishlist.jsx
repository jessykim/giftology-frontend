import styles from './EditWishlist.module.css'
import WishlistForm from '../../components/WishlistForm/WishlistForm'

const EditWishlist = (props) => {
  return (
    <main className={styles.container}>
      <WishlistForm handleUpdateWishlist={props.handleUpdateWishlist} />
    </main>
  )
}

export default EditWishlist