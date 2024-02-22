"use client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import EmailInput from "./EmailInput";
import { FormEvent, useState } from "react";
import Button from "./Button";
import Me from "./Me";
import Dialog from "./Dialog";

const HomePage: NextPage = () => {
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [currentValue, setCurrentValue] = useState<string>("");
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const points: string[] = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const isValid = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    const emailRegex: RegExp =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValidEmail(emailRegex.test(input.value));
    setCurrentValue(input.value);
  };

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <section
      className={`h-svh sm:min-h-screen w-svw sm:w-screen bg-charcoalGrey-500 sm:grid place-items-center ${
        isSubmitted && "grid place-items-center"
      }`}
    >
      {isSubmitted ? (
        <Dialog
          userDetails={currentValue}
          onClick={() => setIsSubmitted(false)}
        />
      ) : (
        <main
          className=" w-full h-svh sm:w-[600px] md:w-[650px] sm:h-[450px] sm:rounded-3xl bg-white sm:p-5 
      flex flex-col gap-6 sm:gap-3 sm:flex-row-reverse"
        >
          {/* image */}
          <div className="relative w-full sm:w-[43%] h-80 sm:h-full [&_img]:object-cover  ">
            <Image
              src={"/desk.svg"}
              alt=""
              fill
              className="hidden sm:inline-block rounded-2xl"
            />
            <Image
              src={"/mobile.svg"}
              alt=""
              fill
              className="inline-block sm:hidden rounded-b-2xl"
            />
          </div>
          {/* info container */}
          <div className="w-full h-auto px-5 sm:w-[calc(100%-43%)] sm:px-2 sm:pt-10 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-charcoalGrey-500">
              Stay updated!
            </h2>
            <p className=" text-gray-700 sm:text-sm">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            {/* list points */}
            <ul className="space-y-4 [&_li]:sm:text-sm text-gray-700">
              {points.map((points, index) => (
                <li key={index}>
                  <span className="relative size-3.5 sm:size-3 inline-block [&_img]:object-contain mr-2">
                    <Image src={"/icon-list.svg"} alt="" fill />
                  </span>
                  {points}
                </li>
              ))}
            </ul>
            <EmailInput onValid={(e) => isValid(e)} valid={isValidEmail} />
            <Button
              label={"Subscribe to monthly newsletter"}
              onClick={() =>
                currentValue?.length > 1 && isValidEmail && submitForm()
              }
            />
          </div>
        </main>
      )}

      <Me />
    </section>
  );
};

export default HomePage;
