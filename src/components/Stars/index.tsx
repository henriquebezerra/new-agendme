
import {StarArea, StarText} from '@/components/Stars/style'

import { Rating } from 'react-native-ratings';

export const Stars = ({stars = 0.0, showNumber = false, backgroundColor = "#FFFFFF" }) => {
  return(
    <StarArea>
      <Rating
        imageSize={18}
        showRating={false}
        startingValue={stars}
        style={{padding: 5}}
        tintColor={backgroundColor}
        readonly
      />
      {
        showNumber && <StarText>{stars.toFixed(1)}</StarText>
      }
    </StarArea>
  );
}