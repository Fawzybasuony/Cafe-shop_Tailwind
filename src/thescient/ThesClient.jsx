/* eslint-disable react/jsx-pascal-case */

import Client_Testimonial from "./Client_Testimonial";
import Our_Client from "./Our_Client";

export default function ThesClient() {
  return (
    <>
      <section>
        <div className="grid grid-cols-12 my-20 items-center w-100 h-auto bg-slate-100">
          <div className="col-span-12 sm:col-span-5 md:col-span-6  ms-10 inline-block pt-[100px]">
            <h1 className="text-3xl lg:text-6xl text-black font-bold">
              Instant Coffee At Your Home
            </h1>

            <p className="text-xl py-6 text-gray-700">
              Enjoy premium instant coffee anytime, anywhere — straight from the
              comfort of your home. Just download the app and make every morning
              richer, smoother, and full of flavor.
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
             data-aos="zoom-in-up"
              className="ps-[100px] md:ps-[200px]  lg:ps-[300px] py-10 sm:py-0"
            >
              <img
                className="w-[200px] h-auto absolute  rotate-6"
                src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fcoffee-banner.png&w=640&q=75"
                alt="main_photo"
              />
              <img
                className="w-[200px]  h-auto -rotate-12"
                src="https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fcoffee-banner.png&w=640&q=75"
                alt="main_photo"
              />
            </div>
          </div>
        </div>
      </section>

      {/*___Testimonial  */}
      <Client_Testimonial />

      {/*___Our_Client  */}
      <Our_Client />
    </>
  );
}
