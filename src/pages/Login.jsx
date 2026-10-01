import React, { useState } from "react";
import Logo from "../components/Logo";
import ThemeToggle from "../components/ThemeToggle";
import Icon from "../components/Icon";
import brandLogo from "../assets/KTravix Smart Travel Logo.png";
export default function Login(p) {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email))
      return setErr("Please enter a valid email address.");
    if (pw.length < 6)
      return setErr("Password must contain at least 6 characters.");
    setErr("");
    p.onLogin();
  };
  return (
    <div className="auth-page">
      <header className="auth-header">
        <Logo onClick={() => p.nav("landing")} />
        <ThemeToggle theme={p.theme} setTheme={p.setTheme} />
      </header>
      <div className="auth-center">
        <div className="auth-card">
          <img className="auth-brand-image" src={brandLogo} alt="KTravix Smart Travel" />
          <h1>Welcome back</h1>
          <p>Sign in to manage your India journeys.</p>
          <form onSubmit={submit}>
            <label>
              Email
              <div className="input">
                <Icon name="mail" size={17} />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </label>
            <label>
              Password
              <div className="input">
                <Icon name="lock" size={17} />
                <input
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </label>
            {err && <small className="error">{err}</small>}
            <div className="remember">
              <label>
                <input type="checkbox" defaultChecked /> Remember me
              </label>
              <button
                type="button"
                onClick={() => alert("A password reset link would be sent.")}
              >
                Forgot password?
              </button>
            </div>
            <button className="btn primary-btn full">
              Sign in <Icon name="arrow" />
            </button>
          </form>
          <div className="or">
            <span>or</span>
          </div>
          <button className="demo-btn" onClick={p.onLogin}>
            Continue with demo account
          </button>
          <small className="auth-note">
            No backend required — this demo uses frontend authentication.
          </small>
        </div>
      </div>
    </div>
  );
}
