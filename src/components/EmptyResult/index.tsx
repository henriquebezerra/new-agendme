import {Container, ViewIcon, EmptyMessage, SubMessage} from '@/components/EmptyResult/style';
import { SearchIcon } from '@/constants/icons';
import { EmptyResultProps } from '@/model/interfaces/general-interfaces';
import { useTranslation } from 'react-i18next';

const EmptyResult:React.FC<EmptyResultProps> = ({ 
  message,
  subMessage,
  iconColor = '#FFFFFF', 
  textColor = '#FFFFFF', 
  searchIcon }) => {

  const { t } = useTranslation();
  const displayMessage = message || t('noResultsFoundDefault');
  const displaySubMessage = subMessage || t('noResultsFoundSubMessageDefault');

  return (
    <Container>
      <ViewIcon>
        {
          searchIcon ? searchIcon : <SearchIcon size={100} color={iconColor}/>
        }
      </ViewIcon>
      <EmptyMessage style={{color: textColor}}>{displayMessage}</EmptyMessage>
      <SubMessage style={{color: textColor}}>{displaySubMessage}</SubMessage>
    </Container>
  );
};
export default EmptyResult;