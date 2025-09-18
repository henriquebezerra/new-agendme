import  Swiper  from 'react-native-swiper';
import {
  SwipeDot,
  SwipeDotActive,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
  SwipeImage,
  SwipeItem,
  UserAvatar,
  UserInfo,
  UserInfoName,
  UserFavButton,
  BackButton,
  FakeSwiper,
  LoadingIcon,
  ServicesTitle
} from '@/screens/ProviderProfile/style';
import { Container } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PreloadScreenProp } from "@/types/general-type";
import { Estabelecimento } from "@/model/estabelecimento.model";
import { useEffect, useState } from 'react';
import { FileObject } from '@/model/interfaces/general-interfaces';
import { ProfileAction } from '@/screens/ProviderProfile/actions';
import { FavoriteIcon, BackIcon, UserFeatherIcon, StoreEmptyIcon } from '@/constants/icons';
import { API_BASE_URL, ENDPOINT_BASE_URL } from '@env'
import { Stars } from '@/components/Stars';
import { Servico } from '@/model/servico.model';
import ServiceItem from '@/components/ServiceItem';
import { FlatList } from 'react-native';
import EmptyResult from '@/components/EmptyResult';

const Profile = () => {
  const navigation = useNavigation<PreloadScreenProp>();
  const route = useRoute();
  const { estabelecimento } = route.params as { estabelecimento: Estabelecimento };
  const [fileSwiper, setFileSwiper] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [servicos, setServicos] = useState<Servico[]>([]);
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const service = new ProfileAction();

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
              <UserInfoName> {estabelecimento.nome} </UserInfoName>
              <Stars stars={estabelecimento.star} showNumber />
            </UserInfo>
            <UserFavButton>
              <FavoriteIcon size={24} color='#999999'/>
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
          <TestimonialArea>

          </TestimonialArea>
      </PageBody>
      <BackButton onPress={() => navigation.goBack()}>
        <BackIcon size={30} color='#FFFFFF'/>
      </BackButton>
    </Container>
  );
};

export default Profile;
