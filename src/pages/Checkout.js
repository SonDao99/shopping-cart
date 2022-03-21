import React from "react";

const Checkout = (props) => {

	const calculateTotal = () => {
		let total = 0;

		for (let i = 0; i < props.cart.length; i += 1) {
			const currentID = props.cart[i].id;
			total += props.items[currentID].price * props.cart[i].amount;
		}

		return total.toFixed(2);
	}

	return (
		<div className="checkout">
			{calculateTotal()}
		</div>
	)
}

export default Checkout;