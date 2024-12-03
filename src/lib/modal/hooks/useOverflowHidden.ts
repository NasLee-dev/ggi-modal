import { useEffect } from "react"

export const useOverflowHidden = ({ isOpen }: 
  { isOpen: boolean }
) => {
  useEffect(() => {
    if (typeof window === "undefined") return

    const appElement = document.body || document.getElementById("root")

    if (isOpen) {
      const originalOverflow = appElement.style.overflow
      appElement.style.overflow = "hidden"

      return () => {
        appElement.style.overflow = originalOverflow
      }
    }
  }, [isOpen])
}