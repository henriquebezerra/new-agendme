import { LocationIcon, SearchIcon } from "@/constants/icons";
import { 
  Container, 
  Scroller, 
  HeaderArea, 
  HeaderTitle,
  SearchButton,
  SearchArea,
  SearchInput,
  LocationFinder,
  LoadingIcon,
  EstabelecimentosArea
} from "./style";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/types/general-type";
import { useEffect, useState } from "react";
import { HomeActions } from "@/screens/Home/actions";
import { Estabelecimento } from "@/model/estabelecimento.model";
import EstabelecimentoItem from "@/components/EstabelecimentoItem";
import { Alert } from "@/components/Alert";

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;


const Home = () => { 

  const navigation = useNavigation<PreloadScreenProp>();
  const [estabelecimentoText, setLocationText ] = useState('');
  const [loading, setLoading] = useState(false);
  const service = new HomeActions();
  const [estabelecimentos, setEstabelecimentos ] = useState<Estabelecimento[]>();

  const handleLocationFinder = () => {
    setEstabelecimentos([]);
    setLoading(true);
    service.carregarEstabelecimentos(estabelecimentoText).then((response:Estabelecimento[]) => {
      setEstabelecimentos(response);
    }).catch(error => {
        Alert('Alerta', error.message, [{text: 'OK'}]);
       }).finally(()=> {
        setLoading(false);
    });
  }

  useEffect(() => {
      setLoading(true);
      service.carregarEstabelecimentos().then((response:Estabelecimento[]) => {
        setEstabelecimentos(response);
      }).catch(error => {
        Alert('Alerta', error.message, [{text: 'OK'}]);
       }).finally(()=> {
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Scroller>
        <HeaderArea>
          <HeaderTitle>Encontre um profissional.</HeaderTitle>
          <SearchButton onPress={() => {navigation.navigate('Search')}}>
            <SearchIcon />
          </SearchButton>
        </HeaderArea>

        <SearchArea>
          <SearchInput 
            placeholder="O que está procurando?"
            placeholderTextColor="#FFFFFF"
            value={estabelecimentoText}
            onChangeText={(location:string) => setLocationText(location)}
            onSubmitEditing={handleLocationFinder}/>

          <LocationFinder onPress={handleLocationFinder}>
            <LocationIcon color="#FFFFFF"/>
          </LocationFinder>

        </SearchArea>

        {loading &&
          <LoadingIcon size="large" color="#FFFFFF" />
        }
        {
          estabelecimentos && (
            <EstabelecimentosArea>
              {
                estabelecimentos.map((item:Estabelecimento) => (
                  <EstabelecimentoItem estabelecimento={item} key={item.id}/>
                ))
              }
            </EstabelecimentosArea>
          )
        }
      </Scroller>
    </Container>
  );

}

export default Home;