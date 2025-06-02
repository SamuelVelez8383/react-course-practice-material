import classes from "./Modal.module.css";

interface modalProps {
  children: React.ReactNode;
  onClose: () => void;
}

function Modal(props: modalProps) {
  
  return (
    <>
      <div id='backdrop' className={classes.blackdrop} onClick={props.onClose}> </div>
      <dialog open className={classes.modal}>{props.children}</dialog>
    </>
  );
}

export default Modal;
