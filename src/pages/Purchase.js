import React from "react";
import purchase from '../images/purchase.jpg'

const Purchase = () => {
  return(
		<div className="purchase">
			<h2>Thank You for Your Purchase!</h2>
			<img alt="thankYou" src={purchase}/>
		</div>
	)
}

export default Purchase;