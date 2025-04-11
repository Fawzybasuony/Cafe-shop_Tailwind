import React from "react";

const products = [
  {
    id: 1,
    title: "Double Espresso",
    description:
      "Experience the bold and intense flavor of our Double Espresso — crafted from premium roasted beans to deliver a rich aroma and a powerful boost of energy in every sip.",
    image:
      "https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fmid2.png&w=640&q=75",
    price: "59.99",
  },
  
  {
    id: 2,
    title: "Vanilla Latte",
    description:
      "Smooth and sweet vanilla latte with a perfect balance of espresso and milk.",
    image:
      "https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fmid2.png&w=640&q=75",
    price: "49.99",
  },
  {
    id: 3,
    title: "Cappuccino",
    description:
      "Rich and foamy cappuccino made from freshly ground beans and steamed milk.",
    image:
      "https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fmid2.png&w=640&q=75",
    price: "54.99",
  },
];

export default function Bestcoffee() {
  return (
    <div className="my-10">
      {/* Section Header */}
      <section className="text-center my-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold">Best Selling Coffee</h1>
        <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
          Discover our most popular coffee options, crafted to perfection for
          your daily dose of energy.
        </p>
      </section>

      {/* Product Cards */}
      <section className="grid grid-cols-12 gap-6 px-4 lg:px-16">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="col-span-12 sm:col-span-6 md:col-span-4 bg-white shadow-md rounded-lg p-5 flex flex-col justify-between relative"
          >
            {/* Image */}
            <div className="w-full flex justify-center mt-6 mb-4  transform rotate-12 ">
              <img
                src={product.image}
                alt={product.title}
                className="w-full max-w-[220px] aspect-square object-contain "
                data-aos="zoom-out-down"
              />
            </div>

            {/* Rank and Title */}
            <div>
              <p className="text-gray-500 text-sm mb-2">#{index + 1} Selling</p>
              <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-base">{product.description}</p>
            </div>

            {/* Price & Button */}
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-black">${product.price}</h3>
              <button className="bg-black text-white text-sm lg:text-base px-4 py-2 rounded-md font-semibold uppercase">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
