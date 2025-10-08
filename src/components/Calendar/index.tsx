import { BackIcon, NextIcon } from "@/constants/icons";
import { CalendarProps, DayItem } from "@/model/interfaces/general-interfaces";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList } from "react-native";
import { CalendarActions } from "./actions";
import { CalendarItem, DateInfo, DateItem, DateItemNumber, DateItemWeekDay, DateNextArea, DatePrevArea, DateTitle, DateTitleArea, styles } from "./style";


const Calendar:React.FC<CalendarProps> = ({
  selectedYear,
  selectedMonth,
  selectedDay,
  selectedHour,
  availabilities,
  setSelectedYear,
  setSelectedMonth,
  setSelectedDay,
  setSelectedHour
}) => {

  const [listDays, setListDays] = useState<DayItem[]>([]);
  const [listHours, setListHours] = useState<string[]>([]);
  const action = CalendarActions.getInstance();
  const [ t ] = useTranslation();
  const months = t('calendar.monthNames', { returnObjects: true }) as string[];
  const days = t('calendar.dayAbbreviations', { returnObjects: true }) as string[];

  const handlePrevMonth = () => {
    let customDate = new Date(selectedYear, selectedMonth, 1);
    customDate.setMonth(customDate.getMonth() - 1);
    setSelectedYear(customDate.getFullYear());
    setSelectedMonth(customDate.getMonth());
    setSelectedDay(0);
  }

  const handleNextMonth = () => {
    let customDate = new Date(selectedYear, selectedMonth, 1);
    customDate.setMonth(customDate.getMonth() + 1);
    setSelectedYear(customDate.getFullYear());
    setSelectedMonth(customDate.getMonth());
    setSelectedDay(0);
  }

  useEffect(() => {
    let today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);
  
  const fetchAvailability = async () => {
    if(selectedMonth !== 0 || selectedYear !== 0){
      const newListDays = await action.verifyAvailability(selectedYear, selectedMonth, days, availabilities);
      setListDays(newListDays);
      setSelectedDay(0);
      setListHours([]);
      setSelectedHour(null);
    }
  };

  const defineDaySelected = (item:DayItem) => {
    if(item.status && (selectedDay !== item.day)){
      setSelectedDay(item.day);
    } if (item.status === true && (selectedDay === item.day)){
      setSelectedDay(0);
    }
  }

  useEffect(() => {
    fetchAvailability();
  }, [selectedYear, selectedMonth, availabilities]);

  return (
    <CalendarItem>
      <DateInfo>
        <DatePrevArea onPress={handlePrevMonth}>
          <BackIcon size={25}/>
        </DatePrevArea>
        <DateTitleArea>
          <DateTitle>{months[selectedMonth]} {selectedYear}</DateTitle>
        </DateTitleArea>
        <DateNextArea onPress={handleNextMonth}>
          <NextIcon size={25}/>
        </DateNextArea> 
      </DateInfo>
      <FlatList
        key={listDays.length}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={listDays}
        keyExtractor={(_, index) => index.toString()}
        initialNumToRender={7}
        windowSize={5}
        renderItem={({ item, index }) => ( 
          <DateItem 
            key={index}
            onPress={() => defineDaySelected(item)}
            style={{
              opacity : item.status ? 1 : 0.5,
              backgroundColor: (item.day === selectedDay && item.status) && '#4EADBE'
              }}>
            <DateItemWeekDay style={(item.day === selectedDay) && styles.selectedWeek}>
              {item.weekDay}
            </DateItemWeekDay>
            <DateItemNumber style={(item.day === selectedDay) && styles.selectedDay}>{item.day}</DateItemNumber>
          </DateItem>
        )}
      />
    </CalendarItem>
  );
}

export default Calendar