import React from "react";
import '../../styles/index.css';

const FooterCryptPlanet = () => {
	return (<>
		<div className="footer__container">
			<div className="footer-headline__container">
				<span style={{color: "white"}}>😍 Top collection over <b>7 days</b></span>
				<a href="#" style={{color: "white"}}> ← →</a>
			</div>
			<div className="footer-collections__container">
				<a href="#">
					<div className="footer__hape border border-2 border-secondary" >
						<img src="hape.png" alt="hape" className="rounded-circle" id="hape" />
						<div className="hape-container__main">
							<span className="ps-3" style={{color: "white"}}><b>HAPE PRIME</b></span>
							<span className="priceAndThing ps-3">FloorPrice:&nbsp;&nbsp;&nbsp;<i style={{color: "green"}} className="fa-solid fa-diamond"></i> 4</span>
						</div>
						<div className="hape-container__evo">
							<span className="ps-5" style={{color: "green"}}>+79.93%</span>
							<span className="priceAndThing ps-5">&nbsp;&nbsp;<i className="fa-solid fa-diamond"></i> 15,007.30</span>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="footer__zipcy border border-2 border-secondary">
						<img src="zipcy.webp" alt="zipcy" className="me-3 rounded-circle" id="zipcy" />
						<div className="zipcy-container__main pe-3">
							<span style={{color: "white"}}><b>ZIPCY'S SUPER</b></span>
							<span className="priceAndThing">FloorPrice:&nbsp;&nbsp;&nbsp;<i style={{color: "green"}} className="fa-solid fa-diamond"></i> 1.67</span>
						</div>
						<div className="zipcy-container__evo">
							<span className="ps-4" style={{color: "red"}}>-45.09%</span>
							<span className="priceAndThing ps-4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-diamond"></i> 4,440.07</span>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="footer__mutant border border-2 border-secondary">
						<img src="mutant.webp" alt="mutant" className="me-3 rounded-circle" id="mutant" />
						<div className="mutant-container__main pe-3">
							<span style={{color: "white"}}><b>MUTANT APE</b></span>
							<span className="priceAndThing">FloorPrice:&nbsp;&nbsp;&nbsp;<i style={{color: "green"}} className="fa-solid fa-diamond"></i> 20.3</span>
						</div>
						<div className="mutant-container__evo">
							<span className="ps-5" style={{color: "red"}}>-58.96%</span>
							<span className="priceAndThing ps-5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-diamond"></i> 8,373.07</span>
						</div>
					</div>
				</a>
			</div>
		</div>
	</>);
};




export default FooterCryptPlanet;