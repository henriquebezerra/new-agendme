import { useEstabelecimentoAvatarUri } from "@/hooks/useAvatarUri";
import { useCurrency } from "@/hooks/useCurrency";
import { useTranslation } from "react-i18next";
import { FinishButtonText, FinishScheduleButton, ProviderAvatar, ProviderName, ScheduleBody, ScheduleInfo, ScheduleItem, ServiceDescription, ServiceInfo, ServiceName, ServicePrice } from "./style";
import { ScheduleProps } from "@/model/interfaces/general-interfaces";


const Schedule:React.FC<ScheduleProps> = ({
  servico,
  estabelecimento
}) => {

  const avatarUri = useEstabelecimentoAvatarUri(estabelecimento);
  const { formattedValue } = useCurrency(servico?.valor || 0);
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

      <FinishScheduleButton>
        <FinishButtonText>{t("finishScheduleButton")}</FinishButtonText>
      </FinishScheduleButton>
    </ScheduleBody>
  );

}

export default Schedule;