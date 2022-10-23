import { useState } from "react"
import { useLocation } from "react-router-dom"
import styles from './EditItem.module.css'
import ItemForm from "../../components/ItemForm/ItemForm"

const EditItem = (props) => {
  const { state } = useLocation()
  const [itemForm, setItemForm] = useState(state)

  const handleChange = ({ target }) => {
    setItemForm({ ...itemForm, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
		// props.handleUpdateItem(itemForm)
  }

  return (
    <main className={styles.container}>
      <ItemForm itemForm={itemForm} handleChange={handleChange} handleSubmit={handleSubmit} />
    </main>
  )
}

export default EditItem