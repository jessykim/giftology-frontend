import { Link } from "react-router-dom"
import styles from './ItemCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ItemCard = ({ item }) => {
  const handleChange = ({ target }) => {
    console.log(target)
    // setForm({ ...form, [target.name]: target.value })
  }

  return (
    <>
      <article className={styles.container}>
        <img src={item.img} alt="img" className={styles.img} />
        <h2>
          {item.name}
        </h2>
        <h5>{item.category}</h5>
        <p>
          {item.desc}
        </p>
        <div className={styles.purchased}>
          <label htmlFor="purchased-input">Purchased</label>
          <input type="checkbox" id="purchased-input" />
        </div>
        <a href={item.url}>
          <button className={styles.buy}>Buy🛒</button>
        </a>
        <button>Delete</button>
      </article>
      {/* <Link to="/wishlist/1/edit-item">
        <button onClick={() => handleChange()}>Edit</button>
      </Link> */}
    </>
  )
}

export default ItemCard