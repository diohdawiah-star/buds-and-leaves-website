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
    <div className="bg-black text-white min-h-screen">
      <header className="p-6 border-b border-yellow-500">
        <h1 className="text-3xl font-bold text-yellow-500">
          BUDS & LEAVES
        </h1>
      </header>

      <section
        className="h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('/branding/buds-and-leaves-storefront.png')",
        }}
      >
        <div className="bg-black/70 p-10 rounded-3xl text-center">
          <h2 className="text-5xl font-bold mb-4">
            Luxury Denim Collection
          </h2>

          <p className="text-gray-300">
            Premium modern denim fashion.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-700"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[420px] object-contain bg-black p-4"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {product.name}
                </h3>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-yellow-500 text-black px-6 py-3 rounded-xl inline-block font-semibold"
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
