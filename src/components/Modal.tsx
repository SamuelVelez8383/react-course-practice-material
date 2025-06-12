import {useNavigate} from 'react-router-dom';
import classes from "./Modal.module.css";

interface modalProps {
  children: React.ReactNode;
}

function Modal(props: modalProps) {

  const navigate = useNavigate();

  function closeHandler() {
    navigate('..')
  }
  
  return (
    <>
      <div id='backdrop' className={classes.blackdrop} onClick={closeHandler}> </div>
      <dialog open className={classes.modal}>{props.children}</dialog>
    </>
  );
}

export default Modal;
