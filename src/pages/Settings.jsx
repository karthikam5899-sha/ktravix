import React, { useState } from "react";
import AppShell from "../components/AppShell";
import ThemeToggle from "../components/ThemeToggle";
export default function Settings(p) {
  const [a, setA] = useState(true),
    [m, setM] = useState(true),
    [s, setS] = useState(false);
  const T = ({ v, set }) => (
    <button className={"switch " + (v ? "on" : "")} onClick={() => set(!v)}>
      <i />
    </button>
  );
  return (
    <AppShell
      {...p}
      active="settings"
      title="Settings"
      sub="Personalize your KTravix experience."
    >
      <div className="content-head">
        <div>
          <h1>Settings</h1>
          <p>Control notifications, appearance and privacy.</p>
        </div>
      </div>
      <div className="settings-list">
        <section className="panel settings-panel">
          <h3>Appearance</h3>
          <p>Choose how KTravix looks.</p>
          <div className="setting">
            <div>
              <strong>Theme</strong>
              <small>Switch between light and dark mode.</small>
            </div>
            <ThemeToggle theme={p.theme} setTheme={p.setTheme} />
          </div>
        </section>
        <section className="panel settings-panel">
          <h3>Notifications</h3>
          <p>Stay updated without the noise.</p>
          <div className="setting">
            <div>
              <strong>Trip reminders</strong>
              <small>Get reminders before your upcoming journey.</small>
            </div>
            <T v={a} set={setA} />
          </div>
          <div className="setting">
            <div>
              <strong>Travel inspiration</strong>
              <small>Occasional destination ideas and stories.</small>
            </div>
            <T v={m} set={setM} />
          </div>
          <div className="setting">
            <div>
              <strong>Booking updates</strong>
              <small>Important changes to reservations.</small>
            </div>
            <T v={s} set={setS} />
          </div>
        </section>
        <section className="panel settings-panel">
          <h3>Privacy</h3>
          <p>Manage what we use to personalize your experience.</p>
          <div className="setting">
            <div>
              <strong>Personalized recommendations</strong>
              <small>
                Use your saved places and trips to improve suggestions.
              </small>
            </div>
            <T v={true} set={() => {}} />
          </div>
        </section>
      </div>
    </AppShell>
  );
}
