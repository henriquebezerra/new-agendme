import { useEstabelecimentoAvatarUri } from "@/hooks/useAvatarUri";
import { useCurrency } from "@/hooks/useCurrency";
import { useTranslation } from "react-i18next";
import { 
  FinishButtonText, 
  FinishScheduleButton, 
  ProviderAvatar, 
  ProviderName, 
  ScheduleBody, 
  ScheduleInfo, 
  ScheduleItem, 
  ServiceDescription, 
  ServiceInfo, 
  ServiceName, 
  ServicePrice 
} from "./style";
import { ScheduleProps } from "@/model/interfaces/general-interfaces";
import Calendar from "@/components/Calendar";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { styles } from "./style";
import Hour from "@/components/Hour";
import { ScheduleActions } from "./actions";
import { Disponibilidade } from "@/model/disponibilidade.model";


const Schedule:React.FC<ScheduleProps> = ({
  servico,
  estabelecimento
}) => {

  const avatarUri = useEstabelecimentoAvatarUri(estabelecimento);
  const { formattedValue } = useCurrency(servico?.valor || 0);
  const [availabilities, setAvailabilities] = useState<Disponibilidade[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const { t } = useTranslation();
  const action = ScheduleActions.getInstance();


  const scheduleItems = [
    { id: 'provider', type: 'provider' },
    { id: 'service', type: 'service' },
    { id: 'calendar', type: 'calendar' },
    { id: 'hour', type: 'hour' },
    { id: 'finish', type: 'finish' }
  ];

  const getAvailability = async () => {
    const disponibilidade = await action.getDisponibilidade(estabelecimento.id);
    setAvailabilities(disponibilidade);
  }

  useEffect(() => { 
    getAvailability();
  }, []);

  const renderScheduleItem = ({ item }: { item: any }) => {
    switch (item.type) {
      case 'provider':
        return (
          <ScheduleItem>
            <ScheduleInfo>
              <ProviderAvatar source={{ uri: avatarUri }}/>
              <ProviderName>{estabelecimento?.nome}</ProviderName>
            </ScheduleInfo>
          </ScheduleItem>
        );
        
      case 'service':
        return (
          <ScheduleItem>
            <ServiceInfo>
              <ServiceName>{servico?.titulo}</ServiceName>
              <ServicePrice>{formattedValue}</ServicePrice>
            </ServiceInfo>
            {servico?.descricao && (
              <ServiceDescription>{servico?.descricao}</ServiceDescription>
            )}
          </ScheduleItem>
        );
        
      case 'calendar':
        return (
          <Calendar
            selectedYear={selectedYear} 
            selectedMonth={selectedMonth} 
            selectedDay={selectedDay} 
            selectedHour={selectedHour}
            availabilities={availabilities}
            setSelectedYear={setSelectedYear} 
            setSelectedMonth={setSelectedMonth} 
            setSelectedDay={setSelectedDay} 
            setSelectedHour={setSelectedHour}
          />
        );
      case 'hour':
        return (
          <ScheduleItem>
            <Hour />

          </ScheduleItem>
        );
        
      
      case 'finish':
        return (
          <FinishScheduleButton>
            <FinishButtonText>{t("finishScheduleButton")}</FinishButtonText>
          </FinishScheduleButton>
        );
        
      default:
        return null;
    }
  };

  return (
    <ScheduleBody>
      <FlatList
        data={scheduleItems}
        keyExtractor={(item) => item.id}
        renderItem={renderScheduleItem}
        showsVerticalScrollIndicator={false}
        style={styles.flatContainer}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </ScheduleBody>
  );
}

export default Schedule;