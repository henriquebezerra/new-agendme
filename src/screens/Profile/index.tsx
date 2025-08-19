import  Swiper  from 'react-native-swiper';
import {
  SwipeDot,
  SwipeDotActive,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea,
  SwipeImage,
  SwipeItem
} from '@/screens/Profile/style';
import { Container } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PreloadScreenProp } from "@/types/general-type";
import { Estabelecimento } from "@/model/estabelecimento.model";
import { useEffect, useState } from 'react';
import { FileObject } from '@/model/interfaces/general-interfaces';
import { ProfileAction } from '@/screens/Profile/actions';
import { ENDPOINT_BASE_URL } from '@env';
import { Text } from 'react-native';

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
          style={{ height: 240 }}
          dot={ <SwipeDot/> }
          activeDot={ <SwipeDotActive/> }
          paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
          autoplay={true}>

          { fileSwiper.length ? fileSwiper.map((file, index) => (
            <SwipeItem key={index}>
              <SwipeImage source={{ uri:file.uri }} resizeMode="cover" />
            </SwipeItem>
          )) : (
            <Text>No images available</Text>
          )}


        </Swiper>
      </Container>
  );
};

export default Profile;
