import CustomModal from '@/components/Modal';
import { UserIcon } from '@/constants/icons';
import { useModal } from '@/hooks/useModal';
import { OptionsType } from '@/types/general-type';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import {
  Container,
  ContentModal,
  EmptyOptionView,
  EmptyText,
  styles
} from './style';
import { useTranslation } from 'react-i18next';

interface DropdownPickerProps {
  options: OptionsType[];
  setSelectedValue: (value: OptionsType) => void;
  placeholder: string;
}

const DropdownPicker: React.FC<DropdownPickerProps> = ({options, setSelectedValue, placeholder }) => {

  const { isVisible, openModal, closeModal } = useModal();
  const { t } = useTranslation();
    
  const handleOptionSelect = (value: OptionsType) => {
    setSelectedValue(value);
    closeModal();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => openModal()}>
        <Container>
          <UserIcon />
          <Text style={styles.inputText}>{placeholder}</Text>
        </Container>
      </TouchableOpacity>

      <CustomModal visible={isVisible} onClose={closeModal}>
        <ContentModal>
          {options.length ? 
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleOptionSelect(item)}>
                  <Text style={styles.optionText}>{item.label}</Text>
                </TouchableOpacity>
                )}
              /> : 
            <EmptyOptionView>
              <EmptyText>{t('emptyModalDescription')}</EmptyText>
            </EmptyOptionView>
          }
        </ContentModal>
      </CustomModal>
    </View>
  );
};



export default DropdownPicker;