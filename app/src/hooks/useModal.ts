import { useState } from 'react';

const useModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  return [modalOpen, setModalOpen, handleModalOpen, handleModalClose];
}

export default useModal;