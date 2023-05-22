import React, { useState } from 'react';
import { GiShoppingBag } from 'react-icons/gi';

const AddProductForm = () => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: null,
  });
  const [submittedProduct, setSubmittedProduct] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setNewProduct((prevState) => ({
      ...prevState,
      image: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(newProduct);
    setSubmittedProduct(newProduct);
    setNewProduct({
      name: '',
      price: '',
      image: null,
    });
  };

  return (
    <div className="add-product-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newProduct.name}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={newProduct.price}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn add-product-btn">
          <span>Add Product</span>
        </button>
      </form>
      {submittedProduct && (
        <div className="submitted-product">
          <h4>Submitted Product:</h4>
          <p>Name: {submittedProduct.name}</p>
          <p>Price: {submittedProduct.price}</p>
          <img src={URL.createObjectURL(submittedProduct.image)} alt="Product" />
        </div>
      )}
    </div>
  );
};

export default AddProductForm;
