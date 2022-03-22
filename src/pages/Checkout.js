import React from "react";
import ShoppingCart from "../components/ShoppingCart";

const Checkout = (props) => {
	return (
		<div className="checkout">
			<ShoppingCart cart={props.cart} setCart={props.setCart} items={props.items} />
		</div>
	)
}

export default Checkout;