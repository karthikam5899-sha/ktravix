import React from "react";
import Logo from "./Logo";

const routePath = "M118 190 C205 132 235 218 322 168 S451 99 530 140 S632 190 700 92";

export default function TravelIntro({ onSkip }) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  return (
    <div className="travel-intro" role="status" aria-label="KTravix travel route" onClick={onSkip}>
      <button className="intro-skip">Skip intro</button>
      <div className="intro-content">
        <div className="intro-brand">
          <Logo />
          <p>SMART TRAVEL · INDIA</p>
        </div>
        <div className="intro-route">
          <div className="intro-route-heading">
            <span>YOUR NEXT JOURNEY</span>
            <h1>India, from A to wonder.</h1>
          </div>
          <svg viewBox="0 0 800 280" role="img" aria-labelledby="route-title">
            <title id="route-title">Route from Chennai, Tamil Nadu to Jaipur, Rajasthan</title>
            <path className="intro-map-contour contour-one" d="M5 70 C115 10 184 110 275 69 S421 22 509 65 667 101 795 42" />
            <path className="intro-map-contour contour-two" d="M0 226 C99 169 198 257 299 214 S462 174 552 215 709 248 800 198" />
            <path className="intro-route-glow" d={routePath} />
            <path className="intro-route-path" d={routePath} />
            <circle className="intro-route-start" cx="118" cy="190" r="7" />
            <circle className="intro-route-end" cx="700" cy="92" r="10" />
            <circle className="intro-route-end-core" cx="700" cy="92" r="3" />
            <g className="intro-route-marker">
              <circle r="15" />
              <path d="M0 -8c-4.2 0-7 2.9-7 6.5C-7 3.5 0 10 0 10s7-6.5 7-11.5C7-5.1 4.2-8 0-8Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
              {!reducedMotion && (
                <animateMotion
                  dur="2.35s"
                  begin="0.75s"
                  fill="freeze"
                  path={routePath}
                />
              )}
            </g>
            <text className="intro-city" x="78" y="236">CHENNAI</text>
            <text className="intro-state" x="78" y="254">TAMIL NADU</text>
            <text className="intro-city" x="620" y="60">JAIPUR</text>
            <text className="intro-state" x="620" y="78">RAJASTHAN</text>
          </svg>
          <div className="intro-route-caption"><span /> SOUTH TO NORTH <span /></div>
        </div>
      </div>
    </div>
  );
}