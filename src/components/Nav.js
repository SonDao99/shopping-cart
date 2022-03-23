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
		<ul className='navBar'>
			<Link style={{textDecoration:'none'}} to={'/'}>
				<li className='logo'>OLD SCHOOL COOL</li>
			</Link>
			<div className='shopAndCart'>
				<Link style={{textDecoration:'none'}} to={'/shop'}>
					<li>Shop</li>
				</Link>
				<Link style={{textDecoration:'none'}} to={'/checkout'}>
					<li>Cart ({numberOfItems()})</li>
				</Link>
			</div>
		</ul>
	)
}

export default Nav;