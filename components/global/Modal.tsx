// components/Modal.tsx
"use client";

const Modal = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
      <div className="h-3/4" onClick={(e) => e.stopPropagation()}>
        <div className="bg-white rounded-lg w-96 p-10 shadow-2xl relative"></div>
      </div>
    </div>
  );
};

export default Modal;
