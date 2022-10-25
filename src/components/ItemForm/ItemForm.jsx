import styles from "./ItemForm.module.css"

const ItemForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.itemForm}>
      <label htmlFor="name-input">Name</label>
      <input
        required
        type="text"
        name="name"
        id="name-input"
        value={props.itemForm.name}
        placeholder="Name"
        onChange={props.handleChange}
      />
      <label htmlFor="type-input">Type</label>
      <textarea
        required
        type="text"
        name="type"
        id="type-input"
        value={props.itemForm.type}
        placeholder="Type"
        onChange={props.handleChange}
      />
      <label htmlFor="desc-input">Description</label>
      <textarea
        required
        type="text"
        name="desc"
        id="desc-input"
        value={props.itemForm.desc}
        placeholder="Description"
        onChange={props.handleChange}
      />
      <label htmlFor="url-input">Where to buy</label>
      <input
        required
        type="url"
        name="url"
        id="url-input"
        value={props.itemForm.url}
        placeholder="URL"
        onChange={props.handleChange}
      />
      <label htmlFor="img-input">Image</label>
      <input
        required
        type="url"
        name="img"
        id="img-input"
        value={props.itemForm.img}
        placeholder="Image URL"
        onChange={props.handleChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
}

export default ItemForm;