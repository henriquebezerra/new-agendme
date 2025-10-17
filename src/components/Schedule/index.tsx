import Calendar from "@/components/Calendar";
import Hour from "@/components/Hour";
import { UserContext } from "@/contexts/UserContext";
import { useEstabelecimentoAvatarUri } from "@/hooks/useAvatarUri";
import { useCurrency } from "@/hooks/useCurrency";
import { Disponibilidade } from "@/model/disponibilidade.model";
import { Hours, ItemHour, ScheduleProps } from "@/model/interfaces/general-interfaces";
import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { ToastApp } from "../Toast";
import { ScheduleActions } from "./actions";

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
  ServicePrice,
  styles
} from "./style";

const Schedule:React.FC<ScheduleProps> = ({
  servico,
  estabelecimento,
  toggleModal
}) => {

  const avatarUri = useEstabelecimentoAvatarUri(estabelecimento);
  const { formattedValue } = useCurrency(servico?.valor || 0);
  const {state: context } = useContext(UserContext);
  const [availabilities, setAvailabilities] = useState<Disponibilidade[]>([]);
  const [listHours, setListHours] = useState<Hours[]>([]);
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedItemHour, setSelectedItemHour] = useState<ItemHour | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true);
  const { t } = useTranslation();
  const action = ScheduleActions.getInstance();

  const scheduleItems = [
    { id: 'provider', type: 'provider' },
    { id: 'service', type: 'service' },
    { id: 'calendar', type: 'calendar' },
    { id: 'hour', type: 'hour' },
    { id: 'finish', type: 'finish' }
  ];

  const finishSchedule = () => {
    action.finishSchedule(selectedDay, selectedMonth, selectedYear, selectedItemHour!, estabelecimento.id, servico!.id, context.user.id || 0)
    .then(() => {
      toggleModal();
      ToastApp('success', t('scheduleTitleToast'), t('scheduleSuccess'));
    })
    .catch((error) => {
      ToastApp('error', t('scheduleTitleToast'), error.message);      
    })
  }

  const getAvailability = async () => {
    const disponibilidade = await action.getDisponibilidade(estabelecimento.id, servico!.id);
    setAvailabilities(disponibilidade);
  }

  const handleListHours = () => {
    if(availabilities.length > 0){
      const hours = action.bringHoursByDay(selectedDay, selectedMonth, selectedYear, availabilities);
      setListHours(hours);
    }
    setSelectedItemHour(null);
  }

  useEffect(() => { 
    getAvailability();
  }, []);

  useEffect(() => {
    handleListHours();
  }, [ selectedDay ]);

  useEffect(() => {
    const isFormComplete = selectedYear > 0 && selectedMonth >= 0 && selectedDay > 0 && selectedItemHour !== null;
    setButtonDisabled(!isFormComplete);
  }, [selectedYear, selectedMonth, selectedDay, selectedItemHour]);

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
            availabilities={availabilities}
            setSelectedYear={setSelectedYear} 
            setSelectedMonth={setSelectedMonth} 
            setSelectedDay={setSelectedDay} 
          />
        );
      case 'hour':
        return (
          <>
            {listHours.length > 0 && (
              <Hour 
                itemsHour={listHours}
                setSelectedItemHour={setSelectedItemHour}
                selectedItemHour={selectedItemHour}/>
            )}
          </>
        );
      
      case 'finish':
        return (
          <FinishScheduleButton 
            disabled={buttonDisabled}  
            style={{ opacity: buttonDisabled ? 0.5 : 1 }}
            onPress={finishSchedule}
            >
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