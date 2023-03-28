"use client";
// import icon from ",/asets/img/icon2.jpg";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
import "tailwindcss/tailwind.css";
import { useEffect, useState } from "react";
import scrollFadeIn from "./components/util/scrollFadeIn";
import { BeautifulAbstractBackground } from "./components/animation/beautifulAbstractBackground";
import RadarChartSkill, { Data } from "./components/chart/radarChart";
import Mail from "./components/Mail";
import Slider, { imgs } from "./components/Slider";
import ModalBtn from "./components/ModalBtn";
import ModalElement from "./components/ModalElement";
import Image from "next/image";

export default function Home() {
  // const router = useRouter();
  // const hrefContact: string = "/page/mail";

  const prod = process.env.NODE_ENV === "production";
  const BACKEND_URL = prod ? "/tailwind-portfolio/" : "";
  const dir = String(BACKEND_URL);

  const frontEndDatas: Data[] = [
    { skill: "React", value: 3 },
    { skill: "Java Script", value: 3 },
    { skill: "HTML/CSS", value: 4 },
    { skill: "CSS FW:TailWind", value: 2 },
    { skill: "CSS FW:Bootstrap", value: 2 },
  ];

  const backEndDatas: Data[] = [
    { skill: "Java", value: 3 },
    { skill: "C#", value: 4 },
    { skill: "C++", value: 2 },
    { skill: "COBOL", value: 2 },
    { skill: "PHP", value: 1 },
  ];

  const portfolioImg: imgs = [
    dir + "img/portfolio1.bmp",
    dir + "img/portfolio2.bmp",
    dir + "img/portfolio3.bmp",
  ];

  const chatImg: imgs = [dir + "img/chat1.bmp", dir + "img/chat2.bmp"];
  const chatGPTImg: imgs = [dir + "img/chatGPT1.bmp", dir + "img/chatGPT2.bmp"];

  const [headerClassNm, setHeaderClassNm] = useState(
    "z-30 sticky top-0 bg-opacity-50 bg-blue-100 text-gray-700 h-16"
  );

  const HeaderChange = (isModal: boolean) => {
    isModal
      ? setHeaderClassNm("z-30 sticky top-0 bg-opacity-50 text-gray-700 h-16")
      : setHeaderClassNm(
          "z-0 sticky top-0 bg-opacity-50 text-gray-700 border-b border-black h-16"
        );
  };

  useEffect(() => {
    scrollFadeIn();
  }, []);

  // -------------------------- モーダル関連 --------------------------
  // モーダルが表示されている状態を管理
  const [modalOpen, setModalOpen] = useState(false);
  // モーダルの名前を管理
  const [modalName, setModalName] = useState("");
  // 読み込みの完了を管理
  const [readComplete, setReadComplete] = useState(false);

  // モーダルが表示されたらbody要素にクラスを追加
  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("is_modal");
    } else {
      document.body.classList.remove("is_modal");
    }
  }, [modalOpen]);

  // モーダルボタンをクリック（イベント）
  const modalClick = (btnName: string) => {
    setModalOpen((prev) => !prev);
    HeaderChange(modalOpen);
    setReadComplete(false);

    // 表示するモーダルを紐付け
    setModalName(btnName);
  };

  return (
    <>
      <header className={headerClassNm}>
        <div className="flex bg-blue-300 bg-opacity-5 border-b border-black">
          <a
            href="#"
            className="mx-2 text-gray-900 font-bold
            animate-rotate-in-center text-center"
          >
            <div className="">
              <h1 className="text-indigo-700 tracking-tight sm:text-3xl text-lg">
                Yohei Funamura
              </h1>
              <h2 className="md:text-lg text-sm">P o r t f o l i o</h2>
            </div>
          </a>
          <nav className="flex justify-end md:ml-auto text-base h-16">
            <a
              href="#"
              className=" hover:text-white 
            hover:bg-green-400 hover:shadow-black hover:shadow-sm  hover:font-black
              duration-700 ease-out flex items-center"
            >
              <div className="md:px-6 px-3 w-full">Home</div>
            </a>
            <a
              href="#about"
              className=" hover:text-white
            hover:bg-green-400 hover:shadow-black hover:shadow-sm  hover:font-black
              duration-700 ease-out flex items-center"
            >
              <div className="md:px-6 px-3">About</div>
            </a>
            <a
              href="#works"
              className=" hover:text-white 
            hover:bg-green-400 hover:shadow-black hover:shadow-sm  hover:font-black
              duration-700 ease-out flex items-center"
            >
              <div className="md:px-6 px-3">Works</div>
            </a>
            <a
              href="#skill"
              className="  hover:text-white 
              hover:bg-green-400 hover:shadow-black hover:shadow-sm  hover:font-black
              duration-700 ease-out flex items-center"
            >
              <div className="md:px-6 px-3">Skills</div>
            </a>
            <a
              className=" hover:text-white hover:text-base hover:cursor-pointer
            hover:bg-green-400 hover:shadow-black hover:shadow-sm  hover:font-black
              duration-700 ease-out flex items-center"
              onClick={() => modalClick("Contact")}
            >
              <div className="md:px-6 px-3">
                {/* <Link href={hrefContact} className="">
                Contact
              </Link> */}
                Contact
              </div>
            </a>
          </nav>
        </div>
      </header>

      <section className="z-0">
        {/* <section className="min-w-full min-h-screen relative -z-10"> */}
        <BeautifulAbstractBackground />
      </section>

      <section
        id="about"
        className="text-gray-700 bg-blue-100 flex flex-col items-center justify-center
        min-w-full min-h-screen "
      >
        <div className="my-4 max-w-md sm:max-w-3xl">
          <h1
            className="sm:text-5xl text-3xl mb-6 font-medium
          text-gray-900 js-show-on-scroll text-center"
          >
            About Me
          </h1>
          <p className="js-show-on-scroll text-sm md:text-xl text-left leading-8">
            はじめまして、私は1985年生まれの新潟県出身のエンジニアです。
            <br />
            <br />
            IT業界で業務系アプリケーション（Java C#...） 開発からスタートして
            <br />
            <br />
            医療系のシステムベンダでシステム提案・導入・運用・テクニカルサポートを経て
            <br />
            <br />
            現在は部署移動してWebアプリケーション開発をしております。
            <br />
            <br />
            Webアプリケーション開発ではフロントエンド:React TypeScript Ant
            Design(UI)
            <br />
            <br />
            バックエンド:Java、PostgresSQLを使用していて、主にフロントエンド側を担当しております。
            <br />
            <br />
            ソース管理はGitHub、プロジェクト管理はRedmineです。
          </p>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none
                hover:bg-green-600 rounded text-lg"
            onClick={() => modalClick("Contact")}
          >
            Contact
          </button>
        </div>
      </section>

      <section
        id="works"
        className="text-gray-700 bg-green-100 flex flex-col items-center justify-center
        min-w-full min-h-screen "
      >
        <div className="mt-4 max-w-md sm:max-w-3xl">
          <h1
            className="sm:text-5xl text-3xl mb-6 font-medium
           text-gray-900 js-show-on-scroll text-center"
          >
            Works
          </h1>
          <p className="js-show-on-scroll text-sm md:text-xl text-left leading-8">
            常日頃から私自身が様々なWebサービスを利用していて
            <br />
            <br />
            物凄く生活が豊かになっていると感じております。
            <br />
            <br />
            エンジニアとしてWebサービスを提供する側として
            <br />
            <br />
            社会に貢献できることは何か考えております。
            <br />
            <br />
            常にアンテナを張り、新しい技術をキャッチアップして
            <br />
            <br />
            需要と供給をマッチングするようなWebサービスを
            <br />
            <br />
            提供できるように努力していきます。
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly my-6 w-full">
          <div className="flex items-center flex-col">
            <ModalBtn
              className=" bg-gray-100  rounded-lg shadow-md shadow-black
              hover:scale-110 duration-500 hover:brightness-105
              bg-portfolio-img bg-contain bg-no-repeat w-96 h-[16rem] m-6"
              modalClick={() => modalClick("Modal1")}
            ></ModalBtn>
            <p className="font-bold">ポートフォリオ</p>
          </div>
          <div className="flex items-center flex-col">
            <ModalBtn
              className=" bg-gray-100  rounded-lg shadow-md shadow-black
              hover:scale-110 duration-500 hover:brightness-105
              bg-chat-img bg-contain bg-no-repeat w-96 h-[16rem] m-6"
              modalClick={() => modalClick("Modal2")}
            ></ModalBtn>
            <p className="font-bold">チャットアプリ</p>
          </div>
          <div className="flex items-center flex-col">
            <ModalBtn
              className=" bg-gray-100  rounded-lg shadow-md shadow-black
              hover:scale-110 duration-500 hover:brightness-105
              bg-chatgpt-img bg-cover bg-no-repeat w-96 h-[16rem] m-6"
              modalClick={() => modalClick("Modal3")}
            ></ModalBtn>
            <p className="font-bold">ChatGPT</p>
          </div>
        </div>
      </section>

      <ModalElement
        targetName="Modal1"
        modalOpen={modalOpen}
        modalName={modalName}
        modalClick={modalClick}
        // 画像の場合、読み込み完了のフラグを管理するreadCompleteを設定する
        readComplete={readComplete}
      >
        <div className="lg:w-2/5 w-10/12 lg:m-6 mt-6 text-white">
          <h1 className="mb-6 font-bold text-xl">ポートフォリオ</h1>
          <p className="mb-6">
            このWebページです。Next.js、TailwindCSSで作成しました。
            トップ画面の背景の球体はクリックイベントで動くようになっています。
            モーダルはreact-modal、スライドはreact-splide、問い合わせフォームはnodemailer、
            レーダーチャートはrechartsを使用しました。
            Next.jsは使用したことがなかったので調べながら使ってみました。
            ポートフォリオを作成したばかりでデザイン等も取り合えず他の方のものを
            参考にして作成したので、これから少しずつ手を入れて改善していこうと思います。
          </p>
          <p
            className="my-auto flex items-center
              after:flex-grow after:h-px after:bg-white after:mx-1
              before:flex-grow before:h-px before:bg-white before:mx-1"
          >
            使用言語など
          </p>
          <p>Next.js、TailWindCSS</p>
        </div>
        {/* <div className="lg:w-3/5 w-10/12 lg:mt-3  mx-6 mt-3 h-full "> */}
        <div className="w-full lg:my-8">
          <Slider props={portfolioImg} />
        </div>
        {/* </div> */}
      </ModalElement>
      <ModalElement
        targetName="Modal2"
        modalOpen={modalOpen}
        modalName={modalName}
        modalClick={modalClick}
        // 画像の場合、読み込み完了のフラグを管理するreadCompleteを設定する
        readComplete={readComplete}
      >
        <div className="lg:w-2/5 w-10/12 lg:m-6 mt-6 text-white">
          <h1 className="mb-6 font-bold text-xl">チャットアプリ</h1>
          <p className="mb-6">
            Firebaseを使用して、Googleアカウントでのログイン認証と
            チャット機能を実装しました。 デザインはMaterial
            UIを使用しております。
          </p>
          <p
            className="my-auto flex items-center
              after:flex-grow after:h-px after:bg-white after:mx-1
              before:flex-grow before:h-px before:bg-white before:mx-1"
          >
            使用言語など
          </p>
          <p>React、Typescript、Material UI、Firebase</p>
        </div>
        {/* <div className="lg:w-3/5 w-10/12 lg:mt-3  mx-6 mt-3 h-full "> */}
        <div className="w-full lg:my-8">
          <Slider props={chatImg} />
        </div>
        {/* </div> */}
      </ModalElement>
      <ModalElement
        targetName="Modal3"
        modalOpen={modalOpen}
        modalName={modalName}
        modalClick={modalClick}
        // 画像の場合、読み込み完了のフラグを管理するreadCompleteを設定する
        readComplete={readComplete}
      >
        <div className="lg:w-2/5 w-10/12 lg:m-6 mt-6 text-white">
          <h1 className="mb-6 font-bold text-xl">ChatGPT</h1>
          <p className="mb-6">
            OpenAIのAPIでChatGPTのようなアプリを作成しました。
            せっかくなのでできる限りChatGPTにコードを生成してもらい作り上げました。
            画像を作成することもできるようなので改めて作成してみようと思います。
          </p>
          <p
            className="my-auto flex items-center
              after:flex-grow after:h-px after:bg-white after:mx-1
              before:flex-grow before:h-px before:bg-white before:mx-1"
          >
            使用言語など
          </p>
          <p>Next.js、TailWindCSS、OpenAI</p>
        </div>
        {/* <div className="lg:w-3/5 w-10/12 lg:mt-3  mx-6 mt-3 h-full "> */}
        <div className="w-full lg:my-8">
          <Slider props={chatGPTImg} />
        </div>
        {/* </div> */}
      </ModalElement>

      <section
        id="skill"
        className="text-gray-700 bg-blue-100 flex flex-col items-center justify-center
        min-w-full min-h-screen "
      >
        <div className="my-4 max-w-md sm:max-w-3xl">
          <h1
            className="sm:text-5xl text-3xl mb-6 font-medium
            text-gray-900 js-show-on-scroll text-center"
          >
            My Skills
          </h1>
          <p className="js-show-on-scroll text-sm md:text-xl text-left leading-8">
            身につけたスキルの習熟度をレーダーチャートでまとめました。
            <br />
            ＊業務で実際に使用した技術のみ掲載しております。
            <br />
            <br />
            Webアプリケーション開発はまだまだ経験不足ですので
            <br />
            <br />
            積極的に経験を積んで専門性を高めていきたいと考えています。
          </p>
        </div>
        <div className="flex items-center justify-center xl:flex-row flex-col mb-3">
          <div className="">
            <RadarChartSkill
              datas={frontEndDatas}
              stroke="#0d4e94"
              fill="#b7d6f7"
            />
          </div>
          <div className="">
            <RadarChartSkill
              datas={backEndDatas}
              stroke="#db0fd8"
              fill="#facaf9"
            />
          </div>
          <div className="">
            目安：
            <br />
            「1: 軽く使用した程度」
            <br />
            「2: 実務で数ヶ月以上使用」
            <br />
            「3: 実務で１年以上使用」
            <br />
            「4: 実務で3年以上使用」
            <br />
            「5: 実務で5年以上使用」
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center flex-col py-8 bg-blue-200">
        <h1 className="text-2xl md:text-7xl">Thank you for coming!</h1>
        <p className="mt-3">Copyright©Youhei Funamura. All Rights Reserved.</p>
      </div>
      <Mail
        targetName="Contact"
        modalOpen={modalOpen}
        modalName={modalName}
        modalClick={modalClick}
      />
      {/* modalOpen={modalOpen} modalClick={modalClick}  */}
    </>
  );
}
