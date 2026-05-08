import React from "react";

export default function App() {
  const products = [
    {
      id: 1,
      name: "Midnight Royale Denim",
      image: "/products/midnight-royale-denim.png",
      link: "https://shopee.co.id/",
    },
    {
      id: 2,
      name: "Indigo Prime Jeans",
      image: "/products/indigo-prime-jeans.png",
      link: "https://shopee.co.id/",
    },
    {
      id: 3,
      name: "Golden Flight Denim",
      image: "/products/golden-flight-denim-front.png",
      link: "https://shopee.co.id/",
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4">
        <h1 className="text-6xl font-bold text-yellow-400 mb-6">
          BUDS & LEAVES
        </h1>

        <p className="text-xl text-gray-300">
          Luxury Denim Fashion Website
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="px-8 py-20 bg-zinc-950">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-400">
          OUR PRODUCTS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  {product.name}
                </h3>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-yellow-400 text-black px-6 py-3 rounded-xl inline-block font-bold hover:scale-105 transition"
                >
                  View Product
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}