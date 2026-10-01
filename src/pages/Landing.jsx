import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Icon from "../components/Icon";
import Logo from "../components/Logo";
import TravelIntro from "../components/TravelIntro";
import DestinationCard from "../components/DestinationCard";
import { destinations, categories } from "../data";

let introHasPlayedInDocument = false;

export default function Landing(p) {
  const pageRoot = useRef(null);
  const [showIntro, setShowIntro] = useState(() => !introHasPlayedInDocument);
  const book = (d) => {
    p.setSelected(d);
    p.nav("booking");
  };
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const finishIntro = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    if (!showIntro) return;
    introHasPlayedInDocument = true;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(finishIntro, reducedMotion ? 1200 : 4650);
    return () => window.clearTimeout(timer);
  }, [showIntro]);

  useEffect(() => {
    const root = pageRoot.current;
    if (!root) return;

    const targets = root.querySelectorAll("[data-reveal]");
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page" ref={pageRoot}>
      <Navbar {...p} />
      {showIntro && <TravelIntro onSkip={finishIntro} />}
      <main>
        <section className="travel-hero">
          <div className="hero-overlay" />
          <div className="hero-inner container" data-reveal="up">
            <span className="eyebrow white">
              ONE COUNTRY · A THOUSAND STORIES
            </span>
            <h1>
              Go beyond the
              <br />
              <em>usual.</em>
            </h1>
            <p>
              Discover the India you've always wanted to see — thoughtfully
              planned, beautifully experienced.
            </p>
            <div className="search-box">
              <div>
                <small>WHERE TO?</small>
                <strong>Search destinations</strong>
              </div>
              <div>
                <small>WHEN?</small>
                <strong>Choose your dates</strong>
              </div>
              <div>
                <small>TRAVEL TYPE</small>
                <strong>Any experience</strong>
              </div>
              <button onClick={() => p.nav("explore")}>
                <Icon name="search" /> Explore
              </button>
            </div>
          </div>
        </section>
        <section className="section container">
          <div className="section-top" data-reveal="up">
            <div>
              <span className="eyebrow">Tamil Nadu · Kerala · Karnataka · North India</span>
              <h2>Places worth going to.</h2>
            </div>
            <button className="text-link" onClick={() => p.nav("explore")}>
              View all destinations →
            </button>
          </div>
          <div className="dest-grid landing-dest-grid">
            {["Tamil Nadu", "Kerala", "Karnataka", "North India"]
              .map((region) => destinations.find((d) => d.region === region))
              .filter(Boolean)
              .map((d, index) => (
              <div className="home-card-reveal" data-reveal="up" key={d.name} style={{ "--reveal-index": index }}>
                <DestinationCard d={d} onBook={book} />
              </div>
            ))}
          </div>
        </section>
        <section id="experiences" className="category-section">
          <div className="container">
            <div className="section-heading left" data-reveal="up">
              <span className="eyebrow">Find your feeling</span>
              <h2>Travel your way.</h2>
              <p>
                Whether you crave quiet mountains or buzzing city streets, start
                with what moves you.
              </p>
            </div>
            <div className="cat-grid">
              {categories.map((c, i) => (
                <button
                  className="cat"
                  key={i}
                  data-reveal="up"
                  style={{ "--reveal-index": i }}
                  onClick={() => p.nav("explore")}
                >
                  <span>{c[0]}</span>
                  <strong>{c[1]}</strong>
                  <small>{c[2]}</small>
                </button>
              ))}
            </div>
          </div>
        </section>
        <section id="about" className="experience container">
          <div className="experience-image" data-reveal="left"></div>
          <div className="experience-copy" data-reveal="right">
            <span className="eyebrow">More than a holiday</span>
            <h2>
              Come for the views.
              <br />
              <em>Stay for the stories.</em>
            </h2>
            <p>
              Meet local hosts, eat where the locals eat, learn a craft, wake up
              beside a lake. KTravix connects you with experiences that turn a
              trip into a memory.
            </p>
            <div className="check-list">
              <span>
                <Icon name="check" /> Local experiences
              </span>
              <span>
                <Icon name="check" /> Verified stays & guides
              </span>
              <span>
                <Icon name="check" /> Flexible planning
              </span>
            </div>
            <button
              className="btn primary-btn"
              onClick={() => p.nav("explore")}
            >
              Find an experience <Icon name="arrow" />
            </button>
          </div>
        </section>
        <section id="stories" className="story-section">
          <div className="container">
            <div className="section-heading" data-reveal="up">
              <span className="eyebrow">Traveller stories</span>
              <h2>India, through their eyes.</h2>
            </div>
            <div className="quotes">
              <article data-reveal="up" style={{ "--reveal-index": 0 }}>
                <div className="quote-mark">“</div>
                <p>
                  Waking up to the tea gardens in Munnar was one of those
                  moments you don't plan for. KTravix made the whole trip
                  effortless.
                </p>
                <strong>Meera S.</strong>
                <small>Chennai · Kerala Explorer</small>
              </article>
              <article data-reveal="up" style={{ "--reveal-index": 1 }}>
                <div className="quote-mark">“</div>
                <p>
                  From the first chai in Jaipur to the sunset at Amber Fort,
                  every detail felt personal rather than packaged.
                </p>
                <strong>Arjun K.</strong>
                <small>Bengaluru · Rajasthan Journey</small>
              </article>
              <article data-reveal="up" style={{ "--reveal-index": 2 }}>
                <div className="quote-mark">“</div>
                <p>
                  We found a tiny homestay in Goa that never appeared on the
                  usual travel sites. Exactly what we were looking for.
                </p>
                <strong>Nisha R.</strong>
                <small>Mumbai · Coastal Escape</small>
              </article>
            </div>
          </div>
        </section>
        <section className="newsletter container">
          <div data-reveal="left">
            <span className="eyebrow">The travel letter</span>
            <h2>India is calling.</h2>
            <p>Get destination ideas and local stories in your inbox.</p>
          </div>
          <div className="newsletter-form" data-reveal="right">
            <input placeholder="Your email address" />
            <button className="btn primary-btn">Subscribe</button>
          </div>
        </section>
      </main>
      <footer>
        <div className="container footer-grid" data-reveal="up">
          <div className="footer-brand">
            <Logo onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} />
            <p>Travel deeper. Travel better. Travel India.</p>
            <address>
              Chennai, Tamil Nadu, India<br />
              <a href="mailto:hello@ktravix.in">hello@ktravix.in</a>
            </address>
            <div className="social-links" aria-label="Social media">
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook" /></a>
              <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube"><Icon name="youtube" /></a>
            </div>
          </div>
          <div>
            <strong>Explore</strong>
            <button onClick={() => p.nav("explore")}>Destinations</button>
            <button onClick={() => scrollTo("experiences")}>Experiences</button>
            <button onClick={() => scrollTo("stories")}>Travel stories</button>
          </div>
          <div>
            <strong>Company</strong>
            <button onClick={() => scrollTo("about")}>About KTravix</button>
            <button onClick={() => p.nav("contact")}>Contact</button>
            <button onClick={() => p.nav("careers")}>Careers</button>
          </div>
          <div>
            <strong>Support</strong>
            <button onClick={() => p.nav("help")}>Help center</button>
            <button onClick={() => p.nav("cancellation")}>Cancellation</button>
            <button onClick={() => p.nav("safety")}>Safety</button>
          </div>
        </div>
        <div className="container copyright">
          © 2026 KTravix · Made for curious travellers.
        </div>
      </footer>
    </div>
  );
}
