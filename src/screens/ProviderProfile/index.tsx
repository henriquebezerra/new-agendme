import EmptyResult from '@/components/EmptyResult';
import ServiceItem from '@/components/ServiceItem';
import { Stars } from '@/components/Stars';
import Testimonials from '@/components/Testimonials';
import { BackIcon, FavoriteIcon, FavoriteIconActive, StoreEmptyIcon, UserFeatherIcon } from '@/constants/icons';
import { Estabelecimento } from "@/model/estabelecimento.model";
import { FileObject } from '@/model/interfaces/general-interfaces';
import { Servico } from '@/model/servico.model';
import { ProviderProfileAction } from '@/screens/ProviderProfile/actions';
import {
  BackButton,
  FakeSwiper,
  LoadingIcon,
  PageBody,
  ServiceArea,
  ServicesTitle,
  SwipeDot,
  SwipeDotActive,
  SwipeImage,
  SwipeItem,
  UserAvatar,
  UserFavButton,
  UserInfo,
  UserInfoArea,
  UserInfoName,
} from '@/screens/ProviderProfile/style';
import { PreloadScreenProp } from "@/types/general-type";
import { API_BASE_URL, ENDPOINT_BASE_URL } from '@env';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import { Container } from "./style";
import { UserContext } from '@/contexts/UserContext';
import Toast from 'react-native-toast-message';


const Profile = () => {
  const navigation = useNavigation<PreloadScreenProp>();
  const route = useRoute();
  const {state: user } = useContext(UserContext);
  const { estabelecimento } = route.params as { estabelecimento: Estabelecimento };
  const [fileSwiper, setFileSwiper] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const service = new ProviderProfileAction();


  const fileObjectsSwiper = () => {
    if(estabelecimento && estabelecimento.uuidStorage) {
      service.listUriForSwiper(estabelecimento.uuidStorage).then(setFileSwiper);
    }
  }

  const buscarServicos = () => {
    service.listServicosByEstabelecimentoId(estabelecimento.id)
    .then((servicos) => {
      setServicos(servicos);
    })
    .finally(() => noRefresh());
  }

  const checkFavorite = () => { 
    if (user.user.id) {
      service.isFavorite(estabelecimento.id, user.user.id).then((isFav) => {
        setIsFavorite(isFav);
      });
    }
  }

  const handleFavorite = () => {
    if (user.user.id) { 
      service.handleFavorite(estabelecimento.id, user.user.id).then((favorite:boolean) => {
        setIsFavorite(favorite);
        Toast.show({
          type: 'success',
          text1: 'Favorito',
          text2: 'Estabelecimento adicionado aos favoritos!'
        });
      });
    }
  }

  const onRefresh = () => {
    setRefreshing(true);
    buscarServicos();
  }

  const noRefresh = () => {
    setRefreshing(false);
    setLoading(false)
  }
  
  
  useEffect(() => {
    setLoading(true);
    fileObjectsSwiper();
    buscarServicos();
    checkFavorite();
  }, []);


  return (
      <Container>
        <Swiper
          key={fileSwiper.length} 
          dot={ <SwipeDot/> }
          activeDot={ <SwipeDotActive/> }
          paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
          autoplay={true}
          loop={true}
          autoplayTimeout={4}>

          { fileSwiper.length ? fileSwiper.map((file, index) => (
            <SwipeItem key={index}>
              <SwipeImage source={{ uri:file.uri }} resizeMode="cover" />
            </SwipeItem>
          )) : (
            <FakeSwiper>
              <UserFeatherIcon size={75} color='#FFFFFF'/>
            </FakeSwiper>
          )}
        </Swiper>
        <PageBody pageBodyHeight={fileSwiper.length ? 560 : 650}>
          <UserInfoArea>
            <UserAvatar source={{ uri: `${API_BASE_URL}${ENDPOINT_BASE_URL}${estabelecimento.uuidStorage}/avatar/${estabelecimento.avatar}` }} />
            <UserInfo>
              <UserInfoName>{estabelecimento.nome}</UserInfoName>
              <Stars stars={estabelecimento.star} showNumber />
            </UserInfo>
            <UserFavButton onPress={handleFavorite}>
              {isFavorite ? 
                <FavoriteIconActive size={24} color='#63C2D1' />
              : <FavoriteIcon size={24} color='#999999'/>
              }  
            </UserFavButton>
          </UserInfoArea>
          {
            loading && <LoadingIcon size="large" color="#999999" />
          }
          {
            servicos.length > 0 ? (
              <ServiceArea>
                <ServicesTitle>Lista de serviços</ServicesTitle>
                  <FlatList
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    data={servicos}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                      <ServiceItem key={index} title={item.titulo} value={item.valor} />
                    )}
                    />
              </ServiceArea>
            ) :  (
              !loading && (
                <EmptyResult 
                  message='Nenhum serviço cadastrado'
                  subMessage='O atendente ainda não cadastrou seus serviços'
                  textColor='#63C2D1' 
                  iconColor='#63C2D1'
                  searchIcon={<StoreEmptyIcon size={100} color='#63C2D1' />}
                />
              ))
          }
        <Testimonials idEstabelecimento={estabelecimento.id} />
      </PageBody>
      <BackButton onPress={() => navigation.goBack()}>
        <BackIcon size={30} color='#FFFFFF'/>
      </BackButton>
    </Container>
  );
};

export default Profile;
