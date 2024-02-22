import Image from "next/image";
import type { FC } from "react";
import Button from "./Button";

interface DialogProps {
  userDetails: string;
  onClick: Function;
}

const Dialog: FC<DialogProps> = ({ userDetails, onClick }) => {
  return (
    <div className=" bg-white w-full h-svh sm:w-72 sm:h-[370px] rounded-md space-y-4 flex sm:inline-block flex-col pt-40 pb-24 px-5 sm:p-5 justify-between">
      <div className="sm:mt-auto space-y-8 sm:space-y-4">
        <Image src={"/icon-success.svg"} alt="success" width={40} height={40} />
        <h3 className=" text-6xl sm:text-4xl font-semibold text-slateGrey-500">
          Thanks for subscribing!
        </h3>
        <p className=" text-charcoalGrey-500">
          A confirmation email has been sent to <b>{userDetails}</b> Please open
          it and click the button inside to confirm your subscription.
        </p>
      </div>
      <Button label="Dismiss message" onClick={() => onClick()} />
    </div>
  );
};
export default Dialog;
