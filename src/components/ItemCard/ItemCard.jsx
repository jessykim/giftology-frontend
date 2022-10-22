import { Link } from "react-router-dom"
import styles from './ItemCard.module.css'

// Components
// import Icon from "../Icon/Icon"
// import AuthorInfo from "../AuthorInfo/AuthorInfo"

const ItemCard = ({ item }) => {
  return (
    <>
      <article className={styles.container}>
        <img src={item.img} alt="img" />
        <h2>
          {item.name}
        </h2>
        <h3>{item.type}</h3>
        <h3>{item.url}</h3>
        <p>
          {item.desc}
        </p>
        <label htmlFor="purchased-input">Purchased</label>
        <input type="checkbox" id="purchased-input" />
      </article>
    </>
  )
}

export default ItemCard