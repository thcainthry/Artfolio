import React, {
	useState,
	useEffect,
} from "react";
import "../style/main.css";


const products = [
	{
		id: 1,
		name: "Vivamus vitae",
		description:
			"Vivamus vitae neque accumsan, ultrices nisl et, viverra magna. Fusce nec maximus sem.",
		price: 199,
		image: require("./images/lamadre.jpeg"),
	},
	{
		id: 2,
		name: "Fusce sit amet ipsum",
		description:
			"Maecenas fermentum urna egestas urna ullamcorper sodales. Sed a enim imperdiet, tempus massa a, iaculis tellus.",
		price: 229,
		image: require("../files/images/ConnectedByBlood/myfather'seyes.jpeg"),
	},
	{
		id: 3,
		name: "Etiam volutpat aliquam",
		description:
			"Praesent et orci vel nunc interdum aliquet et non dolor. Etiam eget finibus justo",
		price: 99,
		image: require(""),
	},
	{
		id: 4,
		name: "Lorem ipsum dolor",
		description:
			"Duis nibh sapien, placerat non nulla ac, suscipit laoreet tortor.",
		price: 119,
		image: require(""),
	},
	{
		id: 5,
		name: "Ultrices nisl",
		description:
			"Phasellus condimentum, ante et dictum placerat, nulla ipsum commodo lorem, ut mollis nibh turpis a metus.",
		price: 85,
		image: require(""),
	},
	{
		id: 6,
		name: "Curabitur in elementum tortor",
		description:
			" Mauris convallis diam nibh, non malesuada enim facilisis non. Etiam sapien augue, molestie a porta sed",
		price: 149,
		image: require(""),
	},
];

function Buy() {
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
	const addProductToCart = (product) => {
		const newProduct = {
			...product,
			count: 1,
		};
		setProducts([
			...productsInCart,
			newProduct,
		]);
	};

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
				       <button
					className="btn shopping-cart-btn"
					onClick={() =>
						setCartVisible(true)
					}>
				
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
			<main>
				<h2 className="title">
					Products
				</h2>
				<div className="products">
					{products.map((product) => (
						<div
							className="product"
							key={product.id}>
							<img
								className="product-image"
								src={
									product.image
								}
								alt={
									product.image
								}
							/>
							<h4 className="product-name">
								{product.name}
							</h4>
							
							<p>
								{
									product.description
								}
							</p>
							<span className="product-price">
								{product.price}$
							</span>
							<div className="buttons">
								<button className="btn">
									Detail
								</button>
								<button
									className="btn"
									onClick={() =>
										addProductToCart(
											product
										)
									}>
									Add to cart
								</button>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default Buy;

/*pershkrimet edhe qmimet ja shtoj tani */