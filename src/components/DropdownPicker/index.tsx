import { UserIcon } from '@/constants/icons';
import React, { useState } from 'react';
import { Modal, TouchableOpacity, Text, FlatList, View, ScrollView } from 'react-native';
import { 
  Container, 
  OptionContainer,
  AriaModalContent,
  AriaModalContainer,
  styles,
  EmptyText,
  EmptyOptionView
} from './style';
import { OptionsType } from '@/types/options-type';

interface DropdownPicker {
  options: OptionsType[];
  setSelectedValue: (value: string) => void;
  placeholder: string;
}

const DropdownPicker: React.FC<DropdownPicker> = ({options, setSelectedValue, placeholder }) => {

  const [modalVisible, setModalVisible] = useState(false);
    
  const handleOptionSelect = (value: string) => {
    setSelectedValue(value);
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Container>
          <UserIcon />
          <Text style={styles.inputText}>{placeholder}</Text>
        </Container>
      </TouchableOpacity>

      <Modal 
        visible={modalVisible} 
        animationType="slide" 
        transparent={true}>
        <AriaModalContent 
          onPress={() => setModalVisible(false)}>
          <AriaModalContainer>
            <OptionContainer>
              {options.length ? 
              <FlatList
                data={options}
                keyExtractor={(item) => item.value}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleOptionSelect(item.label)}>
                    <Text style={styles.optionText}>{item.label}</Text>
                  </TouchableOpacity>
                  )}
                /> : 
                <EmptyOptionView>
                  <EmptyText>Nenhuma opção disponível no momento</EmptyText>
                </EmptyOptionView>
              }
            </OptionContainer>
          </AriaModalContainer>
        </AriaModalContent>
      </Modal>
    </View>
  );
};



export default DropdownPicker;