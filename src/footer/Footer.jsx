export default function Footer() {
  return (
    <>
      <footer className="bg-gray-300 text-center ">
        {/*Sign-up form section*/}
        <div className="px-6 pt-6   ">
          <form>
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ms-auto">
                <img
                  src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Flogo.png&w=128&q=75"
                  alt=""
                />
              </div>
              <div className="relative mb-3" data-twe-input-wrapper-init>
                <input
                  type="text"
                  className="bg-white  peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-500 peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                >
                  Example label
                </label>
              </div>
              <div className="mb-6 md:me-auto">
                <button
                  type="button"
                  className="inline-block rounded bg-black mt-3 px-6 pb-2 pt-2.5 text-xs

                     font-medium uppercase leading-normal text-white shadow-white-2
                      transition duration-150 ease-in-out hover:bg-dark-accent-300
                       hover:shadow-dark-1 
                        "
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="bg-black/5 p-4 text-center">
          © 2024 Copyright:
          <a href="https://tw-elements.com/">Fawzy</a>
        </div>
      </footer>
    </>
  );
}
