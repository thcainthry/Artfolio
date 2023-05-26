import React, { useState } from 'react';
import { GiShoppingBag } from 'react-icons/gi';
import "../style/main.css";
import "../style/AddProductForm.css";

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
  
  const [productsInCart, setProducts] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );

  const addsubmittedProductToCart = (product) => {
    const newProduct = {
      ...product,
      count: 1,
    };
    setProducts([...productsInCart, newProduct]);
  };

  const deleteSubmittedProduct = () => {
    setSubmittedProduct(null);
  };

  return (
    <div>
      {submittedProduct && (
        <div className="products">
          <div className="product" key={submittedProduct._id}>
            <img
              className="product-image"
              src={URL.createObjectURL(submittedProduct.image)}
              alt="Product"
            />
            <h4 className="product-name">{submittedProduct.name}</h4>
            <span className="product-price">{submittedProduct.price}$</span>
            <div className="buttons">
              <button className="btn" onClick={deleteSubmittedProduct}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h2>Add Product</h2>
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
    </div>
  );
};

export default AddProductForm;
