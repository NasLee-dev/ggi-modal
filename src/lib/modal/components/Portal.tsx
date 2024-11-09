import { useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import React from "react";

interface PortalProps {
  children: React.ReactNode;
}

export const Portal = ({ children }: PortalProps) => {
  const mount =
    document.getElementById("portal-root") || document.createElement("div");

  if (!mount.id) {
    mount.id = "portal-root";
  }

  useLayoutEffect(() => {
    document.body.appendChild(mount);
    return () => {
      if (mount.parentElement) {
        mount.parentElement.removeChild(mount);
      }
    };
  }, [mount]);

  return createPortal(children, mount);
};
