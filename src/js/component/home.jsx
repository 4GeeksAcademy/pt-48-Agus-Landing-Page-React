import React from "react";
import BodyCryptPlanet from "./component/body";
import NavBarCryptPlanet from "./component/navbar";
import FooterCryptPlanet from "./component/footer";

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
