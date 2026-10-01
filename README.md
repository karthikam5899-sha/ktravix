# KTravix — Smart Travel Frontend

A complete India-based travel website frontend built using React + Vite.

## Included pages

- Landing page
- Explore India
- Destination search and filters
- Destination cards
- Booking flow with 3 steps
- Login with validation
- Travel dashboard
- Profile
- Settings
- Light/Dark mode
- Responsive navigation
- Responsive dashboard sidebar
- LocalStorage theme persistence
- Frontend-only demo authentication

## Folder structure

```text
ktravix-smart-travel/
├── index.html
├── package.json
├── README.md
├── public/
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── data.js
    ├── styles.css
    ├── components/
    │   ├── AppShell.jsx
    │   ├── DestinationCard.jsx
    │   ├── Icon.jsx
    │   ├── Logo.jsx
    │   ├── Navbar.jsx
    │   ├── Sidebar.jsx
    │   └── ThemeToggle.jsx
    └── pages/
        ├── Booking.jsx
        ├── Dashboard.jsx
        ├── Explore.jsx
        ├── Landing.jsx
        ├── Login.jsx
        ├── Profile.jsx
        └── Settings.jsx
```

## Run

```bash
npm install
npm run dev
```

Open the Vite URL, normally:

```text
http://localhost:5173
```

Production:

```bash
npm run build
npm run preview
```

## Notes

Destination photography uses remote Unsplash image URLs, so internet access is needed for those images.

This is a frontend-only project. Login and booking are demo interactions and do not connect to a backend/payment gateway.
