"use client";

import { CgArrowRight } from "react-icons/cg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import Image from "next/image";
import { useRef } from "react";
import { ButtonPrev } from "../swiper/ButtonPrev";
import { ButtonNext } from "../swiper/ButtonNext";
import { heroSlides } from "@/constants/global";

export function Slider() {
  const swiperRef = useRef(null);

  return (
    <div className="w-full mx-auto px-8 z-30 mt-[136px] h-[553px] relative">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        centeredSlides={true}
        spaceBetween={0}
        slidesPerView="auto"
        slidesOffsetBefore={400}
        slidesOffsetAfter={50}
        pagination={{
          el: `.slider_dots_hero`,
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {heroSlides.map(({ id, image, title, text, price }) => (
          <SwiperSlide key={id} className="flex flex-col mb-10 cursor-pointer">
            <div className="max-h-[553px] max-w-[934px] relative ">
              <Image
                src={image}
                width="934"
                height="553"
                alt={title}
                className="max-h-[553px] max-w-[934px]"
              />

              <div className="p-6 bg-white backdrop-blur-lg  opacity-[0.72] flex gap-[57px] absolute bottom-[40px] right-[40px]">
                <div>
                  <h4 className="text-secondary gray-1 font-semibold mb-1">
                    {title}
                  </h4>

                  <p className="text-gray2 font-medium mb-2">{text}</p>

                  <p className="text-gray1 text-middle font-semibold">
                    {price}
                  </p>
                </div>

                <CgArrowRight className="size-6 mt-auto" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <ButtonPrev
        isHeroSection={true}
        addStyles="top-[-40px] right-[125px]"
        onClick={() => swiperRef.current.slidePrev()}
      />

      <ButtonNext
        isHeroSection={true}
        addStyles="top-[-40px] right-[65px]"
        onClick={() => swiperRef.current.slideNext()}
      />

      <div className="z-20 absolute top-[-85px] left-[125px] p-[60px] bg-white bg-opacity-[0.7] backdrop-blur-lg  max-w-[494px] max-h-[553px]">
        <h1 className="text-[56px] text-gray1 leading-[67.2px] font-bold mb-4">
          High-Quality Furniture Just For You
        </h1>

        <p className="font-medium text-middle mb-12 text-gray3">
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home
        </p>

        <button className="w-full bg-primary text-white py-6 font-semibold text-middle">
          Shop now
        </button>
      </div>
    </div>
  );
}
