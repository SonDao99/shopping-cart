import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const ShopItem = (props) => {
	const params = useParams();
  const navigate = useNavigate();

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
				<button onClick={() => {navigate(-1)}} className="shadowBtn">Back to Shop</button>
			</div>
		</div>
	)
};

export default ShopItem;