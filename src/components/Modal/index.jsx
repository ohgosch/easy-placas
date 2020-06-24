import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { TEXTS } from 'logic/texts';
import { ModalContext } from 'contexts/ModalContext';

import { Container, Content, CloseOverlay } from './styles';

export function Modal({ children }) {
  const { closeModal } = useContext(ModalContext);

  return (
    <Container role="dialog">
      {/* Button overlay for close the modal */}
      <CloseOverlay onClick={closeModal} aria-hidden="true" autoFocus>
        {TEXTS.modal.close}
      </CloseOverlay>

      <Content>{children}</Content>
    </Container>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
