import React from "react";
import classes from './Modal.module.css'

const Modal = ({children, visible, setVisible}) => { // visible - видно модалку или нет, setVisible - будет скрывать модалку

  const rootClasses = [classes.modal]
  if(visible) {
    rootClasses.push(classes.modalActive)
  } // создаем массив с двумя классами

  return <div className={rootClasses.join(' ')} onClick = {()=> setVisible(false)}> {/* вешаем join (возвращает строку) на наш массив, для закрытия модалки на клик по темной области - вешаем слушатель событий - вызываем функцию setVisible и передаем туда false*/}
    <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}> {/* чтобы модалка не закрывалась при нажатии на контентную часть, предотвращаем всплытие события */}
      {children}
    </div>
  </div>;
};

export default Modal;

