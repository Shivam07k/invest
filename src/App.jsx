import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function InvestWithUs() {
  const [flipped, setFlipped] = useState(false);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const points = [
    "High ROI and steady returns",
    "Transparent operations and reporting",
    "Social impact through urban mobility",
    "Dedicated investor support",
  ];

  const images = [
    process.env.PUBLIC_URL + "/images/invest1.jpg",
    process.env.PUBLIC_URL + "/images/invest2.jpg",
    process.env.PUBLIC_URL + "/images/invest3.jpg",
    process.env.PUBLIC_URL + "/images/invest4.jpg",
    process.env.PUBLIC_URL + "/images/invest5.jpg",
  ];

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  function handleCardClick() {
    setFlipped(!flipped);
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.9, y: -40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold">Invest with Us</h1>
        <p className="mt-4 text-xl text-gray-700">
          Join our mission to revolutionize urban transportation. Explore
          investment opportunities that drive change.
        </p>
      </motion.section>

      {/* Investment Opportunities */}
      <section className="grid md:grid-cols-3 gap-6">
        {["Why Invest", "Opportunities", "Get Started"].map((title, i) => {
          if (title === "Get Started") {
            return (
              <div
                key={title}
                onClick={handleCardClick}
                className="relative group [perspective:1000px] min-h-[300px] cursor-pointer"
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 ease-in-out transform ${
                    flipped ? "rotate-y-180" : ""
                  }`}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front */}
                  <div
                    className="absolute w-full h-full rounded-2xl shadow-lg bg-gradient-to-br from-black via-gray-900 to-black text-white border border-gray-800 p-6"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                    <p className="text-gray-300">
                      Connect with our investment team and embark on a rewarding
                      journey.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl"
                    >
                      Contact Us
                    </motion.button>
                  </div>

                  {/* Back */}
                  <div
                    className="absolute w-full h-full rounded-2xl shadow-lg bg-gradient-to-br from-black via-gray-900 to-black text-white border border-gray-800 p-6 flex flex-col justify-center items-center text-center"
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-2">Get in Touch</h3>
                    <a
                      href="mailto:sandeipgoyel@yellowrides.com"
                      className="text-yellow-400 hover:underline"
                    >
                      sandeipgoyel@yellowrides.com
                    </a>
                    <a
                      href="tel:+91-7719742014"
                      className="mt-2 text-yellow-400 hover:underline"
                    >
                      +91-7719742014
                    </a>
                    <a
                      href="tel:+91-9582210289"
                      className="mt-2 text-yellow-400 hover:underline"
                    >
                      +91-9582210289
                    </a>
                  </div>
                </div>
              </div>
            );
          }

          // Other cards
          return (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-black via-gray-900 to-black text-white hover:shadow-xl transition duration-300 border border-gray-800"
            >
              <h2 className="text-2xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-300">
                {title === "Why Invest" &&
                  "Benefit from transparent operations and promising returns by partnering with us."}
                {title === "Opportunities" &&
                  "Explore current investment options tailored for sustainable growth."}
              </p>
            </motion.div>
          );
        })}
      </section>

      {/* Testimonials */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-black via-gray-900 to-black text-white p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          What Our Partners Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              quote:
                "Partnering with this initiative transformed my career. I started with one vehicle and now manage a fleet.",
              name: "– UJJWAL",
            },
            {
              quote:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tenetur praesentium optio hic rerum quaerat modi, voluptatum incidunt quos libero, nemo corrupti!",
              name: "– HARERAM",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.3, duration: 0.6 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white shadow hover:shadow-xl transition"
            >
              <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              <p className="mt-4 font-semibold text-yellow-400">
                {testimonial.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Investor Points + Gallery */}
      <section className="grid md:grid-cols-2 gap-8 items-center py-16">
        {/* Points */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <ul className="space-y-3 text-lg text-gray-700">
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-yellow-400 mt-1">✔️</span> {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Image Gallery */}
        <div
          className="relative w-full aspect-video overflow-hidden rounded-2xl shadow-lg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {images.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Gallery ${i}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
                i === current ? "opacity-100 scale-110" : "opacity-0"
              }`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: i === current ? 1 : 0,
                scale: i === current ? 1.1 : 0.95,
              }}
              transition={{ duration: 0.7 }}
            />
          ))}
        </div>
      </section>

      {/* New Impact Section */}
      <section className="py-16 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            Our Impact Beyond Business
          </h2>
          <p className="text-gray-800 max-w-2xl mx-auto">
            Committed to a brighter future for all through responsible business
            practices.
          </p>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              image: process.env.PUBLIC_URL + "/images/impact1.jpg",
              title: "Support Safe Transportation Initiatives",
              description:
                "Partner with NGOs to provide safe rides at night.Offer free or discounted rides during emergencies,especially for women,elderly,or disabled people",
              link: "#",
            },
            {
              image: process.env.PUBLIC_URL + "/images/impact2.jpg",
              title: "Enviroment Contributions",
              description:
                "Shift parts of their fleet to electric vechile and promote greener transportation",
              link: "#",
            },
            {
              image: process.env.PUBLIC_URL + "/images/impact3.jpg",
              title: "Charity Drives",
              description:
                "Hold periodic free ride days where customers can donate instead of paying fares",
              link: "#",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="rounded-2xl shadow-lg bg-white hover:shadow-xl transition p-4 flex flex-col items-start"
              whileHover={{ y: -10 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-xl mb-4 filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-yellow-500 hover:underline font-medium"
              >
                Learn more
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Subscribe + Contact */}
        <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Subscribe */}
          <div>
            <h4 className="text-2xl font-semibold mb-2">
              Subscribe to our email alerts
            </h4>
            <p className="text-gray-600 mb-4">
              Get regular updates through email
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-2xl font-semibold mb-2">Have questions?</h4>
            <p className="text-gray-600">
              Reach out to us by emailing at{" "}
              <a
                href="mailto:jai.shreeram.intnl@gmail.com"
                className="text-orange-800 hover:underline"
              >
                jai.shreeram.intnl@gmail.com
              </a>
              , and we'll get back to you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InvestWithUs;
