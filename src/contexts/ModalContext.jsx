import React, { useState, createContext } from 'react';
import PropTypes from 'prop-types';

import { AriaHidden } from 'components/AriaHidden';
import { Modal } from 'components/Modal';

export const ModalContext = createContext({});

const defaultContent = <></>;

export function ModalProvider({ children }) {
  const [opened, setOpened] = useState(false);
  const [content, setContent] = useState(defaultContent);

  function openModal(contentValue) {
    setContent(contentValue);
    setOpened(true);
  }

  function closeModal() {
    setOpened(false);
    setContent(defaultContent);
  }

  const publicValue = {
    opened,
    openModal,
    closeModal,
  };

  return (
    <ModalContext.Provider value={publicValue}>
      <AriaHidden active={opened}>{children}</AriaHidden>
      {opened && <Modal>{content}</Modal>}
    </ModalContext.Provider>
  );
}

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalProvider;
