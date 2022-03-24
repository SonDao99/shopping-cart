import React from "react";
import ShoppingCart from "../components/ShoppingCart";
import { Link } from 'react-router-dom';

const Checkout = (props) => {
	const displayCheckout = () => {
		if (props.cart.length === 0) {
			return(
				<div className="emptyCart">
					<h2>Your Cart is Empty!</h2>
					<Link to={'/shop'}><button className="shadowBtn">Shop</button></Link>
				</div>
			)
		} else {
			return(
				<ShoppingCart cart={props.cart} setCart={props.setCart} items={props.items} />
			)
		}
	}

	return (
		<div className="checkout">
			{displayCheckout()}
		</div>
	)
}

export default Checkout;