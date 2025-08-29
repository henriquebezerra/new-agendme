import { 
  AgendarButton, 
  AgendarButtonText, 
  ServiceInfo, 
  ServiceItemArea, 
  ServiceName, 
  ServicePrice 
} from '@/components/ServiceItem/style';

import {ServiceItemProps} from '@/model/interfaces/general-interfaces';


const ServiceItem: React.FC<ServiceItemProps> = ({title, value }) => {

  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return (
    <ServiceItemArea>
      <ServiceInfo>
        <ServiceName>{title}</ServiceName>
        <ServicePrice>{formattedValue}</ServicePrice>
      </ServiceInfo>
      <AgendarButton>
        <AgendarButtonText>Agendar</AgendarButtonText>
      </AgendarButton>
    </ServiceItemArea>
  );
};

export default ServiceItem;