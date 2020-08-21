import React from 'react';
import styled from 'styled-components'

import { device } from '../device';

type ModalProps = {
  onModalClose: () => void;
  content: string;
};

const Modal = ({onModalClose, content}: ModalProps) => {
  return (
    <ModalContainer onClick={onModalClose}>
      <div className='moda-content'  onClick={(e) => {e.stopPropagation()}}>
         <button className='modal-close' onClick={onModalClose}>
          <i className="fa fa-times-circle"></i>
         </button>
        {content}
      </div>
    </ModalContainer>
  );
}

const ModalContainer =  styled.div`
  position: fixed;
  z-index: 1;
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.4);

  > div{
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 90%;
    border-radius: 5px;
    position: relative;
  }

  .modal-close{
    border: 0;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 25px;
    background-color: transparent;
  }

  @media ${device.laptop} { 
    > div{
      background-color: #fefefe;
      margin: auto;
      padding: 20px;
      border: 1px solid #888;
      width: 60%;
    }
  }
`;


export default Modal;