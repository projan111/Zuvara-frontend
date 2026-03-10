"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-[80vh] ">
      <section className="relative flex flex-col lg:flex-row h-full  items-start pt-20 bg-white">
        <svg
          className="absolute  h-auto w-full -bottom-1 z-0 "
          viewBox="0 0 822 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M148.891 65.2047C96.8835 50.5069 28.2939 78.8661 0.5 94.8829V141.509H820.805V77.9925L779.2 52.4855C652.008 -21.0035 524.815 -12.524 408.929 52.4855C293.043 117.495 213.901 83.577 148.891 65.2047Z"
            fill="#45685E"
            stroke="babyCare"
          />
        </svg>

        <svg
          className="absolute inset-x-0 -bottom-1 z-10 block h-auto w-full"
          viewBox="0 0 821 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M583.701 64.5194C707.106 122.966 784.83 51.1007 820.305 0V125.756H0V26.3488C106.424 128.151 205.118 89.051 224.82 77.4684C241.58 67.6155 300.539 34.3333 330.035 19.1628C366.189 0.567793 414.201 7.07483 453.984 33.3621C502.951 68.6746 538.523 43.1224 583.701 64.5194Z"
            fill="#BFDDCA"
          />
        </svg>
        {/* Tree */}
        <div className="absolute right-[40%] bottom-40 z-0">
          <svg
            height="200px"
            width="200px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 511.844 511.844"
            xmlSpace="preserve"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#cadaa9" }}
                  d="M223.936,298.566c0,41.237-33.428,74.665-74.649,74.665s-74.648-33.428-74.648-74.665 c0-41.214,33.427-74.634,74.648-74.634S223.936,257.352,223.936,298.566z"
                ></path>{" "}
                <path
                  style={{ fill: "#cadaa9" }}
                  d="M437.206,277.26c0,41.205-33.427,74.633-74.665,74.633c-41.205,0-74.633-33.428-74.633-74.633 c0-41.238,33.428-74.657,74.633-74.657C403.779,202.603,437.206,236.022,437.206,277.26z"
                ></path>{" "}
              </g>{" "}
              <g>
                {" "}
                <path
                  style={{ fill: "#7F4545" }}
                  d="M263.924,393.068L156.534,290.99c-4.265-4.062-11.012-3.891-15.073,0.39 c-4.062,4.249-3.89,11.013,0.375,15.058c0,0,0,0,0,0.016L249.24,408.532L263.924,393.068z"
                ></path>{" "}
                <path
                  style={{ fill: "#7F4545" }}
                  d="M371.352,271.121c-3.374-4.804-10.028-5.943-14.84-2.539l-107.834,76.344l12.309,17.401 l107.834-76.352C373.632,282.57,374.756,275.916,371.352,271.121z"
                ></path>{" "}
              </g>{" "}
              <path
                style={{ fill: "#cadaa9" }}
                d="M362.447,106.632c0,58.896-47.734,106.639-106.631,106.639c-58.889,0-106.624-47.743-106.624-106.639 C149.191,47.743,196.926,0,255.815,0C314.712,0,362.447,47.743,362.447,106.632z"
              ></path>{" "}
              <path
                style={{ fill: "#965353" }}
                d="M255.816,95.971c-5.889,0-10.653,4.772-10.653,10.661v405.212h21.321V106.632 C266.484,100.743,261.704,95.971,255.816,95.971z"
              ></path>{" "}
              <path
                style={{ fill: "#424953" }}
                d="M287.815,490.507h-63.988c-5.889,0-10.653,4.78-10.653,10.685c0,5.873,4.765,10.652,10.653,10.652 h63.988c5.873,0,10.652-4.779,10.652-10.652C298.467,495.287,293.688,490.507,287.815,490.507z"
              ></path>{" "}
            </g>
          </svg>
        </div>
        {/* Clouds */}
        <div className="pointer-events-none absolute left-[50%] w-100 h-10 top-5 z-10 opacity-55">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke=""
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <circle
                opacity="0.5"
                cx="7"
                cy="7"
                r="5"
                fill="#d3ebe7"
              ></circle>{" "}
              <path
                d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"
                fill="#d3ebe7"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="pointer-events-none absolute right-[26%] top-10 z-40">
          <Image
            src="/waves/sun.png"
            alt="sun"
            width={100}
            height={40}
            className="h-auto w-24 lg:w-28"
          />
        </div>
        <div className="pointer-events-none absolute -left-[4%] w-100 h-10 -top-20 z-10 opacity-55">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"
                fill="#d3ebe7"
              ></path>{" "}
            </g>
          </svg>
        </div>
        <div className="pointer-events-none absolute right-[2%] w-60 h-10 -top-20 z-10 opacity-55">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"
                fill="#d3ebe7"
              ></path>{" "}
            </g>
          </svg>
        </div>
        {/* ================= LEFT CONTENT ================= */}
        <div className="relative z-20 w-full lg:w-1/2 h-full flex  px-6 lg:px-20 ">
          <div className="max-w-[80%] space-y-2 lg:space-y-4">
            <p className="text-xs lg:text-sm font-semibold tracking-wide text-foreground">
              Premium Baby Care Essentials
            </p>
            <h2 className="mt-5 text-2xl font-semibold text-foreground tracking-tight lg:text-5xl">
              Gentle protection for babies.
            </h2>

            <p className="text-sm lg:text-lg text-foreground mt-5 font-medium leading-relaxed">
              Trusted by newly married couples around the world, focusing on
              comfort and safety for your heart and healthy baby.
            </p>

            <div className="flex items-center gap-4 lg:gap-5 pt-2 lg:pt-4 flex-wrap">
              <Link href="/babyCareProduct">
                <button className="bg-[#45685e] text-white px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:shadow-xl cursor-pointer hover:scale-105 transition duration-300 text-sm lg:text-base">
                  Explore Essentials
                </button>
              </Link>
              <Link href="/contact">
                <button className="outline outline-[#45685e] text-[#45685e] px-6 lg:px-8 py-2.5 lg:py-3 rounded-full font-medium hover:scale-105 transition duration-300 text-sm lg:text-base">
                  Become a Distributor
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Waves */}
      <div></div>
      <div className="relative bottom-0 w-full overflow-visible leading-none ">
        <div></div>
        <div className="absolute -bottom-5 left-4/5 z-30 -translate-x-4/5">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-[200px] p-4 lg:p-6 overflow-hidden relative border-4"
          >
            <video
              src="/videos/babyPlaying.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-60 lg:w-300 lg:h-120  object-cover"
            />

          </motion.div>
        </div>
      </div>
    </div>
  );
}
