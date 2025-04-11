import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const clients = [
  {
    id: 1,
    name: "Aeysha Ahmed",
    image:
      "https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fgirl1.png&w=640&q=75",
    feedback:
      "Absolutely love the coffee! The quality is unmatched and the service is always great. Definitely my go-to place for an energy boost!",
  },
  {
    id: 2,
    name: "Ahmed Ali",
    image:
      "https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fman.png&w=750&q=75",
    feedback:
      "A wonderful experience every time. Smooth taste, fast service, and a cozy vibe. Highly recommended!",
  },
  {
    id: 3,
    name: "Liba Jadoon",
    image:
      "https://nextjs-coffee-shop-kappa.vercel.app/_next/image?url=%2Fcoffee%2Fgirl2.png&w=640&q=75",
    feedback:
      "I'm impressed with the consistency and the flavors. The double espresso is my absolute favorite. Great job!",
  },
];

export default function Our_Client() {
  return (
    <section>
      <div className="grid grid-cols-12 gap-4 px-2 my-16">
        {clients.map((client) => (
          <div
            key={client.id}
            className="col-span-12 sm:col-span-6 md:col-span-4 rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark"
          >
            <a href="#!">
              <img
                className="rounded-t-lg h-96 w-full object-cover"
                src={client.image}
                alt={client.name}
              />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-gray-800 text-xl font-medium leading-tight flex items-center gap-2">
                {client.name}
                <span
                  data-aos="fade-down-left"
                  className="inline-block text-orange-300"
                >
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                </span>
              </h5>
              <p className="mb-4 text-gray-400">{client.feedback}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
