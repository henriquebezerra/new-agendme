import { FlatList } from "react-native";
import { HourItem, TimeItem, TimeItemText } from "./style";
import { HourProps } from "@/model/interfaces/general-interfaces";

const Hour: React.FC<HourProps> = ({ 
  hours,
  selectedHour,
  setSelectedHour 
}) => {

  const handleSelectHour = (hour: string) => {
    if(hour === selectedHour){
      setSelectedHour(null);
      return;
    }

    setSelectedHour(hour);
  }

  return (
    <HourItem>
      <FlatList
        key={hours.length}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={hours}
        renderItem={({ item, index }) => (
          <TimeItem
            onPress={() => handleSelectHour(item)}
            style={{ 
              backgroundColor: (item === selectedHour) && '#4EADBE', 
            }}
            key={index}>
            <TimeItemText style={{ color: (item === selectedHour) && '#FFF' }}>{item}</TimeItemText>
          </TimeItem>
        )}
      />
    </HourItem>
  );

}

export default Hour;