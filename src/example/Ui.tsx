import React from "react"
import { AlertModal, BaseModal, useModalContext } from "../lib/modal"
import { InfoModal } from "../lib/modal/components/InfoModal"

export default function Ui() {
  const { modals, openModal, closeModal } = useModalContext()
  return (
    <div className="flex flex-col gap-10">
      <button onClick={() => openModal("info")}>Open Info Modal</button>
      <button onClick={() => openModal("alert")}>Open Alert Modal</button>
      <button onClick={() => openModal("base")}>Open Base Modal</button>
      <AlertModal
        isOpen={modals.alert}
        onClose={() => closeModal("alert")}
        title="Alert Modal"
        onConfirm={() => console.log("confirm")}
      >
        <p>This is an alert modal</p>
      </AlertModal>
      <BaseModal
        isOpen={modals.base}
        onClose={() => closeModal("base")}
        title="Base Modal"
        onConfirm={() => console.log("base")}
      >
        <h1>Base Modal</h1>
      </BaseModal>
      <InfoModal
        isOpen={modals.info}
        onClose={() => closeModal("info")}
        title="Info Modal"
        description="This is an info modal"
        onConfirm={() => console.log("info")}
      >
        <h1>InfoModal Contents</h1>
      </InfoModal>
    </div>
  )
}