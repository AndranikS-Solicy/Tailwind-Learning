export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  newTitle: string;
  setNewTitle: (title: string) => void;
  newDescription: string;
  setNewDescription: (description: string) => void;
}
