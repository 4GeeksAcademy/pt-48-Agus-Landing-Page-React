import React from "react";
import NavBarCryptPlanet from './navbar'
import BodyCryptPlanet from './body'
import FooterCryptPlanet from './footer'

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (<>
	<NavBarCryptPlanet />
	<BodyCryptPlanet />
	<FooterCryptPlanet />
	</>);
};

export default Home;
