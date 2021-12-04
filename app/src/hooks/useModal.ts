import { useState } from 'react';

const useModal = (): [boolean, (() => void), (() => void)] => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return [modalOpen, handleModalOpen, handleModalClose];
}

export default useModal;