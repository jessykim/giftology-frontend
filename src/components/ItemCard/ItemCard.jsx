import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import styles from './ItemCard.module.css'

// Services
import * as wishlistService from '../../services/wishlistService'

const ItemCard = ({ item, wishlistId, handleDeleteItem, user }) => {
  const [itemPurchase, setItemPurchase] = useState(false)

  const handlePurchaseItem = async (itemId, wishlistId) => {
    const updatedItem = await wishlistService.updatePurchased(itemId, wishlistId)
    setItemPurchase(updatedItem.purchased.bought)
  }

  useEffect(() => {
    const fetchItemPurchase = async () => {
      setItemPurchase(item.purchased.bought)
    }
    fetchItemPurchase()
  }, [item])

  return (
    <>
      <article className={styles.container}>
        <img src={item.img} alt="img" className={styles.img} />
        <h2>
          {item.name}
        </h2>
        <span>Category:</span>
        <h5>{item.category}</h5>
        <span>Description:</span>
        <p>
          {item.desc}
        </p>
        <div className={styles.purchased}>
          <label htmlFor="purchased-input">Purchased</label>
          <input
            type="checkbox"
            id="purchased-input"
            name="purchased"
            value={itemPurchase}
            onChange={() => handlePurchaseItem(item._id, wishlistId)}
            checked={itemPurchase}
            disabled={
              item.purchased.owner === user.profile || !item.purchased.owner ? false : true
            }
          />
        </div>
        <a href={item.url}>
          <button className={styles.buy}>Buy🛒</button>
        </a>
        <div className={styles.bottomBtns}>

          <button><Link to={`/item/${item._id}/edit-item`} state={item}>Edit</Link></button>

          <button onClick={() => handleDeleteItem(item._id)}>Delete</button>
        </div>
      </article>
    </>
  )
}

export default ItemCard