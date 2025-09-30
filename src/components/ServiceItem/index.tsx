import {
  AgendarButton,
  AgendarButtonText,
  ServiceInfo,
  ServiceItemArea,
  ServiceName,
  ServicePrice
} from '@/components/ServiceItem/style';

import { useModal } from '@/hooks/useModal';
import { ServiceItemProps } from '@/model/interfaces/general-interfaces';
import { Servico } from '@/model/servico.model';
import { CURRENCY } from '@env';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import CustomModal from '../Modal';

const ServiceItem: React.FC<ServiceItemProps> = ({title, value, servico }) => {
  
  const { t } = useTranslation();
  const { isVisible, openModal, closeModal } = useModal();
  const [selectedService, setSelectedService] = useState<Servico | null>(null);
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: CURRENCY,
  }).format(value);

  const handleSchedule = (serv:Servico) => {
   setSelectedService(serv);
   openModal();
  }

  return (
    <>
      <ServiceItemArea>
        <ServiceInfo>
          <ServiceName>{title}</ServiceName>
          <ServicePrice>{formattedValue}</ServicePrice>
        </ServiceInfo>
        <AgendarButton onPress={() => handleSchedule(servico)}>
          <AgendarButtonText>{t('scheduleButton')}</AgendarButtonText>
        </AgendarButton>
      </ServiceItemArea>

      <CustomModal visible={isVisible} onClose={closeModal}> 
        <Text>Agendar {selectedService?.titulo} por {formattedValue}</Text>
      </CustomModal>
    </>
  );
};

export default ServiceItem;