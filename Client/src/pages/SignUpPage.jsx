import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Fill in all fields to create your account.");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    // TODO: replace with real signup call
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#07070A] flex items-center justify-center px-6 py-12 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-pink-600/10 blur-[180px] rounded-full"></div>

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl shadow-black/40">

          {/* Logo */}
          <div className="text-center">
            <Link to="/" className="inline-block">
              <h1 className="text-4xl font-black">
                <span className="text-white">AURA</span>
                <span className="text-pink-500">WEAR</span>
              </h1>
            </Link>

            <p className="text-white/40 text-xs tracking-[3px] mt-2">
              FUTURE OF FASHION
            </p>
          </div>

          <div className="border-t border-white/10 my-8"></div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-white">
              Create Account ✨
            </h2>

            <p className="text-white/50 mt-2">
              Join AuraWear and find your aura
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate>

            {/* Error message */}
            {error && (
              <div className="mb-5 px-4 py-3 rounded-xl bg-pink-500/10 border border-pink-500/30 text-pink-300 text-sm">
                {error}
              </div>
            )}

            {/* Name */}
            <div className="mb-5">
              <label htmlFor="name" className="text-white/60 text-sm uppercase tracking-wider">
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Anjali Sharma"
                autoComplete="name"
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
              />
            </div>

            {/* Email */}
            <div className="mb-5">
              <label htmlFor="email" className="text-white/60 text-sm uppercase tracking-wider">
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@aurawear.com"
                autoComplete="email"
                className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
              />
            </div>

            {/* Password */}
            <div className="mb-5">
              <label htmlFor="password" className="text-white/60 text-sm uppercase tracking-wider">
                Password
              </label>

              <div className="relative mt-2">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pr-14 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-sm transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <p className="text-white/30 text-xs mt-2">Use at least 8 characters.</p>
            </div>

            {/* Confirm Password */}
            <div className="mb-2">
              <label htmlFor="confirmPassword" className="text-white/60 text-sm uppercase tracking-wider">
                Confirm Password
              </label>

              <div className="relative mt-2">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 pr-14 text-white outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-sm transition-colors"
                  aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Terms */}
            <p className="text-white/40 text-xs mt-6 mb-6">
              By creating an account, you agree to AuraWear's{" "}
              <Link to="/terms" className="text-pink-400 hover:text-pink-300 transition-colors">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-pink-400 hover:text-pink-300 transition-colors">
                Privacy Policy
              </Link>.
            </p>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                text-white
                font-semibold
                hover:scale-[1.02]
                active:scale-[0.99]
                disabled:opacity-60
                disabled:cursor-not-allowed
                disabled:hover:scale-100
                transition-all
                duration-300
                flex items-center justify-center gap-2
              "
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span>
                  Creating account...
                </>
              ) : (
                <>✨ Create Account</>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-white/10"></div>

            <span className="text-white/40 text-sm">
              or continue with
            </span>

            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">

            <button
              type="button"
              className="py-3 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500 hover:bg-white/[0.08] transition-all text-white flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" opacity=".6"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" opacity=".8"/>
                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" opacity=".4"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Google
            </button>

            <button
              type="button"
              className="py-3 rounded-xl border border-white/10 bg-white/5 hover:border-purple-500 hover:bg-white/[0.08] transition-all text-white flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12.06C22 6.51 17.52 2 12 2S2 6.51 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
              </svg>
              Facebook
            </button>

          </div>

          {/* Login Link */}
          <p className="text-center text-white/50 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-pink-400 hover:text-pink-300 font-semibold transition-colors"
            >
              Sign in →
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default SignUpPage;
