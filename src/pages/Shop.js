import React from "react";
import {Link} from 'react-router-dom';


const Shop = (props) => {
	
	const displayShop = () => {
		return (
			props.items.map(item => {
				return(
					<div key={item.id} className="item">
						<Link style={{textDecoration:'none'}} to={`/shop/${item.id}`}>
							<div className="imgNamePrice">
								<img alt="itemImage" src={item.img} />
								<h3>{item.name}</h3>
								<p>{`${item.price} USD`}</p>
							</div>
						</Link>
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