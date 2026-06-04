
import { useState } from "react";
const products = [
    
  {
    name: "Cyber Glitch Jacket",
    price: "₹2,999",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b",
  },
  {
    name: "Neon Street Hoodie",
    price: "₹1,999",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f",
  },
  {
    name: "Aura Black Tee",
    price: "₹999",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b",
  },
  {
    name: "Tokyo Future Fit",
    price: "₹3,499",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
  },
]

const TrendingFits = () => {
    const [wishlist, setWishlist] = useState([]);
  return (
    <section className="w-full py-24">

      <div className="max-w-7xl mx-auto px-10 mt-24">

        <h2 className="text-4xl md:text-5xl font-bold text-center">
          Trending Fits
        </h2>

        <p className="text-center text-white/60 mt-4">
          Discover the most loved styles on AuraWear
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

          {products.map((product, index) => (
            <div
              key={index}
              className="
                bg-white/5
                border border-white/10
                rounded-3xl
                overflow-hidden
                backdrop-blur-xl
                hover:scale-105
                hover:-translate-y-3
                hover:border-purple-500
                hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]
                transition-all
                duration-300
              "
            >

              {/* IMAGE SECTION */}
              <div className="relative">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />

                {/* Trending Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-xs font-semibold">
                  Trending
                </div>

                {/* Wishlist */}
               <button onClick={()=>{
                console.log("Clicked", index);
                if(wishlist.includes(index)){
                    setWishlist(wishlist.filter((item)=>item!==index));
                }else{
                    setWishlist([...wishlist,index]);
                }
               }}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-all"
                >
                   <span className="text-2xl">
                    {wishlist.includes(index) ? "❤️" : "🤍"}
                  </span>

               </button>

              </div>

              {/* PRODUCT INFO */}
              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-3">

                  <p className="text-purple-400 font-bold text-lg">
                    {product.price}
                  </p>

                  <span className="text-yellow-400 text-sm">
                    ⭐ 4.8
                  </span>

                </div>

                <button className="mt-5 w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition-all duration-300">
                  Add To Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default TrendingFits