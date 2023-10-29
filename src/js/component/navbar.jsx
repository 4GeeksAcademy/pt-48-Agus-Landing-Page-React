import React from 'react';
import '../../styles/index.css';

const NavBarCryptPlanet = () => {
  return (<>
		<div className="container-fluid" id="navbar">
			<div className="navbar__brand">
				<span style={{color: "white"}}>Crypt&nbsp;
				<i class="fa-solid fa-earth-americas fa-xl"></i>&nbsp;Planet</span>
			</div>
			<div className="navbar__options">
				<a href="#">Discover</a>
				<a href="#">Collection</a>
				<a href="#">Artist</a>
			</div>
		</div>
	</>)
}

export default NavBarCryptPlanet;