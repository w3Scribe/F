import type { FC, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EmailInputProps {
  onValid: (e: FormEvent<HTMLInputElement>) => void;
  valid: boolean;
}

const EmailInput: FC<EmailInputProps> = ({ onValid, valid }) => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 font-semibold text-xs">
        <label htmlFor="email" className=" text-charcoalGrey-500 ">
          Email address
        </label>
        <AnimatePresence>
          {!valid && (
            <motion.label
              htmlFor="email"
              className=" text-tomato-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {" "}
              Valid Email Required
            </motion.label>
          )}
        </AnimatePresence>
      </div>
      <input
        type="email"
        placeholder="email@company.com"
        id="email"
        onInput={(e) => onValid(e)}
        className={`w-full h-12 sm:h-9 px-2 border  outline-none rounded-md
        ${
          valid === false
            ? " border-tomato-500 bg-tomato-200/20 text-tomato-700 placeholder:text-tomato-300/50"
            : "border-grey-500 bg-blue-100/50"
        }`}
      />
    </div>
  );
};

export default EmailInput;
