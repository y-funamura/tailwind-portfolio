import { FC, ReactNode } from "react";

//　モーダル要素
type ModalBtnType = {
  children?: ReactNode;
  modalBtnName: string;
  modalClick: (event: any) => void;
};

const ModalBtn: FC<ModalBtnType> = ({ children, modalBtnName, modalClick }) => {
  return (
    <>
      <button
        className="mt-3 text-green-500 flex items-center"
        name={modalBtnName}
        onClick={modalClick}
      >
        {children}
      </button>
    </>
  );
};

export default ModalBtn;
