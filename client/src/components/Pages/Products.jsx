import React, { useState, useEffect } from "react";
import "../style/main.css";
import { GiShoppingBag } from "react-icons/gi";
import ShoppingCart from "./ShoppingCart.jsx";
import AddProductForm from "./AddProductForm.jsx";

const products = [

	{
	  id: 1,
	  name: "..",
	  price: 199,
	  image: require("../assets/images/ConnectedByBlood/..jpeg"),
	},
	{
	  id: 2,
	  name: "Connected By blood",
	  price: 229,
	  image: require("../assets/images/ConnectedByBlood/lamadre.jpeg"),
  },
  {
	  id: 3,
	  name: "My father",
	  price: 499,
	  image: require("../assets/images/ConnectedByBlood/myfather'seyes.jpeg"),
  },
  {
	  id: 4,
	  name: "Diella En Rouge",
	  price: 119,
	  image: require("../assets/images/EnRouge/DiellaEnRouge.jpeg"),
  },
  {
	  id: 5,
	  name: "L'fille en Rouge",
	  price: 825,
	  image: require("../assets/images/EnRouge/L'filleEnRouge.jpeg"),
  },
  {
	  id: 6,
	  name: "Something en Rouge",
	  price: 149,
	  image: require("../assets/images/EnRouge/SomethingEnRouge.jpeg"),
  },
  {
	  id: 7,
	  name: "Fossils",
	  price: 199,
	  image: require("../assets/images/Fossils/fossils_2.jpeg"),
  },
  {
	  id: 8,
	  name: "Fossils",
	  price:200,
	  image: require("../assets/images/Fossils/fossils_3.jpeg"),
  },
  {
	  id: 9,
	  name: "Fossils",
	  price: 789,
	  image: require("../assets/images/Fossils/fossils.jpeg"),
  },
  {
	  id: 10,
	  name: "Double bass player",
	  price: 349,
	  image: require("../assets/images/Instrumentalism/DOUBLEBASSPLAYER.jpeg"),
  },
  {
	  id: 11,
	  name: "Foure Bassists",
	  price: 149,
	  image: require("../assets/images/Instrumentalism/FOUEBASSISTS.jpeg"),
  },
  {
	  id: 12,
	  name: "Urim's Guitar",
	  price: 199,
	  image: require("../assets/images/Instrumentalism/URIM'SGUITAR.jpeg"),
  },
  {
	  id: 13,
	  name: "From The New World",
	  price: 229,
	  image: require("../assets/images/NoCollection/FromTheNewWorld.jpeg"),
  },
  {
	  id: 14,
	  name: "Autoportrait",
	  price: 99,
	  image: require("../assets/images/Portraits/AUTOPORTRAIT.jpeg"),
  },
  {
	  id: 15,
	  name: "The Guitarist",
	  price: 229,
	  image: require("../assets/images/Portraits/THEGUITARIST.jpeg"),
  },
  {
	  id: 16,
	  name: "La traviata",
	  price: 99,
	  image: require("../assets/images/NoCollection/la traviata.jpeg"),
  },
  {
	  id: 17,
	  name: "The Painter",
	  price: 300,
	  image: require("../assets/images/Portraits/THEPAINTER.jpeg"),
  },
  {
	  id: 18,
	  name: "The Blind and his Orchestra",
	  price: 150,
	  image: require("../assets/images/TheConductorAndHisOrchestra/TheBlindConductorAndHisOrchestra.jpeg"),
  },
  {
	  id: 19,
	  name: "Requiem",
	  price: 129,
	  image: require("../assets/images/TheConductorAndHisOrchestra/REQUIEM.jpeg"),
  },
  {
	  id: 20,
	  name: "Allegro Con Brio",
	  price: 690,
	  image: require("../assets/images/TheLinesOfTheBlind/AllegroConBrio.jpeg"),}
  ];


function Buy() {
  const [cartVisibility, setCartVisibility] = useState(false);
  const [productsInCart, setProductsInCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  const [visibleProducts, setVisibleProducts] = useState(products);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);

  const onQuantityChange = (productId, count) => {
    setProductsInCart((oldState) => {
      const updatedProducts = oldState.map((item) => {
        if (item.id === productId) {
          return { ...item, count };
        }
        return item;
      });
      return updatedProducts;
    });
  };

  const onProductRemove = (product) => {
    setProductsInCart((oldState) => oldState.filter((item) => item.id !== product.id));
    setVisibleProducts((oldState) => oldState.filter((item) => item.id !== product.id));
  };

  const handleProductSubmit = (newProduct) => {
    const newProductId = Math.max(...products.map((product) => product.id)) + 1;
    newProduct.id = newProductId;
    setVisibleProducts((oldState) => [...oldState, newProduct]);
  };

  return (
    <div className="Buy">
      <ShoppingCart
        visibility={cartVisibility}
        products={productsInCart}
        onClose={() => setCartVisibility(false)}
        onQuantityChange={onQuantityChange}
        onProductRemove={onProductRemove}
      />
      <div className="navbar">
        <h3 className="logo">Products</h3>
      </div>
      <main>
        <h2 className="title"></h2>
        <div className="products">
          {visibleProducts.map((product) => (
            <div className="product" key={product.id}>
              <img className="product-image" src={product.image} alt={product.name} />
              <h4 className="product-name">{product.name}</h4>
              <span className="product-price">{product.price}$</span>
              <div className="buttons">
                <button className="btn" onClick={() => onProductRemove(product)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <AddProductForm onSubmit={handleProductSubmit} />
      </main>
    </div>
  );
}

export default Buy;
