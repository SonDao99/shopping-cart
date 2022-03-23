import React from "react";
import home from '../images/home.jpg'
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home">
			<div className="bannerContainer">
				<img className="banner" src={home} alt="bannerImage"/>
				<div className="bannerText">
					<div className="bannerTitle">Old School Cool</div>
					<p>Decorate your room with beautiful vintage posters. Available now!</p>
					<Link to={'/shop'}><button className="toShop">Shop</button></Link>
				</div>
			</div>
		</div>
	)
}

export default Home;