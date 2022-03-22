import React from "react";
import { useParams } from "react-router-dom";

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
			<h2>{props.items[params.id].name}</h2>
			<img src={props.items[params.id].img} alt='itemImage' style={{height:'300px', width:'auto'}}/>
			<p>{props.items[params.id].price} USD</p>
			<button onClick={addToCart} className="addToCart">Add to Cart</button>
		</div>
	)
};

export default ShopItem;