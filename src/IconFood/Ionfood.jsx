export default function Ionfood() {
  return (
    <>
      <section>
        <div className="text-center my-16 md:col-start-2 col-span-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Explore Our Alowishus
          </h1>
          <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
        </div>
      
        <div  data-aos="zoom-in-up"   className="grid grid-cols-12 gap-4 w-100 mx-auto">
          {/*  */}
          <div className="col-span-12 sm:col-span-5 lg:col-span-4 p-5   mx-auto my-16 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <div className="ms-5">
              <h5 className="mb-2 text-3xl font-bold leading-tight">
                Our Catering
              </h5>

              <p className="mb-4 text-base text-gray-500">
                Some quick example text to build
              </p>
            </div>

            <div className="p-6 text-surface dark:text-white  text-center ">
              <a href="#!">
                <img
                  className="block rounded-t-lg py-6"
                  src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Ficon1.png&w=640&q=75"
                  alt=""
                />
              </a>

              <button
                type="button"
                className="block mx-auto rounded bg-black px-7 py-4 text-l font-bold
             uppercase text-white  "
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                Order Cathering
              </button>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="col-span-12 sm:col-span-5 lg:col-span-4  p-5  mx-auto my-16 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <div className="ms-5">
              <h5 className="mb-2 text-3xl font-bold leading-tight">
                The Food
              </h5>

              <p className="mb-4 text-base text-gray-500">
                Some quick example text to build
              </p>
            </div>

            <div className="p-6 text-surface dark:text-white  text-center ">
              <a href="#!">
                <img
                  className="block rounded-t-lg py-6"
                  src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Ficon2.png&w=640&q=75"
                  alt=""
                />
              </a>

              <button
                type="button"
                className="block mx-auto rounded bg-black px-7 py-4 text-l font-bold
             uppercase text-white  "
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                Order Cathering
              </button>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="col-span-12 sm:col-span-5 lg:col-span-4  p-5  mx-auto my-16 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <div className="ms-5">
              <h5 className="mb-2 text-3xl font-bold leading-tight">
                The Getato
              </h5>

              <p className="mb-4 text-base text-gray-500">
                Some quick example text to build
              </p>
            </div>

            <div className="p-6 text-surface dark:text-white  text-center ">
              <a href="#!">
                <img
                  className="block rounded-t-lg py-6"
                  src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Ficon3.png&w=640&q=75"
                  alt=""
                />
              </a>

              <button
                type="button"
                className="block mx-auto rounded bg-black px-7 py-4 text-l font-bold
             uppercase text-white  "
                data-twe-ripple-init=""
                data-twe-ripple-color="light"
              >
                Order Cathering
              </button>
            </div>
          </div>
          {/*  */}
        </div>
 
      </section>
    </>
  );
}
