import React from "react";
import { useParams, Link } from "react-router-dom";

const ShopItem = (props) => {
	const params = useParams();

	const itemInCart = (id) => {
		for (let i = 0; i < props.cart.length; i += 1) {
			if (props.cart[i].id === id) {
				return [true, i];
			}
		}
		return [false, 0];
	}

	const addToCart = () => {
		const [inCart, cartIndex] = itemInCart(params.id);
		if (!inCart) {
			props.setCart([...props.cart].concat(
				{id:params.id, amount: 1}
			))
		} else {
			const oldAmount = props.cart[cartIndex].amount;
			const newCart = [...props.cart];
			newCart[cartIndex].amount = oldAmount + 1;
			props.setCart(newCart);
		}
	};

	return (
		<div className="shopItem">
			<img src={props.items[params.id].img} alt='itemImage'/>
			<div className="itemDesc">
				<h2>{props.items[params.id].name}</h2>
				<p>{props.items[params.id].price} USD</p>
				<button onClick={addToCart} className="addToCart shadowBtn">Add to Cart</button>
				<Link to={'/shop'}><button className="shadowBtn">Back to Shop</button></Link>
			</div>
		</div>
	)
};

export default ShopItem;