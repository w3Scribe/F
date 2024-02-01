"use client";

import Image from "next/image";
import List from "./List";
import Button from "./Button";
import {motion} from "framer-motion"

export default function Home(): JSX.Element {
  return (
    <section className="w-screen h-svh sm:min-h-screen bg-charcoal-grey sm:flex sm:justify-center sm:items-center">
      <motion.main layout className="bg-white h-full w-full sm:h-[360px] sm:w-[530px] sm:p-5 sm:rounded-xl sm:shadow-md flex flex-col-reverse sm:flex-row items-stretch gap-4">
        {/* Left_Botton_Side */}
        <div>
          {/* info */}
          <div className="flex flex-col gap-4 p-8 sm:p-0">
            <h3 className="text-3xl text-slate-800/90 font-bold">
              Stay updated!
            </h3>
            <p className="text-sm text-slate-700">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="flex flex-col gap-2">
              <List list="Product discovery and building what matters" />
              <List list="Measuring to ensure updates are a success" />
              <List list="And much more!" />
            </div>
          </div>
          {/* form */}
          <div className="my-5 sm:pr-2 sm:pt-0 sm:pl-0 p-8">
            <span className="flex justify-between items-center py-1 text-xs font-semibold">
              <label htmlFor="email" className="text-slate-700">
                Email address
              </label>
              <label htmlFor="email" className="text-red-500">
                Valid Email required
              </label>
            </span>
            <input
              type="text"
              id="email"
              placeholder="email@company.com"
              className=" h-9 w-full outline-none border border-slate-400 px-3 py-2 rounded-md text-sm"
            />
            <Button name="Subscribe to monthly newsletter" />
          </div>
        </div>
        {/* Right_Top Side */}
        <div className="relative sm:w-56 sm:h-full w-full h-72 bg-black">
          <Image
            src="/desk.svg"
            alt="desk image"
            layout="fill"
            className="hidden sm:block object-cover"
          />
          <Image
            src="/mobile.svg"
            alt="mobile image"
            layout="fill"
            className="block sm:hidden object-contain w-full"
          />
        </div>
      </motion.main>
    </section>
  );
}
