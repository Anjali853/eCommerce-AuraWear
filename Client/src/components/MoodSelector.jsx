const moods = [
  { name: "Party 🎉" },
  { name: "Casual 😎" },
  { name: "Office 💼" },
  { name: "Gym 💪" },
  { name: "Date ❤️" },
  { name: "Wedding 👑" },
]

const MoodSelector = () => {
  return (
    <section className="w-full py-20">

      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-center">
          Shop By Mood
        </h2>

        <p className="text-white/60 text-center mt-4">
          Let AuraWear AI understand your vibe.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-16">

          {moods.map((mood, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-6
                text-center
                cursor-pointer
                hover:scale-105
                hover:border-purple-500
                transition-all
                duration-300
              "
            >
              <h3 className="font-semibold text-lg">
                {mood.name}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default MoodSelector