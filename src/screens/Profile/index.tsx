import  Swiper  from 'react-native-swiper';
import {
  SwipeDot,
  SwipeDotActive,
  PageBody,
  UserInfoArea,
  ServiceArea,
  TestimonialArea
} from '@/screens/Profile/style';
import { Container } from "./style";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PreloadScreenProp } from "@/types/general-type";
import { Estabelecimento } from "@/model/estabelecimento.model";

const Profile = () => {
  const navigation = useNavigation<PreloadScreenProp>();
  const route = useRoute();
  const { estabelecimento } = route.params as { estabelecimento: Estabelecimento };

  return (
      <Container>
        {/* <Swiper 
          style={{ height: 240 }}
          dot={ <SwipeDot/> }
          activeDot={ <SwipeDotActive/> }
          paginationStyle={{ top: 15, right: 15, bottom: null, left: null }}
          autoplay={true}>
          


        </Swiper> */}
      </Container>
  );
};

export default Profile;
