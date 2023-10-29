import React from "react";
import '../../styles/index.css';
import '../../styles/styles.css';

//create your first component
const BodyCryptPlanet = () => {
	rreturn (<>
		<div className="container-fluid" id="body__">
			<div className="body__left">
				<div className="body-current__left">
					<img src="bolt.png" alt="bolt" width="77px" />
					<div className="bid ps-3 pt-1">
						<p className="text-secondary pt-1">CURRENT BID</p>
						<span style={{color: "white"}}>281.33 ETH = 2.81$</span>
					</div>
				</div>
				<div className="body-title__left py-3">
					<span className="text-light">COLLECTING 🔥 CRYPTOART</span>
				</div>
				<div className="body-description__left">
					<p style={{color: "grey"}}>The world's first and largest digital marketplace<br/>for crypto collectibles and non-fungible tokens (NFTs).<br/>Buy, sell, and discover exclusive digital items.</p>
					<div className="body-description-left__buttons">
						<div className="button-createNFT__left">
						</div>
						<a href="#" className="ps-3 pt-2" style={{color: "grey"}}>Explore Artwork →</a>
					</div>
				</div>
				<div className="body-stats__left">
					<div className="artwork__left">
					<i className="fa-solid fa-rocket fa-2xl"></i>
						<div className="artwork pt-3 pb-3">
							<span style={{color: "grey"}}>TOP ARTWORKS</span>
							<span style={{color: "white"}}>38K Active Users</span>
						</div>
					</div>
					<div className="active-artists__left">
						<i class="fa-solid fa-brush fa-2xl"></i>
						<div className="artists pt-3">
							<span style={{color: "grey"}}>ACTIVE ARTISTS</span>
							<span style={{color: "white"}}>12K Artists</span>
						</div>
					</div>
				</div>
			</div>
			<div className="body__right"></div>
		</div>
	</>);
};

export default BodyCryptPlanet;