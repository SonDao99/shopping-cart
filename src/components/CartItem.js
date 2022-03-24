import React from "react";

const CartItem = (props) => {
	const incrementAmount = () => {
		let newCart = [...props.cart];
		let oldAmount;
		let itemIndex;

		for (let i = 0; i < newCart.length; i += 1) {
			if (newCart[i].id === props.cartItem.id) {
				oldAmount = newCart[i].amount;
				itemIndex = i;
			}
		};

		const newAmount = oldAmount + 1;
		
		newCart.splice(itemIndex, 1, {id: props.cartItem.id, amount: newAmount})
		
		props.setCart(newCart);
	};

	const decrementAmount = () => {
		let newCart = [...props.cart];
		let oldAmount;
		let itemIndex;

		for (let i = 0; i < newCart.length; i += 1) {
			if (newCart[i].id === props.cartItem.id) {
				oldAmount = newCart[i].amount;
				itemIndex = i;
			}
		};

		const newAmount = oldAmount - 1;
		
		if (newAmount === 0) {
			newCart.splice(itemIndex, 1);
		} else {
			newCart.splice(itemIndex, 1, {id: props.cartItem.id, amount: newAmount});
		}
		
		props.setCart(newCart);
	};

	return(
		<div className="cartItem">
			<img src={props.items[props.cartItem.id].img} alt="itemImage" />
			<div className="cartItemDesc">
				<h3>{props.items[props.cartItem.id].name}</h3>
				<div className="itemCounter">
					<button onClick={decrementAmount} className="decrement">-</button>
					<div className="itemCount">{props.cartItem.amount}</div>
					<button onClick={incrementAmount} className="increment">+</button>
				</div>
				<p>{(props.items[props.cartItem.id].price * props.cartItem.amount).toFixed(2)} USD</p>
			</div>
		</div>
	)
}

export default CartItem;