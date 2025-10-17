import { Alert } from "@/components/Alert";
import EmptyResult from "@/components/EmptyResult";
import EstabelecimentoItem from "@/components/EstabelecimentoItem";
import { CloseIcon, LocationIcon, SearchIcon } from "@/constants/icons";
import { Estabelecimento } from "@/model/estabelecimento.model";
import { HomeActions } from "@/screens/Home/actions";
import { PreloadScreenProp } from "@/types/general-type";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Keyboard } from "react-native";
import {
  Container,
  ContentContainer,
  EstabelecimentosArea,
  HeaderArea,
  HeaderTitle,
  LoadingIcon,
  LocationFinder,
  SearchArea,
  SearchButton,
  SearchInput
} from "./style";
import DropdownMenu from "@/components/DropdownMenu";


const Home = () => { 
  const navigation = useNavigation<PreloadScreenProp>();
  const [estabelecimentoText, setEstabelecimentoText ] = useState('');
  const [loading, setLoading] = useState(false);
  const service = new HomeActions();
  const [estabelecimentos, setEstabelecimentos ] = useState<Estabelecimento[]>();
  const [ refreshing, setRefreshing ] = useState(false);
  const { t } = useTranslation();
    
  const handleLocationFinder = () => {
    setEstabelecimentos([]);
    setLoading(true);
    loadEstabelecimentos(estabelecimentoText)
  }

  const onRefresh = async () => {
    setRefreshing(true);
    setEstabelecimentoText('');
    loadEstabelecimentos();
  }

  const loadEstabelecimentos = (valueInput?:string) => {
    service.carregarEstabelecimentos(valueInput).then((response:Estabelecimento[]) => {
      setEstabelecimentos(response);
    }).catch(error => {
      Alert('Alerta', error.message, [{text: 'OK'}]);
    }).finally(()=> {
      setLoading(false);
      setRefreshing(false);
    });
  }

  useEffect(() => {
      setLoading(true);
      loadEstabelecimentos();
  }, []);

  return (
    <Container>
      <ContentContainer>
        <HeaderArea>
          <HeaderTitle>{t('findAProfessional')}</HeaderTitle>
          <SearchButton onPress={() => {navigation.navigate('Search')}}>
            <SearchIcon color="#FFFFFF"/>
          </SearchButton>
        </HeaderArea>

        <SearchArea>
          <SearchInput 
            placeholder={t('whatAreYouLookingFor')}
            placeholderTextColor="#FFFFFF"
            value={estabelecimentoText}
            onChangeText={(estabelecimento:string) => setEstabelecimentoText(estabelecimento)}
            onSubmitEditing={handleLocationFinder}/>

          {estabelecimentoText ? 
            <LocationFinder onPress={() => {setEstabelecimentoText(''); Keyboard.dismiss()}}>
              <CloseIcon color="#FFFFFF"/>
            </LocationFinder>
          :
            <LocationFinder onPress={handleLocationFinder}>
              <LocationIcon color="#FFFFFF"/>
            </LocationFinder>
          }
        </SearchArea>

        {loading &&
          <LoadingIcon size="large" color="#FFFFFF" />
        }

      <EstabelecimentosArea>
        <FlatList
          refreshing={refreshing}
          onRefresh={onRefresh}
          data={estabelecimentos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <EstabelecimentoItem estabelecimento={item} key={item.id}/>
          )}
          />
          {
            (estabelecimentos?.length === 0 && !loading) && <EmptyResult />
          }
        </EstabelecimentosArea>
      </ContentContainer>
      <DropdownMenu />
    </Container>
  );
}

export default Home;