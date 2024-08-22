export default function Header() {
  return (
    <>
      <header>
        <div className="grid grid-cols-12  items-center w-100 h-auto py-5 bg-slate-100">
          <div className="col-span-6  ms-10 inline-block pt-[100px]">
            <h1 className="text-7xl text-black font-bold">
              Alowishus Deliciious Coffee
            </h1>

            <p className="text-xl mt-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi,
              quae placeat. Corrupti, omnis id a consequatur eius saepe quia
              dignissimos.
            </p>
            <div className=" pt-10">
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className=" 
                 inline-block rounded bg-black btn-info px-8 py-3 text-xs
                  font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out      "
              >
                Downlaod App
              </button>
              <button
                type="button"
                data-twe-ripple-init
                data-twe-ripple-color="light"
                className="inline-block rounded bg-white border-t-neutral-950 mt-5 md:mt-0  md:ms-5 px-12   py-3 text-xs
 font-bold uppercase leading-normal text-black "
              >
                Shop Coffee
              </button>
            </div>
          </div>

          <div className="col-span-6 inline-block">
            <img
              className=" h-[600px]"
              src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Falowishus-coffee.png&w=1200&q=75"
              alt=""
            />
          </div>
        </div>
      </header>
    </>
  );
}
