import React from "react";
import AppShell from "../components/AppShell";
import Icon from "../components/Icon";

const topics = {
  contact: {
    title: "Contact KTravix",
    subtitle: "We are here to help with your India journey.",
    intro: "Reach our Chennai-based travel team by email or phone.",
    cards: [
      { label: "Brand", title: "KTravix", detail: "Thoughtful trips across India.", icon: "map" },
      { label: "Address", title: "Chennai, Tamil Nadu, India", detail: "Office visits by appointment.", icon: "map" },
      { label: "Email", title: "hello@ktravix.in", detail: "For general enquiries and trip planning.", icon: "mail", href: "mailto:hello@ktravix.in", action: "Send an email" },
      { label: "Phone", title: "+91 44 4000 1234", detail: "Sample customer-care number. Confirm before publishing.", icon: "phone", href: "tel:+914440001234", action: "Call KTravix" },
    ],
  },
  careers: {
    title: "Careers at KTravix",
    subtitle: "Help travellers discover India with care.",
    intro: "We are interested in people who know their region, enjoy solving travel details, and make guests feel welcome.",
    cards: [
      { label: "Travel planning", title: "India Trip Planner", detail: "Build thoughtful itineraries with local stays, guides, and transport.", icon: "map" },
      { label: "Editorial", title: "Destination Storyteller", detail: "Research and write useful, locally grounded destination guides.", icon: "mail" },
      { label: "Guest support", title: "Travel Support Associate", detail: "Help travellers prepare for and navigate their journeys.", icon: "user" },
    ],
    callout: { title: "Share your introduction", text: "Email your resume and the role you are interested in to careers@ktravix.in.", href: "mailto:careers@ktravix.in", action: "Email our team" },
  },
  help: {
    title: "Help Center",
    subtitle: "Answers for planning and managing your trip.",
    intro: "Find the right next step for common travel questions.",
    cards: [
      { label: "Planning", title: "Choosing a destination", detail: "Use Explore India to filter trips by Tamil Nadu, Kerala, Karnataka, or North India.", icon: "map" },
      { label: "Bookings", title: "Booking details", detail: "Keep your trip confirmation and traveller names handy when asking about an existing booking.", icon: "calendar" },
      { label: "Changes", title: "Update a trip", detail: "Contact the trip provider as early as possible; available changes depend on your booking terms.", icon: "settings" },
      { label: "Contact", title: "Still need help?", detail: "Email help@ktravix.in and include your booking reference if you have one.", icon: "mail", href: "mailto:help@ktravix.in", action: "Email support" },
    ],
  },
  cancellation: {
    title: "Cancellation Information",
    subtitle: "Check your trip terms before making a change.",
    intro: "Cancellation windows and refund eligibility vary by trip, stay, and transport provider.",
    cards: [
      { label: "Step 1", title: "Review your confirmation", detail: "Your booking confirmation contains the applicable deadline, fees, and refund terms.", icon: "check" },
      { label: "Step 2", title: "Send a cancellation request", detail: "Email support@ktravix.in with your booking reference, traveller name, and requested change.", icon: "mail", href: "mailto:support@ktravix.in?subject=Cancellation%20request", action: "Request cancellation" },
      { label: "Step 3", title: "Wait for provider confirmation", detail: "Any eligible refund is subject to provider approval and their processing timeline.", icon: "calendar" },
    ],
    callout: { title: "Demo booking notice", text: "This frontend demo does not create reservations or process cancellations and refunds." },
  },
  safety: {
    title: "Travel Safety",
    subtitle: "Plan ahead and know who to contact.",
    intro: "Keep important details accessible and follow current local guidance throughout your trip.",
    cards: [
      { label: "Emergency", title: "Call 112 in India", detail: "112 is India's pan-India emergency response number.", icon: "phone", href: "tel:112", action: "Call 112" },
      { label: "Before you go", title: "Share your itinerary", detail: "Leave your route and accommodation details with someone you trust.", icon: "map" },
      { label: "On the road", title: "Use verified providers", detail: "Confirm pickup details, keep valuables secure, and use official transport and local advisories.", icon: "check" },
      { label: "KTravix", title: "Ask our team", detail: "For trip-related assistance, email support@ktravix.in with your booking details.", icon: "mail", href: "mailto:support@ktravix.in?subject=Travel%20assistance", action: "Contact support" },
    ],
  },
};

export default function Info({ topic, ...appProps }) {
  const page = topics[topic] || topics.help;

  return (
    <AppShell {...appProps} active="" title={page.title} sub={page.subtitle}>
      <div className="info-page">
        <div className="content-head">
          <div>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
          <button className="btn primary-btn" onClick={() => appProps.nav("explore")}>
            Explore India <Icon name="arrow" size={16} />
          </button>
        </div>
        <div className="info-grid">
          {page.cards.map((card) => (
            <article className="info-card" key={card.title}>
              <span className="info-icon"><Icon name={card.icon} size={19} /></span>
              <div>
                <small>{card.label}</small>
                <h2>{card.title}</h2>
                <p>{card.detail}</p>
                {card.href && <a className="info-action" href={card.href}>{card.action} <Icon name="arrow" size={14} /></a>}
              </div>
            </article>
          ))}
        </div>
        {page.callout && (
          <aside className="info-callout">
            <div><strong>{page.callout.title}</strong><p>{page.callout.text}</p></div>
            {page.callout.href && <a className="btn primary-btn" href={page.callout.href}>{page.callout.action} <Icon name="arrow" size={16} /></a>}
          </aside>
        )}
      </div>
    </AppShell>
  );
}