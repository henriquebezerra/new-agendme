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
import { CURRENCY, LOCALE_LANGUAGE } from '@env';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomModal from '@/components/Modal';
import Schedule from '@/components/Schedule';
import { useCurrency } from '@/hooks/useCurrency';

const ServiceItem: React.FC<ServiceItemProps> = ({
  title, 
  servico,
  estabelecimento 
}) => {
  
  const { t } = useTranslation();
  const { isVisible, openModal, closeModal } = useModal();
  const [selectedService, setSelectedService] = useState<Servico | null>(null);
  const { formattedValue } = useCurrency(servico?.valor);

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

      <CustomModal 
        visible={isVisible} 
        onClose={closeModal} 
        style={{ backgroundColor: '#83D6E3' }}
        showCloseButton>
        <Schedule servico={selectedService} estabelecimento={estabelecimento} />
      </CustomModal>
    </>
  );
};

export default ServiceItem;