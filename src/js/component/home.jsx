import React from "react";
import BodyCryptPlanet from "./body";
import NavBarCryptPlanet from "./navbar";
import FooterCryptPlanet from "./footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (<>
		<NavBarCryptPlanet />
		<BodyCryptPlanet />
		<FooterCryptPlanet />
	</>);
};

export default Home;
