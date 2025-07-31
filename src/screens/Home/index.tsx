import { LocationIcon, SearchIcon } from "@/constants/icons";
import { 
  Container, 
  Scroller, 
  HeaderArea, 
  HeaderTitle,
  SearchButton,
  LocationArea,
  LocationInput,
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

type PreloadScreenProp = NativeStackNavigationProp<RootStackParamList>;


const Home = () => { 

  const navigation = useNavigation<PreloadScreenProp>();
  const [locationText, setLocationText ] = useState('');
  const [loading, setLoading] = useState(false);
  const service = new HomeActions();
  const [estabelecimentos, setEstabelecimentos ] = useState<Estabelecimento[]>();

  const handleLocationFinder = async () => {
    setLoading(true);
    await service.handleLocationFinder();
    setLoading(false);
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      const listaEstabelecimentos = await service.carregarEstabelecimentos();
      setEstabelecimentos(listaEstabelecimentos);
      setLoading(false);
    })();
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

        <LocationArea>
          <LocationInput 
            placeholder="O que está procurando?"
            placeholderTextColor="#FFFFFF"
            value={locationText}
            onChangeText={(location:string) => setLocationText(location)}/>

          <LocationFinder onPress={handleLocationFinder}>
            <LocationIcon color="#FFFFFF"/>
          </LocationFinder>

        </LocationArea>

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