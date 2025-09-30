
import { ExpandedIcon } from '@/constants/icons';
import { Modal } from 'react-native';
import { AriaModalContainer, AriaModalContent, CloseButton, ContentModal } from './style';
import { CustomModalProps } from '@/model/interfaces/general-interfaces';


const CustomModal:React.FC<CustomModalProps> = (
  {
    visible,
    onClose,
    children,
    animationType = 'slide',
    transparent = true,
    showCloseButton = false,
    style
  }) => {
  return (
    <Modal
      visible={visible}
      animationType={animationType}
      transparent={transparent}>
      <AriaModalContent onPress={onClose}>
        <AriaModalContainer>
          <ContentModal style={style}>
            {showCloseButton && 
              <CloseButton onPress={onClose}>
                <ExpandedIcon/>
              </CloseButton>
            }
            {children}
          </ContentModal>
        </AriaModalContainer>
      </AriaModalContent>
    </Modal>
  );
}

export default CustomModal;