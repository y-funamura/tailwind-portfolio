"use client";
import anime from "animejs";
import React, { useEffect, useState } from "react";
import { css, keyframes } from "@emotion/css";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowAltCircleDown as faAngleDown_re } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown as faAngleDown_so } from "@fortawesome/free-solid-svg-icons";

export const BeautifulAbstractBackground = () => {
  const [refresh, setRefresh] = useState(true);

  const blockSize = 25;

  const generate = () => {
    setRefresh(!refresh);
  };

  const scrollAbout = () => {
    generate();
    const targetEl = document.getElementById("about");

    // このコールバックを呼び出して ref.current.scrollIntoView() を呼び出してスクロール
    const scrollToBottomOfList = () => {
      targetEl?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    setTimeout(() => {
      scrollToBottomOfList();
    }, 1000);
  };

  const randomBlockColor = () => {
    const colors = ["#fff", "#444", "#ff9213"];
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
  };

  return (
    <>
      <a
        className="flex items-center justify-center  
      max-w-full min-h-screen scrollFadeIn "
        onClick={generate}
      >
        <div
          className="flex items-center justify-center flex-col -z-20
       min-w-full min-h-screen bg-white"
        >
          <h1
            className="sm:text-5xl text-3xl mb-6 font-medium
        text-gray-900 js-show-on-scroll text-center"
          >
            About this site
          </h1>
          <p
            className=" js-show-on-scroll text-sm md:text-xl
          text-left leading-8 "
          >
            このポートフォリオはReact/Next.js/TypeScript
            <br />
            <br />
            CSSはTailwindCSS（レシポンシブ対応）
            <br />
            <br />
            テストコードはjestを使用しました。
            <br />
            <br />
            経歴と身につけたスキルをまとめました。
          </p>
          {[...Array(blockSize)].map((_, i) => (
            <Block
              key={i}
              isRefresh={refresh}
              blockColor={randomBlockColor()}
            />
          ))}
        </div>
      </a>
      <div className={styles.btnWiggle} onClick={scrollAbout}>
        <FontAwesomeIcon icon={faAngleDown_so} />
      </div>
    </>
  );
};

{
  /*</div>
</a> 
   <div className={styles.container} >
<button className={styles.button} onClick={generate}>
  click here
</button>
{[...Array(blockSize)].map((_, i) => (
  <Block key={i} isRefresh={refresh} blockColor={randomBlockColor()} />
))}
</div> */
}

export default BeautifulAbstractBackground;

// ==============================================
// block
type BlockProps = {
  isRefresh: boolean;
  blockColor: string;
};

const Block = (props: BlockProps) => {
  const { isRefresh, blockColor } = props;

  useEffect(() => {
    const rangeX = [-window.innerWidth / 3, window.innerWidth / 3];
    const rangeY = [-window.innerHeight / 2.5, window.innerHeight / 2.5];

    anime({
      targets: ".block-anime",
      translateX: () => anime.random(rangeX[0], rangeX[1]),
      translateY: () => anime.random(rangeY[0], rangeY[1]),
      scale: () => anime.random(1, 3),
      duration: 2500,
      delay: anime.stagger(15),
      //   complete: animateBlocks,
    });
  }, [isRefresh]);

  // return <div className={cx(styles.block(blockColor), "block-anime")}></div>;
  return (
    <div
      className="absolute w-20 h-20 rounded-full -z-10
      -translate-x-1/2 -translate-y-1/2 t-1/2 left-1/2
      bg-opacity-40 bg-blue-200 shadow-custom
      block-anime "
    ></div>
  );
};

// ==============================================
// アニメーションの設定\
const wiggle = keyframes`
    2% {
      -webkit-transform: translate(-50%, -50%) translateX(3px) rotate(2deg);
      transform: translate(-50%, -50%) translateX(3px) rotate(2deg);
    }
    4% {
      -webkit-transform: translate(-50%, -50%) translateX(-3px) rotate(-2deg);
      transform: translate(-50%, -50%) translateX(-3px) rotate(-2deg);
    }
    6% {
      -webkit-transform: translate(-50%, -50%) translateX(3px) rotate(2deg);
      transform: translate(-50%, -50%) translateX(3px) rotate(2deg);
    }
    8% {
      -webkit-transform: translate(-50%, -50%) translateX(-3px) rotate(-2deg);
      transform: translate(-50%, -50%) translateX(-3px) rotate(-2deg);
    }
    10% {
      -webkit-transform: translate(-50%, -50%) translateX(2px) rotate(1deg);
      transform: translate(-50%, -50%) translateX(2px) rotate(1deg);
    }
    12% {
      -webkit-transform: translate(-50%, -50%) translateX(-2px) rotate(-1deg);
      transform: translate(-50%, -50%) translateX(-2px) rotate(-1deg);
    }
    14% {
      -webkit-transform: translate(-50%, -50%) translateX(2px) rotate(1deg);
      transform: translate(-50%, -50%) translateX(2px) rotate(1deg);
    }
    16% {
      -webkit-transform: translate(-50%, -50%) translateX(-2px) rotate(-1deg);
      transform: translate(-50%, -50%) translateX(-2px) rotate(-1deg);
    }
    18% {
      -webkit-transform: translate(-50%, -50%) translateX(1px) rotate(0);
      transform: translate(-50%, -50%) translateX(1px) rotate(0);
    }
    20% {
      -webkit-transform: translate(-50%, -50%) translateX(-1px) rotate(0);
      transform: translate(-50%, -50%) translateX(-1px) rotate(0);
    }
`;

const styles = {
  btnWiggle: css`
    margin-top: 100px;
    padding: 10px;
    width: 80px;
    height: 80px;
    display: inline-block;
    background: #50a8fa;
    border-radius: 50%;
    color: #3805e1;
    font-size: 50px;
    line-height: 70px;
    text-align: center;
    position: absolute;
    top: 70%;
    left: 50%;
    opacity: 50%;
    transform: translate(-50%, -50%);
    animation: ${wiggle} 3s infinite;

    &:hover {
      filter: brightness(1.1);
      color: white;
      animation: none;
    }
  `,
};
