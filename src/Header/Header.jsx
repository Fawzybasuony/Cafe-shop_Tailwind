export default function Header() {
  return (
    <>
      <header>
        <div className="grid grid-cols-12  items-center w-100 h-auto py-5 bg-slate-100">
          <div className="col-span-12 md:col-span-6  ms-10 inline-block pt-[100px]">
            <h1 className="w-full text-5xl lg:text-7xl text-black font-bold">
              Alowishus Deliciious Coffee
            </h1>

            <div className="col-span-12  flex justify-center">
              <img
                data-aos="fade-left"
                className="h-64 md:hidden"
                src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Falowishus-coffee.png&w=1200&q=75"
                alt=""
              />
            </div>
            <p className="text-xl mt-10 text-gray-700">
              Experience the finest coffee with Alowishus. Enjoy rich, bold
              flavors in every cup, delivered straight to your doorstep. Make
              every moment extraordinary with every sip. Download our app today
              or shop for premium coffee from our store.
            </p>

            <div className=" pt-10">
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className=" hover:scale-105
                 inline-block rounded bg-black btn-info px-8 py-3 text-xs
                  font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-300 ease-in-out      "
              >
                Downlaod App
              </button>
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="hover:scale-105 duration-300 ease-in-out inline-block rounded bg-white border-t-neutral-950 mt-5 md:mt-0  md:ms-5 px-12   py-3 text-xs
 font-bold uppercase leading-normal text-black "
              >
                Shop Coffee
              </button>
            </div>
          </div>
          <div className="col-span-6 inline-block">
            <img
              data-aos="fade-left"
              className="h-auto hidden md:block"
              src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Falowishus-coffee.png&w=1200&q=75"
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
}
