import Image from "next/image";
import { features } from "@/constants/global";

export function Features() {
  return (
    <section className="mt-[88px] flex justify-center">
      <ul className="flex gap-[92px] justify-center items-center w-[1237px]">
        {features.map(({ id, iconPath, title, text }, index) => (
          <li
            key={id}
            className={`flex gap-6 items-center ${
              index === features.length - 1 ? "mr-0 pr-0" : ""
            }`}
          >
            <Image
              src={iconPath}
              alt={title}
              width="40"
              height="40"
              className="size-[40px]"
            />

            <div>
              <p className="mb-[2px]">{title}</p>
              <p className="text-gray3">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
