import Link from 'next/link';
import React from 'react'

const Me = () => {
  return (
    <div
      className="z-10 absolute bottom-0 left-0 w-full text-center text-sm text-grey-400 py-6 sm:py-5
       [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-cream-700 px-10 text-pretty"
    >
      Challenge by{" "}
      <Link href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </Link>
      . Coded by{" "}
      <Link href="https://www.frontendmentor.io/profile/w3Scribe">
        Sudhir Gadpayle
      </Link>
    </div>
  );
}

export default Me
