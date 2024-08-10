import { IoIosArrowBack } from "react-icons/io";

export function ButtonPrev({ onClick, addStyles, isHeroSection }) {
  return (
    <button
      onClick={onClick}
      className={`z-10 custom-prev absolute  transform -translate-y-1/2   rounded-full p-2 ${addStyles}`}
    >
      <IoIosArrowBack
        className={`${
          isHeroSection
            ? "bg-primary text-white hover:bg-primary/30  hover:text-primary"
            : "bg-white text-primary hover:bg-primary hover:text-white"
        } size-12 p-3 transition  rounded-full shadow-lg`}
      />
    </button>
  );
}
