import { Link } from "react-router-dom";

const AIStylistPage = () => {
  return (
    <div className="min-h-screen bg-[#07070A] text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-pink-600/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 p-10">

        {/* Back Button */}
        <div className="mb-10">
          <Link
            to="/"
            className="px-6 py-3 rounded-full border border-white/20 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
          >
            ← Back To Home
          </Link>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl font-black text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          ✨ AI Stylist
        </h1>

        <p className="text-center text-white/60 mt-4 text-lg">
          Describe your vibe and let AuraWear AI generate your perfect outfit.
        </p>

        {/* Mood Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mt-8 mb-12">

          <button className="px-5 py-2 rounded-full bg-purple-500/20 border border-purple-500 hover:bg-purple-500/30 transition-all">
            Party 🎉
          </button>

          <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 transition-all">
            Casual 😎
          </button>

          <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 transition-all">
            Office 💼
          </button>

          <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 transition-all">
            Gym 💪
          </button>

          <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 transition-all">
            Date ❤️
          </button>

          <button className="px-5 py-2 rounded-full bg-white/5 border border-white/10 hover:border-purple-500 transition-all">
            Wedding 👑
          </button>

        </div>

        {/* Input Section */}
        <div className="max-w-4xl mx-auto">

          <input
            type="text"
            placeholder="e.g. I need a party outfit under ₹3000..."
            className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-purple-500 focus:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all"
          />

          <button className="w-full mt-5 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_rgba(168,85,247,0.4)]">
            Generate Outfit
          </button>

          {/* Recommendation Card */}
          <div className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">

            <h2 className="text-2xl font-bold mb-6">
              Recommended Outfit ✨
            </h2>

            <div className="space-y-4 text-lg text-white/80">

              <p>🖤 Oversized Black Hoodie</p>

              <p>👟 White Sneakers</p>

              <p>⌚ Silver Smart Watch</p>

              <p>🧢 Black Cap</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default AIStylistPage;