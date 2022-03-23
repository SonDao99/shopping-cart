import React from "react";
import {Link} from 'react-router-dom';


const Shop = (props) => {
	
	const displayShop = () => {
		return (
			props.items.map(item => {
				return(
					<div key={item.id} className="item">
						<Link style={{textDecoration:'none'}} to={`/shop/${item.id}`}><h3>{item.name}</h3></Link>
						<img alt="itemImage" src={item.img} />
						<p>{`${item.price} USD`}</p>
					</div>
				)
			})
		)
	}


	return (
		<div className="shop">
			<h2>Shop</h2>
			<div className="displayShop">
				{displayShop()}
			</div>	
		</div>
	)
}

export default Shop;