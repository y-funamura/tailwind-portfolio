import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Options } from "@splidejs/splide";

import "@splidejs/react-splide/css";
import { FC, useRef } from "react";
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

  const mainOptions: Options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "1rem",
    pagination: false,
    height: "27.8125rem",
  };

  const mainRef = useRef<Splide>(null);

  const handleThumbs = (id: number) => {
    if (mainRef.current) {
      mainRef.current.go(id);
    }
  };

  return (
    <>
      <Splide options={mainOptions} ref={mainRef}>
        {images.map((imgStr, i) => {
          return (
            <SplideSlide key={i}>
              <Image
                key={i}
                className="slide-img object-contain m-auto"
                layout="fill"
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
