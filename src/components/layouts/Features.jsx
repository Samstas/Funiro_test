import Image from "next/image";
import { features } from "@/constants/global";

export function Features() {
  return (
    <section className="mt-[88px] ">
      <ul className="flex gap-[92px] mx-auto items-center w-[1237px]">
        {features.map(({ id, iconPath, title, text }) => (
          <li key={id} className="flex gap-6 items-center">
            <Image
              src={iconPath}
              alt={title}
              width="40"
              height="40"
              className="size-[40px]"
            />

            <div>
              <p className="mb-[2px]">{title}</p>
              <p className="">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
