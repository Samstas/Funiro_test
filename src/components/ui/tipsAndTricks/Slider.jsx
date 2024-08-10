"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";

import Image from "next/image";
import { useRef } from "react";
import { tipsSlides } from "@/constants/global";
import { ButtonPrev } from "../swiper/ButtonPrev";
import { ButtonNext } from "../swiper/ButtonNext";

export function Slider() {
  const swiperRef = useRef(null);

  return (
    <div className="w-[1300px] mx-auto relative mb-[44px]  px-8 ">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        spaceBetween={32}
        slidesPerView={3}
        pagination={{
          el: `.slider_dots`,
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {tipsSlides.map(({ id, image, title, date }) => (
          <SwiperSlide
            key={id}
            className="flex flex-col hover:shadow-lg max-w-[391px] mb-10 cursor-pointer"
          >
            <Image
              src={image}
              width="391"
              height="251"
              alt="tips image"
              className="max-h-[251px] max-w-[391px]"
            />

            <div className="min-h-[119px] p-4 leading-[28.8px]">
              <h5 className="text-secondary font-semibold mb-2">{title}</h5>

              <p className="text-gray3 text-sm">{date}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="slider_dots"></div>

      <ButtonPrev
        addStyles="top-[186px] left-0"
        onClick={() => swiperRef.current.slidePrev()}
      />
      <ButtonNext
        addStyles="top-[186px] right-0"
        onClick={() => swiperRef.current.slideNext()}
      />
    </div>
  );
}
