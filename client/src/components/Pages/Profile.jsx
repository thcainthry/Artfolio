
import { AiOutlineUser, AiOutlineHome, AiOutlineGlobal, AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import '../style/Profile.css';
import React, {
	useState,
	useEffect,
} from "react";
import "../style/main.css";
import {GiShoppingBag}  from "react-icons/gi";
import ShoppingCart from "./ShoppingCart.jsx";
function Profile() {
    const [cartsVisibilty, setCartVisible] =
    useState(false);
const [productsInCart, setProducts] =
    useState(
        JSON.parse(
            localStorage.getItem(
                "shopping-cart"
            )
        ) || []
    );
useEffect(() => {
    localStorage.setItem(
        "shopping-cart",
        JSON.stringify(productsInCart)
    );
}, [productsInCart]);


const onQuantityChange = (
    productId,
    count
) => {
    setProducts((oldState) => {
        const productsIndex =
            oldState.findIndex(
                (item) =>
                    item.id === productId
            );
        if (productsIndex !== -1) {
            oldState[productsIndex].count =
                count;
        }
        return [...oldState];
    });
};

const onProductRemove = (product) => {
    setProducts((oldState) => {
        const productsIndex =
            oldState.findIndex(
                (item) =>
                    item.id === product.id
            );
        if (productsIndex !== -1) {
            oldState.splice(productsIndex, 1);
        }
        return [...oldState];
    });
};

  return (
    <div className="Buy">
    <ShoppingCart
        visibilty={cartsVisibilty}
        products={productsInCart}
        onClose={() =>
            setCartVisible(false)
        }
        onQuantityChange={
            onQuantityChange
        }
        onProductRemove={onProductRemove}
    />
    <div className="navbar">
        <h3 className="logos">Profile</h3>
        <button
            className="btn shopping-cart-btn"
            onClick={() =>
                setCartVisible(true)
            }>
            <GiShoppingBag size={24} />
            {productsInCart.length >
                0 && (
                <span className="product-count">
                    {
                        productsInCart.length
                    }
                </span>
            )}
        </button>
    </div>
    
    <div className="profile-container">
      <h2>Profile Form</h2>
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="firstName">
            <AiOutlineUser className="icon" />
            Emri:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            <AiOutlineUser className="icon" />
            Mbiemri:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="username">
            <AiOutlineUser className="icon" />
            Username:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="city">
            <AiOutlineHome className="icon" />
            City:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="country">
            <AiOutlineGlobal className="icon" />
            Country:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <AiOutlineMail className="icon" />
            Email:
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <AiOutlineLock className="icon" />
            Password:
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
      );
    }


export default Profile;
