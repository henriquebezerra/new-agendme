import {Container, ViewIcon, EmptyMessage, SubMessage} from '@/components/EmptyResult/style';
import { SearchIcon } from '@/constants/icons';
import { EmptyResultProps } from '@/model/interfaces/general-interfaces';

const EmptyResult:React.FC<EmptyResultProps> = ({ 
  message = 'Nenhum resultado encontrado', 
  subMessage = 'Tente verificar a ortografia ou usar termos diferentes', 
  iconColor = '#FFFFFF', 
  textColor = '#FFFFFF', 
  searchIcon }) => {
  return (
    <Container>
      <ViewIcon>
        {
          searchIcon ? searchIcon : <SearchIcon size={100} color={iconColor}/>
        }
      </ViewIcon>
      <EmptyMessage style={{color: textColor}}>{message}</EmptyMessage>
      <SubMessage style={{color: textColor}}>{subMessage}</SubMessage>
    </Container>
  );
};
export default EmptyResult;