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
import {EstabelecimentoPops} from "@/model/interfaces/general-interfaces"
import { useNavigation } from '@react-navigation/native';
import { PreloadScreenProp } from '@/types/general-type';
import { API_BASE_URL, ENDPOINT_BASE_URL } from '@env';

const EstabelecimentoItem: React.FC<EstabelecimentoPops> = ({estabelecimento, ...pros}) => {
const navigation = useNavigation<PreloadScreenProp>();

  const handlePress = () => {
    navigation.navigate('ProviderProfile', { estabelecimento } as any);
  };

  return (
    <Area onPress={handlePress}>
      <Avatar source = {{uri: `${API_BASE_URL}${ENDPOINT_BASE_URL}/${estabelecimento.uuidStorage}/avatar/${estabelecimento.avatar}`}} />
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