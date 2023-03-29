import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";

import "@splidejs/react-splide/css";
import { FC, useEffect } from "react";
import Image from "next/image";

// または、ほかのテーマ
// import '@splidejs/react-splide/css/skyblue';
// import '@splidejs/react-splide/css/sea-green';

// あるいは、コアスタイルのみ
// import '@splidejs/react-splide/css/core';+
export type img = string;
export type imgs = img[];

const Slider: FC<{ props: img[] }> = ({ props = ["img"] }) => {
  const images: string[] = [...props];

  // const mainOptions: Options = {
  //   type: "loop",
  //   rewind: true,
  //   perPage: 1,
  //   perMove: 1,
  //   gap: "1rem",
  //   pagination: true,
  //   height: "27.8125rem",
  // };
  const mainOptions: Options = {
    type: "fade",
    rewind: true,
    lazyLoad: "sequential",
    // perPage: 3,
    // perMove: 1,
    gap: "1rem",
    pagination: true,
    autoplay: true,
    interval: 2000,
    speed: 400,
    // autoWidth: true,
    // autoheight: true,
    height: "27.8125rem",
    // cover: true,
  };

  return (
    <>
      <Splide options={mainOptions}>
        {images.map((imgStr, i) => {
          return (
            <SplideSlide key={i}>
              <img
                key={i}
                className="slide-img m-auto"
                // layout="fill"
                src={imgStr}
                alt=""
              />
            </SplideSlide>
          );
        })}
      </Splide>

      {/* 画像の高さを揃えて表示させるために以下スタイルを適用 */}
      <style jsx>{`
        .slide-img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      `}</style>
    </>
  );
};

export default Slider;
