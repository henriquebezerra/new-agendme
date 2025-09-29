import { 
  AgendarButton, 
  AgendarButtonText, 
  ServiceInfo, 
  ServiceItemArea, 
  ServiceName, 
  ServicePrice 
} from '@/components/ServiceItem/style';

import {ServiceItemProps} from '@/model/interfaces/general-interfaces';
import { useTranslation } from 'react-i18next';
import { CURRENCY } from '@env';

const ServiceItem: React.FC<ServiceItemProps> = ({title, value }) => {
  
const { t } = useTranslation();
const formattedValue = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: CURRENCY,
}).format(value);

  return (
    <ServiceItemArea>
      <ServiceInfo>
        <ServiceName>{title}</ServiceName>
        <ServicePrice>{formattedValue}</ServicePrice>
      </ServiceInfo>
      <AgendarButton>
        <AgendarButtonText>{t('scheduleButton')}</AgendarButtonText>
      </AgendarButton>
    </ServiceItemArea>
  );
};

export default ServiceItem;