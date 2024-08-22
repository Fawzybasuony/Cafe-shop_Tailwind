import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ThesClient() {
  return (
    <>
      <section>
        <div className="grid grid-cols-12  items-center w-100 h-auto bg-slate-100">
          <div className="col-span-12 sm:col-span-5 md:col-span-6  ms-10 inline-block pt-[100px]">
            <h1 className="text-7xl text-black font-bold">
              Instant Coffee At Your Home
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
                 inline-block rounded-xl bg-black btn-info px-8 py-5 text-xl
                  font-bold uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out      "
              >
                Downlaod Your App
              </button>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-5 md:col-span-6 relative ">
            <div
              data-aos="fade-left"
              className="ps-[100px] md:ps-[200px]  lg:ps-[300px] py-10 sm:py-0"
            >
              <img
                className="w-[200px] h-[600px] absolute  rotate-6"
                src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fcoffee-banner.png&w=640&q=75"
                alt=""
              />
              <img
                className="w-[200px]  h-[600px] -rotate-12"
                src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fcoffee-banner.png&w=640&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="text-center my-16">
          <h1 className="text-3xl md:text-5xl font-bold">Client Testimonial</h1>

          <p className="py-4 md:w-2/4 mx-auto text-gray-500 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus optio
            quisquam dicta maxime, perferendis veniam!
          </p>
          <div className="flex justify-center  ">
            <div
              data-aos="fade-right"
              className="flex -space-x-2 overflow-hidden"
            >
              <img
                className="inline-block h-16 w-14 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="."
              />
              <img
                className="inline-block h-16 w-14 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="."
              />
              <img
                className="inline-block h-16 w-14 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                alt="."
              />
              <img
                className="inline-block h-16 w-14 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="."
              />
            </div>
            <div className="border-r-4 border-indigo-950 px-5"></div>
            <div className="ms-2">
              <h2 className="text-3xl text-left font-bold">
                4.6
                <FontAwesomeIcon
                  className="text-orange-300 ms-1"
                  icon={faStar}
                />
              </h2>
              <p className="py-4   text-gray-500 text-xs">
                Rated by 25k on google.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12 gap-4 px-2 my-16">
          <div className="col-span-12 sm:col-span-5 md:col-span-4 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
              <img
                className="rounded-t-lg h-96"
                src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fgirl1.png&w=640&q=75"
                alt="."
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-gray-700 backdrop:before: text-xl font-medium leading-tight">
                Aeysha Ahmed
                <div
                  data-aos="fade-down-left"
                  className="ms-3 inline-block text-orange-300 "
                >
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                </div>
              </h5>
              <p className="mb-4 text-gray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-5 md:col-span-4 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
              <img
                className="rounded-t-lg  h-96"
                src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fman.png&w=750&q=75"
                alt="."
              />
            </a>
            <div className="p-6   ">
              <h5 className="mb-2 text-gray-700 text-xl font-medium leading-tight">
                {" "}
                Ahmed ali
                <div
                  data-aos="fade-down-left"
                  className="ms-3 inline-block  text-orange-300"
                >
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                </div>
              </h5>
              <p className="mb-4  text-gray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-5 md:col-span-4 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
            <a href="#!">
              <img
                className="rounded-t-lg  h-96"
                src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fgirl2.png&w=640&q=75"
                alt="."
              />
            </a>
            <div className="p-6 ">
              <h5 className="mb-2 text-gray-800 text-xl font-medium leading-tight">
                Liba Jadoon
                <div
                  data-aos="fade-down-left"
                  className="ms-3 inline-block text-orange-300"
                >
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                  <FontAwesomeIcon className=" " icon={faStar} />
                </div>
              </h5>
              <p className="mb-4 text-gray-400">
                Some quick example text to build on the card title and make up
                the bulk of the card's content. Some quick example text to build
                on the card title and make up the bulk of the card's content.
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
