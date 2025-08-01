import {
  Area,
  Avatar,
  InfoArea,
  UserEstabelecimento,
  VerPerfilButton,
  VerPerfilButtonText,
  Localidade
} from '@/components/EstabelecimentoItem/style';
import { Stars } from '@/components/Stars'
import {Estabelecimento} from "@/model/estabelecimento.model";

interface EstabelecimentoPops {
  estabelecimento:Estabelecimento
}


const EstabelecimentoItem: React.FC<EstabelecimentoPops> = ({estabelecimento, ...pros}) => {
  return (
    <Area>
      <Avatar source = {{uri: estabelecimento.avatar}} />
      <InfoArea>
        <UserEstabelecimento>{estabelecimento.nome}</UserEstabelecimento>
        <Stars stars={estabelecimento.star} showNumber={true} />
        <Localidade>{`${estabelecimento.endereco.cidade}/${estabelecimento.endereco.estado}`}</Localidade>
        <VerPerfilButton>
          <VerPerfilButtonText>Ver Perfil</VerPerfilButtonText>
        </VerPerfilButton>
      </InfoArea>
    </Area>
  );

}; 

export default EstabelecimentoItem;