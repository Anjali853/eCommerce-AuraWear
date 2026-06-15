import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Minimum 6 characters";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const s = {
    page: {
      minHeight: "100vh",
      background: "#07070A",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "sans-serif",
      padding: "2rem 1.5rem",
      position: "relative",
      overflow: "hidden",
    },
    glow1: {
      position: "fixed", top: "-100px", left: "-100px",
      width: "500px", height: "500px",
      background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)",
      pointerEvents: "none",
    },
    glow2: {
      position: "fixed", bottom: "-100px", right: "-100px",
      width: "450px", height: "450px",
      background: "radial-gradient(circle, rgba(236,72,153,0.14) 0%, transparent 70%)",
      pointerEvents: "none",
    },
    card: {
      width: "100%",
      maxWidth: "440px",
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.10)",
      borderRadius: "28px",
      padding: "2.5rem 2rem",
      position: "relative",
      zIndex: 1,
      boxShadow: "0 0 60px rgba(168,85,247,0.12)",
    },
    logo: {
      textAlign: "center",
      marginBottom: "2rem",
    },
    logoText: {
      fontSize: "26px",
      fontWeight: 900,
      letterSpacing: "0.05em",
      color: "#ffffff",
    },
    logoSpan: {
      background: "linear-gradient(90deg, #a855f7, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    tagline: {
      fontSize: "12px",
      color: "rgba(255,255,255,0.35)",
      marginTop: "4px",
      letterSpacing: "0.06em",
      textTransform: "uppercase",
    },
    heading: {
      fontSize: "28px",
      fontWeight: 800,
      color: "#ffffff",
      marginBottom: "6px",
      textAlign: "center",
    },
    subheading: {
      fontSize: "14px",
      color: "rgba(255,255,255,0.4)",
      textAlign: "center",
      marginBottom: "2rem",
    },
    divider: {
      borderTop: "1px solid rgba(255,255,255,0.07)",
      marginBottom: "2rem",
    },
    label: {
      display: "block",
      fontSize: "12px",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.45)",
      marginBottom: "8px",
    },
    inputWrap: {
      position: "relative",
      marginBottom: "1.25rem",
    },
    input: {
      width: "100%",
      padding: "13px 16px",
      borderRadius: "14px",
      fontSize: "14px",
      fontFamily: "sans-serif",
      color: "#ffffff",
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.12)",
      outline: "none",
      boxSizing: "border-box",
      transition: "border-color 0.2s, box-shadow 0.2s",
    },
    inputError: {
      border: "1px solid rgba(236,72,153,0.6)",
    },
    errorMsg: {
      fontSize: "12px",
      color: "#f472b6",
      marginTop: "5px",
    },
    eyeBtn: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "16px",
      color: "rgba(255,255,255,0.4)",
      lineHeight: 1,
    },
    forgotRow: {
      display: "flex",
      justifyContent: "flex-end",
      marginBottom: "1.5rem",
      marginTop: "-0.5rem",
    },
    forgotLink: {
      fontSize: "12px",
      color: "#a855f7",
      textDecoration: "none",
      fontWeight: 500,
    },
    submitBtn: {
      width: "100%",
      padding: "14px",
      borderRadius: "999px",
      border: "none",
      cursor: "pointer",
      fontSize: "15px",
      fontWeight: 700,
      fontFamily: "sans-serif",
      color: "#ffffff",
      background: loading
        ? "rgba(168,85,247,0.3)"
        : "linear-gradient(135deg, #a855f7, #ec4899)",
      boxShadow: loading ? "none" : "0 0 28px rgba(168,85,247,0.45)",
      transition: "all 0.2s",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      marginBottom: "1.5rem",
    },
    spinner: {
      width: "14px",
      height: "14px",
      border: "2px solid rgba(255,255,255,0.3)",
      borderTopColor: "#ffffff",
      borderRadius: "50%",
      animation: "spin 0.6s linear infinite",
    },
    orRow: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "1.25rem",
    },
    orLine: {
      flex: 1,
      height: "1px",
      background: "rgba(255,255,255,0.08)",
    },
    orText: {
      fontSize: "12px",
      color: "rgba(255,255,255,0.3)",
      whiteSpace: "nowrap",
    },
    socialRow: {
      display: "flex",
      gap: "10px",
      marginBottom: "1.75rem",
    },
    socialBtn: {
      flex: 1,
      padding: "11px",
      borderRadius: "14px",
      border: "1px solid rgba(255,255,255,0.10)",
      background: "rgba(255,255,255,0.05)",
      color: "rgba(255,255,255,0.75)",
      fontSize: "13px",
      fontWeight: 600,
      fontFamily: "sans-serif",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      transition: "border-color 0.2s, background 0.2s",
    },
    signupRow: {
      textAlign: "center",
      fontSize: "13px",
      color: "rgba(255,255,255,0.4)",
    },
    signupLink: {
      background: "linear-gradient(90deg, #a855f7, #ec4899)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      fontWeight: 700,
      textDecoration: "none",
      marginLeft: "4px",
    },
  };

  return (
    <div style={s.page}>
      <div style={s.glow1} />
      <div style={s.glow2} />

      <div style={s.card}>

        {/* Logo */}
        <div style={s.logo}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <div style={s.logoText}>
              AURA<span style={s.logoSpan}>WEAR</span>
            </div>
          </Link>
          <p style={s.tagline}>Future of Fashion</p>
        </div>

        <div style={s.divider} />

        <h2 style={s.heading}>Welcome back 👋</h2>
        <p style={s.subheading}>Sign in to your AuraWear account</p>

        {/* Email */}
        <div style={s.inputWrap}>
          <label style={s.label}>Email</label>
          <input
            type="email"
            placeholder="you@aurawear.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{ ...s.input, ...(errors.email ? s.inputError : {}) }}
            onFocus={(e) => {
              e.target.style.borderColor = "rgba(168,85,247,0.7)";
              e.target.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.12)";
            }}
            onBlur={(e) => {
              e.target.style.borderColor = errors.email
                ? "rgba(236,72,153,0.6)"
                : "rgba(255,255,255,0.12)";
              e.target.style.boxShadow = "none";
            }}
          />
          {errors.email && <p style={s.errorMsg}>⚠ {errors.email}</p>}
        </div>

        {/* Password */}
        <div style={s.inputWrap}>
          <label style={s.label}>Password</label>
          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              style={{
                ...s.input,
                paddingRight: "44px",
                ...(errors.password ? s.inputError : {}),
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(168,85,247,0.7)";
                e.target.style.boxShadow = "0 0 0 3px rgba(168,85,247,0.12)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = errors.password
                  ? "rgba(236,72,153,0.6)"
                  : "rgba(255,255,255,0.12)";
                e.target.style.boxShadow = "none";
              }}
            />
            <button
              style={s.eyeBtn}
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          {errors.password && <p style={s.errorMsg}>⚠ {errors.password}</p>}
        </div>

        {/* Forgot */}
        <div style={s.forgotRow}>
          <Link to="/forgot-password" style={s.forgotLink}>
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          style={s.submitBtn}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.opacity = "0.88"; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
        >
          {loading ? (
            <>
              <span style={s.spinner} />
              Signing in…
            </>
          ) : "✨ Sign In"}
        </button>

        {/* OR divider */}
        <div style={s.orRow}>
          <div style={s.orLine} />
          <span style={s.orText}>or continue with</span>
          <div style={s.orLine} />
        </div>

        {/* Social Buttons */}
        <div style={s.socialRow}>
          {[
            { icon: "G", label: "Google" },
            { icon: "f", label: "Facebook" },
          ].map(({ icon, label }) => (
            <button
              key={label}
              style={s.socialBtn}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.4)";
                e.currentTarget.style.background = "rgba(168,85,247,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
            >
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 900,
                  background: "linear-gradient(135deg, #a855f7, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {icon}
              </span>
              {label}
            </button>
          ))}
        </div>

        {/* Sign up link */}
        <div style={s.signupRow}>
          Don't have an account?
          <Link to="/signup" style={s.signupLink}>
            Create one →
          </Link>
        </div>

      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        input::placeholder { color: rgba(255,255,255,0.25); }
      `}</style>
    </div>
  );
};

export default LoginPage;
