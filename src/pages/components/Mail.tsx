"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import Modal from "react-modal";
// import { useModalScrollLock } from "@/app/compornents/hooks/useModalScrollLock";

// import {inter} from ""

// const inter = Inter({submits:["latin"]});

type MailType = {
  targetName: string;
  modalOpen: boolean;
  modalName: string;
  modalClick: (event: any) => void;
};
// export const MODAL_ID = "modal";

const Mail: FC<MailType> = ({
  targetName,
  modalOpen,
  modalName,
  modalClick,
}) => {
  // { modalOpen, modalClick }) => {
  const isModalOpen: boolean = modalOpen;
  // useModalScrollLock({ isModalOpen });

  const stopScrollingBackContent = (isShow: boolean) => {
    isShow
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    // document.body.style.overflow = "hidden";

    // return () => {
    //   document.body.style.overflow = "auto";
    // };
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [completeMessage, setCompleteMessage] = useState("");

  useEffect(() => {
    setCompleteMessage("");
    stopScrollingBackContent(isModalOpen);
  }, [isModalOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCompleteMessage("");
    const res = confirm("入力した内容で送信してもよろしいでしょうか？");
    if (res === false) {
      return;
    }

    let data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      message: messageRef.current?.value,
    };

    // let textArray:string[] = nameRef.current?.value.split('\n');
    // let newText = textArray.join('<br>');

    let opt: any = {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    // const res1 = await fetch("http://localhost:3000/api/test");
    // console.log(res1.json());
    // return res1.json();
    // const res = await fetch("http://localhost:3000/api/contact",opt)

    await fetch("api/sendmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) {
        setCompleteMessage("メール送信に成功しました");
        console.log("メール送信に成功しました");
        console.log(res);
      } else {
        setCompleteMessage("メール送信に失敗しました");
        console.log("メール送信に失敗しました");
        console.log(res);
      }
    });
  };

  return (
    <>
      {modalOpen && modalName === targetName ? (
        <Modal
          // id={MODAL_ID}
          contentLabel="問合せフォーム"
          isOpen={isModalOpen}
          // style={customStyles}
          // onAfterOpen={afterOpenModal}
          onRequestClose={modalClick}
          className="flex items-center justify-center bg-white w-full h-full"
        >
          {/* <div className="container">
            <div
              className="max-w-md mx-auto my-8
            bg-blue-100 p-5 rounded-md shadow-sm"
            > */}
          <div className="p-6 w-[28rem] bg-blue-100 rounded-xl shadow-lg shadow-slate-500">
            <div className="text-center">
              <h2 className="my-3 text-3xl font-semibold text-gray-700">
                お問合せフォーム
              </h2>
            </div>

            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                handleSubmit(e)
              }
            >
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="name"
                >
                  ■お名前
                  <span className="text-xs text-red-500">(必須)</span>
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  id="name"
                  required
                  ref={nameRef}
                  placeholder="田中　太郎"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="email"
                >
                  ■メールアドレス
                  <span className="text-xs text-red-500">(必須)</span>
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  id="email"
                  required
                  ref={emailRef}
                  placeholder="john@example.com"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm text-gray-600"
                  htmlFor="message"
                >
                  ■内容
                  <span className="text-xs text-red-500">(必須)</span>
                </label>
                <textarea
                  className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                  id="message"
                  required
                  ref={messageRef}
                  rows={5}
                  placeholder="お問い合わせ内容です"
                ></textarea>
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full px-3 py-2 font-bold text-white bg-green-500
                   rounded-md focus:bg-green-600 focus:outline-none hover:bg-green-400 "
                >
                  メール送信
                </button>
                <button
                  className="w-full mt-3 px-3 py-2 font-bold text-white bg-gray-500
                   rounded-md focus:bg-gray-600 focus:outline-none hover:bg-gray-400 "
                  onClick={modalClick}
                >
                  閉じる
                </button>
                {completeMessage.length === 0 ? null : (
                  <p className="text-red-400 mt-3">{completeMessage}</p>
                )}
              </div>
            </form>
            {/* </div>
            </div> */}
          </div>
        </Modal>
      ) : (
        // </ModalPortal>
        ""
      )}
    </>
  );
};

export default Mail;
