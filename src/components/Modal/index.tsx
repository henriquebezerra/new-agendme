
import { ExpandedIcon } from '@/constants/icons';
import { Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';
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
      <TouchableWithoutFeedback onPress={onClose}>
        <AriaModalContent>
          <AriaModalContainer>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
              <ContentModal style={style}>
                {showCloseButton && 
                  <CloseButton onPress={onClose}>
                    <ExpandedIcon/>
                  </CloseButton>
                }
                {children}
              </ContentModal>
            </TouchableWithoutFeedback>
          </AriaModalContainer>
        </AriaModalContent>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

export default CustomModal;