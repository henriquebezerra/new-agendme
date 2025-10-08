import { FlatList } from "react-native";
import { HourItem, TimeItem, TimeItemText } from "./style";

interface HourProps {
  hours: string[];
}

const Hour: React.FC<HourProps> = ({ hours }) => {

  return (
    <HourItem>
      <FlatList
        key={hours.length}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hours}
        renderItem={({ item, index }) => (
          <TimeItem
            key={index}>
            <TimeItemText>{item}</TimeItemText>
          </TimeItem>
        )}
      />
    </HourItem>
  );

}

export default Hour;