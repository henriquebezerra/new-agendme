import {Container, ViewIcon, EmptyMessage, SubMessage} from '@/components/EmptyResult/style';
import { SearchIcon } from '@/constants/icons';

const EmptyResult = () => {
  return (
    <Container>
      <ViewIcon>
        <SearchIcon size={100} color='#FFFFFF'/>
      </ViewIcon>
      <EmptyMessage>Nenhum resultado encontrado</EmptyMessage>
      <SubMessage>Tente verificar a ortografia ou usar termos diferentes</SubMessage>
    </Container>
  );
};
export default EmptyResult;