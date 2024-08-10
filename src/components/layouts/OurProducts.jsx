"use client";

import Image from "next/image";
import { products } from "@/constants/global";
import { SectionHeading } from "../ui/SectionHeading";

export function OurProducts() {
  return (
    <section id="products" className="w-full flex flex-col items-center">
      <SectionHeading>Our Products</SectionHeading>

      <ul className="flex flex-wrap gap-8 justify-center">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-[285px] h-[446px] cursor-pointer relative"
          >
            <div className=" w-full h-full absolute top-0 left-0">overlay</div>

            <div className="relative">
              <Image
                src={product.productImg}
                alt={product.title}
                className="w-[285px] h-[301px] bg-orange-400"
                width="285"
                height="301"
              />

              {product.isNew && (
                <div className="absolute top-6 right-6 size-12 rounded-full bg-green_accent flex items-center justify-center text-white">
                  New
                </div>
              )}

              {product.discount && (
                <div className="absolute top-6 right-6 size-12 rounded-full bg-red_accent flex items-center justify-center text-white">
                  -{product.discount}%
                </div>
              )}
            </div>

            <div className="p-4 pb-[30px] bg-lightbg space-y-2">
              <h5 className="text-secondary font-semibold text-gray1">
                {product.title}
              </h5>

              <p className="font-medium text-gray3 ">{product.desc}</p>

              <div className="flex items-center">
                <span className="text-middle text-gray1 font-semibold mr-4">
                  {product.currPrice}
                </span>

                {product.prevPrice && (
                  <span className="text-gray4 line-through">
                    {product.prevPrice}
                  </span>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className="border hover:text-white hover:bg-primary transition border-primary py-3 px-[82px] text-primary mt-8">
        Show More
      </button>
    </section>
  );
}
