
import { Modal } from 'react-native';
import { AriaModalContainer, AriaModalContent, ContentModal } from './style';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animationType?: 'slide' | 'fade' | 'none';
  transparent?: boolean;
}

const CustomModal:React.FC<CustomModalProps> = (
  {
    visible,
    onClose,
    children,
    animationType = 'slide',
    transparent = true
  }) => {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={transparent}
    >
      <AriaModalContent onPress={onClose}>
        <AriaModalContainer>
          <ContentModal>
            {children}
          </ContentModal>
        </AriaModalContainer>
      </AriaModalContent>
    </Modal>
  );
}

export default CustomModal;