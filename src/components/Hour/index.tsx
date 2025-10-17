import { FlatList } from "react-native";
import { HourItem, TimeItem, TimeItemText } from "./style";
import { HourProps, ItemHour } from "@/model/interfaces/general-interfaces";
import { useMemo } from "react";

const Hour: React.FC<HourProps> = ({ 
  itemsHour,
  selectedItemHour,
  setSelectedItemHour
}) => {

  const handleSelectHour = (itemHour: ItemHour) => {
    if(itemHour.hour === selectedItemHour?.hour){
      setSelectedItemHour(null);
      return;
    }
    setSelectedItemHour(itemHour);
  }

  const flattenedHours:ItemHour[] = useMemo(() => {
    return itemsHour.flatMap(item => {
      return item.hours.map(i => {
        return {
          hour: i,
          intervalMin: item.intervalMin
        } as ItemHour;
      });
    });
  }, [itemsHour]);


  return (
    <HourItem>
      <FlatList
        key={itemsHour.length}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={flattenedHours}
        keyExtractor={(hour, index) => `hour-${hour}-${index}`}
        renderItem={({ item }) => (
          <TimeItem
            onPress={() => handleSelectHour(item)}
            style={{ backgroundColor: (item.hour === selectedItemHour?.hour) && '#4EADBE' }}>
            <TimeItemText style={{ color: (item.hour === selectedItemHour?.hour) && '#FFF' }}>{item.hour}</TimeItemText>
          </TimeItem>
        )}
      />
    </HourItem>
  );

}

export default Hour;