import React from "react"
import { AlertModal, BaseModal, useModalContext } from "../lib/modal"
import { InfoModal } from "../lib/modal/components/InfoModal"
import { ConfirmModal } from "../lib/modal/components/ConfirmModal"

export default function Ui() {
  const { modals, openModal, closeModal } = useModalContext()
  return (
    <div className="flex flex-col gap-10">
      <button onClick={() => openModal("info")}>Open Info Modal</button>
      <button onClick={() => openModal("alert")}>Open Alert Modal</button>
      <button onClick={() => openModal("base")}>Open Base Modal</button>
      <button onClick={() => openModal("confirm")}>Open Confirm Modal</button>
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
        <div className="flex flex-col">
          <h1>Base Modal</h1>
          <h1>Base Modal</h1>
          <h1>Base Modal</h1>
          <h1>Base Modal</h1>
          <h1>Base Modal</h1>
          <h1>Base Modal</h1>
        </div>
      </BaseModal>
      <InfoModal
        isOpen={modals.info}
        onClose={() => closeModal("info")}
        title="This is an Info Modal Title"
        description="This is an info modal description"
        hasDimmed={true}
      >
        <h1>InfoModal Contents</h1>
      </InfoModal>
      <ConfirmModal
        isOpen={modals.confirm}
        onClose={() => closeModal("confirm")}
        onConfirm={() => console.log("confirm")}
      >
        <h1>Confirm Modal</h1>
      </ConfirmModal>
    </div>
  )
}