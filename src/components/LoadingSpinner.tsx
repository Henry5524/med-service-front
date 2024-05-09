import { CircularProgress, Modal, ModalContent } from "@nextui-org/react";

export default function LoadingSpinner() {
  return (
    <Modal
      isOpen={true}
      hideCloseButton
      isKeyboardDismissDisabled
      backdrop="opaque"
      className="bg-inherit shadow-none flex items-center justify-center pb-24"
    >
      <ModalContent>
        <CircularProgress size="lg" color="primary" />
      </ModalContent>
    </Modal>
  );
}
