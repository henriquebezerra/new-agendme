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
  FakeSwiper
} from '@/screens/Profile/style';
import { Container } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PreloadScreenProp } from "@/types/general-type";
import { Estabelecimento } from "@/model/estabelecimento.model";
import { useEffect, useState } from 'react';
import { FileObject } from '@/model/interfaces/general-interfaces';
import { ProfileAction } from '@/screens/Profile/actions';
import { FavoriteIcon, BackIcon, UserFeatherIcon } from '@/constants/icons';
import { API_BASE_URL, ENDPOINT_BASE_URL } from '@env'
import { Stars } from '@/components/Stars';

const Profile = () => {
  const navigation = useNavigation<PreloadScreenProp>();
  const route = useRoute();
  const { estabelecimento } = route.params as { estabelecimento: Estabelecimento };
  const [fileSwiper, setFileSwiper] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const service = new ProfileAction();

  const fileObjectsSwiper = () => {
    if(estabelecimento && estabelecimento.uuidStorage) {
      setLoading(true);
      service.listUriForSwiper(estabelecimento.uuidStorage)
        .then(setFileSwiper)
        .finally(() => setLoading(false));
    }
  }


  useEffect(() => {
    fileObjectsSwiper();
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
              <UserFeatherIcon size={100} color='#FFFFFF'/>
            </FakeSwiper>
          )}
        </Swiper>
        <PageBody>
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
          <ServiceArea>

          </ServiceArea>
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
