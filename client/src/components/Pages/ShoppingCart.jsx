import React, { useState } from "react";
import "../style/ShoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
	visibilty,
	products,
	onProductRemove,
	onClose,
	onQuantityChange,
}) {
	// Calculate total price
	const totalPrice = products.reduce(
		(total, product) => total + product.price * product.count,
		0
	);
	const [isProcessing, setIsProcessing] = useState(false);
	const isLoggedIn = true;//qeto me ndrru me ba prej authentication me mor kur bahet login user
const handleCheckout = () => {
	if (isLoggedIn) {
		if (products.length > 0) {
			// Proceed with the checkout process
			setIsProcessing(true);

			// Add your logic here for processing the checkout
			// For example, you can display a success message and clear the cart
			alert("Checkout completed successfully!");
			const allProducts = [...products]; // Create a copy of the products array
			allProducts.forEach((product) => onProductRemove(product));

			setIsProcessing(false);
			onClose();
		} else {
			alert("Your cart is empty. Please add some products.");
		}
	} else {
		// Redirect to the login form
		window.location.href = "/LandingPage"; // Replace with the appropriate route
	}
};
	return (
		<div
			className="modal"
			style={{
				display: visibilty ? "block" : "none",
			}}>
			<div className="shoppingCart">
				<div className="header">
					<h2>Shopping cart</h2>
					<button className="btn close-btn" onClick={onClose}>
						<AiFillCloseCircle size={30} />
					</button>
				</div>
				<div className="cart-products">
					{products.length === 0 && (
						<span className="empty-text">
							Your basket is currently empty
						</span>
					)}
					{products.map((product) => (
						<div className="cart-product" key={product.id}>
							<img src={product.image} alt={product.name} />
							<div className="product-info">
								<h3>{product.name}</h3>
								<span className="product-price">
									{product.price * product.count}$
								</span>
							</div>
							<select
								className="count"
								value={product.count}
								onChange={(event) => {
									onQuantityChange(product.id, event.target.value);
								}}
							>
								{[...Array(10).keys()].map((number) => {
									const num = number + 1;
									return (
										<option value={num} key={num}>
											{num}
										</option>
									);
								})}
							</select>
							<button
								className="btn remove-btn"
								onClick={() => onProductRemove(product)}
							>
								<RiDeleteBin6Line size={20} />
							</button>
						</div>
					))}
					{products.length > 0 && (
						<div className="butonat">
							<span className="total-price">Total: {totalPrice}$</span>
					
							<button
								className="btn checkout-btn"
								onClick={handleCheckout}
								disabled={isProcessing}
							>
								{isLoggedIn ? "Proceed to Checkout" : "Proceed to Checkout "}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ShoppingCart;
