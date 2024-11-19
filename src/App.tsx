import React from "react";
import { ModalProvider } from "./lib/modal";
import Ui from "./example/Ui";

function App() {
  return (
    <ModalProvider defaultModals={["alert"]}>
      <Ui />
    </ModalProvider>
  );
}

export default App;