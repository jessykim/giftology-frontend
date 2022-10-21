

const WishlistForm = (props) => {  
  return ( 
    <>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="name-input">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name-input"
          value={props.wishlistForm.name}
          placeholder="Name"
          onChange={props.handleChange}
        />
        <label htmlFor="description-input">Description</label>
				<textarea
          required
          type="text"
          name="description"
          id="description-input"
          value={props.wishlistForm.description}
          placeholder="Description"
          onChange={props.handleChange}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </>
  );
}

export default WishlistForm;
