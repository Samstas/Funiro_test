import { BsCart2 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { MainContainer } from "../ui/MainContainer";
import Image from "next/image";
import { TwoBackgroundBlocks } from "../ui/TwoBackgroundBlocks";

const navLinks = [
  { id: 1, section: "#products", title: "Products", dropdown: true },
  { id: 2, section: "#rooms", title: "Rooms", dropdown: true },
  { id: 3, section: "#inspirations", title: "Inspirations", dropdown: false },
];

export function Header() {
  return (
    <header>
      <MainContainer addMoreStyle="flex relative">
        <TwoBackgroundBlocks />

        <nav className="flex mt-[40px] items-center z-20 w-[1240px] mx-auto">
          <span className="font-bold text-2xl mr-[41px]">Funiro.</span>

          {/* заглушка-шаблон для ссылок */}
          <ul className="text-cblack hidden items-center gap-8 text-sm font-semibold sm:flex">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer pt-1 transition hover:border-b-2 hover:border-cmain"
              >
                {/* Link to section  */}
                <Link href={link.section} className="flex gap-2 items-center">
                  {link.title}
                  {link.dropdown && (
                    <span>
                      <IoIosArrowDown className="size-5" />
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Search Bar  */}
          <div className="w-[473px] ml-[43px] mr-[121px] bg-white flex items-center p-3 gap-3">
            <span>
              <BiSearch className="text-gray1" />
            </span>

            <input
              type="text"
              placeholder="Search for minimalist chair"
              className="placeholder-gray2 outline-none w-full"
            />
          </div>

          {/* User Navigation  */}
          <div className="flex items-center gap-8 w-[152px]">
            <AiOutlineHeart className="size-6" />
            <BsCart2 className="size-6" />
            <Image
              width="40"
              height="40"
              src="/images/header/profile_icon.png"
              alt="user icon"
            />
          </div>
        </nav>
      </MainContainer>
    </header>
  );
}
