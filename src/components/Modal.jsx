import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-8 rounded-md">
      {children}
      <form method="dialog">
        <button className="bg-gray-600 py-2 px-2 rounded-lg text-white hover:bg-gray-500">
          Schließen
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
