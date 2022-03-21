import React from "react";
import {Link} from 'react-router-dom';


const Shop = (props) => {
	
	const displayShop = () => {
		return (
			props.items.map(item => {
				return(
					<div key={item.id} className="shopItem">
						<Link to={`/shop/${item.id}`}><h3>{item.name}</h3></Link>
						<img alt="itemImage" src={item.img} style={{height:'200px',width:'auto'}} />
						<p>{`${item.price} USD`}</p>
					</div>
				)
			})
		)
	}


	return (
		<div className="shop">
			<h2>Shop</h2>
			{displayShop()}
		</div>
	)
}

export default Shop;