import { useEffect } from "react"
import "./Modal.css"

export const Modal = ({children, isVisible, onClose}) => {

  useEffect(()=>{
    window.addEventListener("keydown", keyPressHandler);
    return ()=>{
      window.removeEventListener("keydown", keyPressHandler);
      }
  },[])

  const keyPressHandler = (e) => {
    e.keyCode === 27 && onClose();
  }

  return (
    <div className="modal">
        {children}
    </div>
  )
}