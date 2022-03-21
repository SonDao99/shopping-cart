import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {

	const numberOfItems = () => {
		let total = 0;

		for (let i = 0; i < props.cart.length; i += 1) {
			total += props.cart[i].amount;
		}

		return total;
	}

	return (
		<ul>
			<Link to={'/'}>
				<li>Home</li>
			</Link>
			<Link to={'/shop'}>
				<li>Shop</li>
			</Link>
			<Link to={'/checkout'}>
				<li>Cart ({numberOfItems()})</li>
			</Link>
		</ul>
	)
}

export default Nav;