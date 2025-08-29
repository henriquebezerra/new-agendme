import { LocationIcon, SearchIcon, CloseIcon } from "@/constants/icons";
import { 
  Container, 
  HeaderArea, 
  HeaderTitle,
  SearchButton,
  SearchArea,
  SearchInput,
  LocationFinder,
  LoadingIcon,
  EstabelecimentosArea,
  ContentContainer
} from "./style";
import { useNavigation } from "@react-navigation/native";
import { PreloadScreenProp } from "@/types/general-type";
import { useEffect, useState } from "react";
import { HomeActions } from "@/screens/Home/actions";
import { Estabelecimento } from "@/model/estabelecimento.model";
import EstabelecimentoItem from "@/components/EstabelecimentoItem";
import { Alert } from "@/components/Alert";
import { FlatList, Keyboard } from "react-native";
import EmptyResult from "@/components/EmptyResult";


const Home = () => { 
  const navigation = useNavigation<PreloadScreenProp>();
  const [estabelecimentoText, setEstabelecimentoText ] = useState('');
  const [loading, setLoading] = useState(false);
  const service = new HomeActions();
  const [estabelecimentos, setEstabelecimentos ] = useState<Estabelecimento[]>();
  const [ refreshing, setRefreshing ] = useState(false);

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
          <HeaderTitle>Encontre um profissional.</HeaderTitle>
          <SearchButton onPress={() => {navigation.navigate('Search')}}>
            <SearchIcon color="#FFFFFF"/>
          </SearchButton>
        </HeaderArea>

        <SearchArea>
          <SearchInput 
            placeholder="O que está procurando?"
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
    </Container>
  );

}

export default Home;