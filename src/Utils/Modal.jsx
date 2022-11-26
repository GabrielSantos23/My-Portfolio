import React, { useEffect } from 'react';
import styled from 'styled-components';

const DiV = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  position: absolute;
  right: 0;
  background-color: red;
  width: 500px;
  top: 0;
  z-index: 100;
`;

const Modal = ({
  object: { id, title, description, showModal, setShowModal },
}) => {
  if (showModal) {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  }
  return (
    <DiV id='productModal' className='active'>
      This is modal
      <span className='description'>{title}</span>
      <button onClick={() => setShowModal(false)}>Close me</button>
    </DiV>
  );
};

export default Modal;
