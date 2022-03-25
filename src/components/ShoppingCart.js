import React from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const ShoppingCart = (props) => {
  const displayCart = () => {
		return(
			props.cart.map((cartItem) => {
				return <CartItem 
									key={cartItem.id}
									cartItem={cartItem}
									items={props.items}
									setCart={props.setCart}
									cart={props.cart}
							 />
			})
		)
	}

	const calculateTotal = () => {
		let total = 0;

		for (let i = 0; i < props.cart.length; i += 1) {
			const currentID = props.cart[i].id;
			total += props.items[currentID].price * props.cart[i].amount;
		}

		return total.toFixed(2);
	}

	const handlePurchase = () => {
		props.setCart([]);
	}

	const displayTotal = () => {
		if (props.cart.length === 0) {
			return;
		}

		return(
			<>
				<div className="totalPrice">Total: {calculateTotal()} USD</div>
				<Link to={'/purchase'}><button className="shadowBtn" onClick={handlePurchase}>Purchase</button></Link>
			</>
		);
	}
	
	return(
		<div className="shoppingCart">
			<h2>Cart</h2>
			<div className="cartItemContainer">
				{displayCart()}
			</div>
			{displayTotal()}
		</div>
	)
}

export default ShoppingCart;