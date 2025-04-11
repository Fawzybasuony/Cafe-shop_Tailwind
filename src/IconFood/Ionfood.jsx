export default function Ionfood() {

  const services = [
    {
      title: "Our Catering",
      description:
        "Enjoy handcrafted menus tailored for every event, big or small.",
      image: "/coffee/icon1.png",
      buttonText: "Order Catering",
    },
    {
      title: "The Food",
      description: "Discover a selection of delicious meals made with love.",
      image: "/coffee/icon2.png",
      buttonText: "Explore Menu",
    },
    {
      title: "The Gelato",
      description:
        "Treat yourself to our creamy, authentic Italian-style gelato.",
      image: "/coffee/icon3.png",
      buttonText: "Try Gelato",
    },
  ];

  return (
    <>
      <div
        data-aos="zoom-in-up"
        className="grid grid-cols-12 gap-4 w-full px-4 my-20 mx-auto"
      >
        {services.map((item, index) => (
          <div
            key={index}
            className="col-span-12 sm:col-span-6 lg:col-span-4 p-5 my-8 rounded-lg bg-white shadow-lg dark:bg-surface-dark"
          >
            <div className="ms-2">
              <h5 className="mb-2 text-2xl font-bold">{item.title}</h5>
              <p className="mb-4 text-gray-500 text-base">{item.description}</p>
            </div>
            <div className="p-6 text-center">
              <a href="#!">
                <img
                  className="block mx-auto rounded-t-lg py-6 max-h-40"
                  src={`https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2F${item.image}&w=640&q=75`}
                  alt={item.title}
                />
              </a>
              <button
                type="button"
                className="mt-4 rounded bg-black px-6 py-3 text-sm font-semibold uppercase text-white"
              >
                {item.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
