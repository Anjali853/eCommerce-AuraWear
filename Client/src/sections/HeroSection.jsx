const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-full min-h-[90vh] flex items-center justify-center gap-32 px-10">

      {/* LEFT CONTENT */}
     <div className="max-w-[650px]">

        <p className="text-purple-400 uppercase tracking-[8px] mb-6">
          Future Of Fashion
        </p>

          <h1 className="text-[90px] font-black leading-[0.9]">
          WEAR
          <br />
          YOUR
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mt-2">
            AURA
          </span>
        </h1>

        <p className="text-white/60 mt-8 text-xl leading-relaxed max-w-[500px]">
          Your digital twin in reality.
          <br />
          Explore futuristic AI-powered fashion experiences.
        </p>

        {/* Buttons */}
        <div className="flex gap-5 mt-10">

          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.5)]">
          Explore Now

          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:border-purple-500 hover:text-purple-400 transition-all duration-300">
            AI Stylist
          </button>

        </div>

      </div>

      {/* RIGHT SIDE CARD */}
     <div className="hidden lg:flex">

        <div className="w-[380px] h-[550px] rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-xl p-5 shadow-2xl shadow-purple-500/20">

          <img
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
            alt="fashion"
            className="w-full h-[75%] object-cover rounded-[30px]"
          />

          <div className="mt-5">

            <h2 className="text-3xl font-bold">
              Cyber Glitch Jacket
            </h2>

            <p className="text-white/50 mt-2">
              Collection 4D / Neo Tokyo
            </p>

            <button className="mt-5 w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition-all duration-300">
              Add To Cart
            </button>

          </div>

        </div>

      </div>
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full"></div>

<div className="absolute right-0 top-0 w-[400px] h-[400px] bg-pink-600/10 blur-[180px] rounded-full"></div>

    </section>

  )
}

export default HeroSection