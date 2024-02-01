"use client";

import Image from "next/image";
import List from "./List";
import Button from "./Button";
import { AnimatePresence, animate, motion } from "framer-motion";
import { BaseSyntheticEvent, useState } from "react";
import clsx from "clsx";

export default function Home(): JSX.Element {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const isValidInput = (e: BaseSyntheticEvent) => {
    const emailRegex: RegExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const { value: email } = e.target;
    setIsValidEmail(email == "" ? true : emailRegex.test(email));
  };

  const lableAnimation = {
    hide: { opacity: 0, x: 40 },
    show: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 0 },
  };

  return (
    <section className="w-screen h-screen bg-charcoal-grey sm:flex sm:justify-center sm:items-center">
      <motion.main
        layout
        className="bg-white h-screen w-full sm:h-[370px] sm:w-[550px] sm:p-5 sm:rounded-xl sm:shadow-md flex flex-col-reverse sm:flex-row justify-end sm:justify-start sm:gap-4 gap-2"
      >
        {/* Left_Botton_Side */}
        <div>
          {/* info */}
          <div className="flex flex-col gap-4 px-8 my-2 sm:p-0">
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
          <div className="my-0 sm:my-5 sm:pr-4 sm:pt-0 sm:pl-0 p-8">
            <form action={"/thanks"}>
              <span className="flex justify-between items-center py-1 text-xs font-semibold">
                <label htmlFor="email" className="text-slate-700">
                  Email address
                </label>
                <AnimatePresence>
                  {!isValidEmail && (
                    <motion.label
                      htmlFor="email"
                      className="text-red-500"
                      variants={lableAnimation}
                      initial="hide"
                      animate="show"
                      exit="exit"
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 20,
                      }}
                    >
                      Valid Email required
                    </motion.label>
                  )}
                </AnimatePresence>
              </span>
              <input
                type="email"
                id="email"
                placeholder="email@company.com"
                autoComplete="false"
                className={clsx(
                  "h-11 sm:h-9 w-full outline-none border  px-3 py-2 rounded-md text-sm  valid:bg-slate-200",
                  !isValidEmail
                    ? "border-red-600 focus:border-red-600 text-red-700 bg-red-200 placeholder:text-red-400"
                    : "focus:border-slate-700 border-slate-400"
                )}
                onInput={(e) => isValidInput(e)}
              />
              <Button name="Subscribe to monthly newsletter" />
            </form>
          </div>
        </div>
        {/* Right_Top Side */}
        <div className="relative sm:w-56 sm:h-full w-full h-72">
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
