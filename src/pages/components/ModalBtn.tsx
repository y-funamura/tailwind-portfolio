import { FC, ReactNode } from "react";

//　モーダル要素
type ModalBtnType = {
  children?: ReactNode;
  // modalBtnName: string;
  className: string;
  modalClick: (event: any) => void;
};

const ModalBtn: FC<ModalBtnType> = ({ children, className, modalClick }) => {
  // const ModalBtn: FC<ModalBtnType> = ({ children, modalBtnName,className, modalClick }) => {
  return (
    <>
      <button
        className={className}
        // name={modalBtnName}
        onClick={modalClick}
      >
        {children}
      </button>
    </>
  );
};

export default ModalBtn;
