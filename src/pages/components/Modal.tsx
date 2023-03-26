import { FC, ReactNode, useEffect } from "react";
import ReactModal from "react-modal";

//　モーダル要素
type ModalType = {
  children?: ReactNode;
  modalClick: (event: any) => void;
  readComplete?: boolean;
};

export const MODAL_ID = "modal";

const Modal: FC<ModalType> = ({ children, modalClick, readComplete }) => {
  // const isModalOpen: boolean = true;
  // useModalScrollLock({ isModalOpen });

  // 下記の方法でスクロール制御を行うとiOSでスクロールできてしまうので使用しないことにした。
  // const stopScrollingBackContent = () => {
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // };

  // useEffect(stopScrollingBackContent, []);

  return (
    <>
      <ReactModal
        isOpen={true}
        id={MODAL_ID}
        closeTimeoutMS={200}
        className={{
          base: "content-base overflow-auto  lg:h-2/3 h-5/6",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
      >
        <div
          className="flex flex-col lg:flex-row lg:justify-center
         items-center justify-center lg:mx-10 mx-3"
        >
          {children}
          <button
            className="close_btn w-7 h-7 m-3 rounded-full opacity-80 border-spacing-1 text-white
            shadow-lg bg-red-500 hover:cursor-pointer hover:brightness-200 duration-300 fixed top-0 right-0"
            onClick={modalClick}
          >
            ✕
          </button>
        </div>
      </ReactModal>
    </>
  );
};

export default Modal;
