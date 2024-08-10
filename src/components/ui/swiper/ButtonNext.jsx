import { IoIosArrowForward } from "react-icons/io";

export function ButtonNext({ onClick, addStyles, isHeroSection }) {
  return (
    <button
      onClick={onClick}
      className={`z-10 custom-next absolute  transform -translate-y-1/2  p-2 rounded-full text-white ${addStyles}`}
    >
      <IoIosArrowForward
        className={`${
          isHeroSection
            ? "bg-primary text-white hover:bg-primary/30  hover:text-primary"
            : "bg-white text-primary hover:bg-primary hover:text-white"
        } size-12 p-3 transition  rounded-full shadow-lg`}
      />
    </button>
  );
}
