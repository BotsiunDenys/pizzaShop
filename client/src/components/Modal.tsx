import React, { ReactNode } from "react";
interface Props {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal = ({ visible, setVisible, children }: Props) => {
  return (
    <>
      <div
        onClick={() => setVisible(false)}
        className={`h-full w-full bg-opBlack fixed top-0 left-0 flex items-center justify-center transition-all ${
          visible
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`p-5 rounded-xl bg-slate-300 transition-all ${
            visible ? "scale-[1]" : "scale-[0.4]"
          }`}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
