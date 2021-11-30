import React, {useRef, useEffect} from 'react';
import Button from '../../common/Button/Button';
import CloseIcon from '../../common/CloseIcon/CloseIcon';
import './Modal.scss';

const Modal = ({modalStyle, children, show, onClose, backdropStyle}) => {
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add('visible');
    } else {
      modalRef.current.classList.remove('visible');
    }
  }, [show]);

  return (
    <>
      <div
        ref={modalRef}
        style={backdropStyle}
        onClick={onClose}
        className="modal__wrap">
        <div
          style={modalStyle}
          onClick={(e) => e.stopPropagation()}
          className="modal">
          <Button
            onClick={onClose}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: 0,
              right: 0,
              margin: '12px',
            }}
            className="close__btn">
            <CloseIcon height="26px" width="26px" className="close__icon" />
          </Button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
