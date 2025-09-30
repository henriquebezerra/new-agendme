import {
  Area,
  Avatar,
  InfoArea,
  Localidade,
  UserEstabelecimento,
  VerPerfilButton,
  VerPerfilButtonText
} from '@/components/EstabelecimentoItem/style';
import { Stars } from '@/components/Stars';
import { useEstabelecimentoAvatarUri } from '@/hooks/useAvatarUri';
import { EstabelecimentoPops } from "@/model/interfaces/general-interfaces";
import { PreloadScreenProp } from '@/types/general-type';
import { useNavigation } from '@react-navigation/native';

const EstabelecimentoItem: React.FC<EstabelecimentoPops> = ({estabelecimento, ...pros}) => {
  
  const navigation = useNavigation<PreloadScreenProp>();
  const avatarUri = useEstabelecimentoAvatarUri(estabelecimento);

  const handlePress = () => {
    navigation.navigate('ProviderProfile', { estabelecimento } as any);
  };

  return (
    <Area onPress={handlePress}>
      <Avatar source={{ uri: avatarUri }} />
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