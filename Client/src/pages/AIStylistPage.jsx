import { Link } from "react-router-dom";

const AIStylistPage = () => {
  return (
    <div className="min-h-screen bg-black text-white p-10">

      {/* Back Button */}
      <div className="mb-10">
        <Link
          to="/"
          className="px-6 py-3 rounded-full border border-white/20 hover:border-purple-500 hover:text-purple-400 transition-all duration-300"
        >
          ← Back To Home
        </Link>
      </div>

      <h1 className="text-6xl font-bold text-center">
        ✨ AI Stylist
      </h1>

      <p className="text-center text-white/60 mt-4">
        Describe your vibe and let AuraWear AI generate your outfit.
      </p>

      <div className="max-w-4xl mx-auto mt-12">

        <input
          type="text"
          placeholder="e.g. Party outfit under ₹3000"
          className="w-full p-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-purple-500"
        />

        <button className="w-full mt-5 py-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-[1.02] transition-all duration-300">
          Generate Outfit
        </button>

      </div>

    </div>
  );
};

export default AIStylistPage;