import React from "react";
import brandLogo from "../assets/KTravix Smart Travel Logo.png";

export default function Logo({ onClick }) {
	return (
		<button className="logo" onClick={onClick} aria-label="KTravix home">
			<img className="logo-image" src={brandLogo} alt="KTravix Smart Travel" />
			<span className="logo-name">KTravix</span>
		</button>
	);
}