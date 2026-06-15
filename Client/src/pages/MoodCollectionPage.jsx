import { Link, useParams } from "react-router-dom";

const MoodCollectionPage = () => {
  const { moodName } = useParams();

  return (
    <div className="min-h-screen bg-[#07070A] text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <Link
          to="/"
          className="inline-block px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:border-purple-500"
        >
          ← Back To Home
        </Link>

        <div className="text-center mt-12">

          <h1 className="text-6xl font-black capitalize">
            {moodName} Collection
          </h1>

          <p className="text-white/60 mt-4">
            Discover the best {moodName} outfits curated by AuraWear.
          </p>

        </div>

      </div>

    </div>
  );
};

export default MoodCollectionPage;