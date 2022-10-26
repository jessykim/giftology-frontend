import { Link } from "react-router-dom"
import styles from './ItemCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ItemCard = ({ item }) => {
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
        <Link to={`/item/${item._id}/edit-item`} state={item}>
            <button>Edit</button>
          </Link>
        <button>Delete</button>
      </article>
    </>
  )
}

export default ItemCard