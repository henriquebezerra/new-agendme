import { useEstabelecimentoAvatarUri } from "@/hooks/useAvatarUri";
import { useCurrency } from "@/hooks/useCurrency";
import { useTranslation } from "react-i18next";
import { FinishButtonText, FinishScheduleButton, ProviderAvatar, ProviderName, ScheduleBody, ScheduleInfo, ScheduleItem, ServiceDescription, ServiceInfo, ServiceName, ServicePrice } from "./style";
import { ScheduleProps } from "@/model/interfaces/general-interfaces";
import Calendar from "@/components/Calendar";
import { useState } from "react";


const Schedule:React.FC<ScheduleProps> = ({
  servico,
  estabelecimento
}) => {

  const avatarUri = useEstabelecimentoAvatarUri(estabelecimento);
  const { formattedValue } = useCurrency(servico?.valor || 0);
  const [selectedYear, setSelectedYear] = useState<number>(0);
  const [selectedMonth, setSelectedMonth] = useState<number>(0);
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [selectedHour, setSelectedHour] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <ScheduleBody>
      <ScheduleItem>
        <ScheduleInfo>
          <ProviderAvatar source={{ uri: avatarUri }}/>
          <ProviderName>{estabelecimento?.nome}</ProviderName>
        </ScheduleInfo>
      </ScheduleItem>

      <ScheduleItem>
        <ServiceInfo>
          <ServiceName>{servico?.titulo}</ServiceName>
          <ServicePrice>{formattedValue}</ServicePrice>
        </ServiceInfo>
        {
          servico?.descricao && (
            <ServiceDescription>{servico?.descricao}</ServiceDescription>
          )
        }
      </ScheduleItem>
      <Calendar
        selectedYear={selectedYear} 
        selectedMonth={selectedMonth} 
        selectedDay={selectedDay} 
        selectedHour={selectedHour}
        idEstabelecimento={estabelecimento.id}
        setSelectedYear={setSelectedYear} 
        setSelectedMonth={setSelectedMonth} 
        setSelectedDay={setSelectedDay} 
        setSelectedHour={setSelectedHour} />

      <FinishScheduleButton>
        <FinishButtonText>{t("finishScheduleButton")}</FinishButtonText>
      </FinishScheduleButton>
    </ScheduleBody>
  );

}

export default Schedule;