import { useModal } from "./lib/modal/components/hooks/useModal";
import { Modal } from "./lib/modal/components/Modal";
import React from "react";

function App() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <button
        onClick={openModal}
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors"
      >
        모달 열기
      </button>

      <div className="fixed top-4 left-4">
        Modal is: {isOpen ? "Open" : "Closed"}
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} title="환영합니다">
        <div className="space-y-4">
          <p className="text-gray-600">Portal을 사용한 모달 테스트입니다.</p>
          <button
            onClick={closeModal}
            className="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 transition-colors"
          >
            닫기
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
