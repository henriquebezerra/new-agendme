import { BackIcon, NextIcon } from "@/constants/icons";
import { DayItem } from "@/model/interfaces/general-interfaces";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CalendarActions } from "./actions";
import { CalendarItem, DateInfo, DateItem, DateItemNumber, DateItemWeekDay, DateNextArea, DatePrevArea, DateTitle, DateTitleArea } from "./style";

const months = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June',
  'July',
  'August',
  'September',  
  'October',
  'November',
  'December'
];

const days = [ 'Sun',  'Mon',  'Tue',  'Wed', 'Thu', 'Fri', 'Sat' ];

interface CalendarProps {
  selectedYear: number;
  selectedMonth: number;
  selectedDay: number;
  selectedHour: string | null;
  idEstabelecimento: number;
  setSelectedYear: (year: number) => void;
  setSelectedMonth: (month: number) => void;
  setSelectedDay: (day: number) => void;
  setSelectedHour: (hour: string | null) => void;
}

const Calendar:React.FC<CalendarProps> = ({
  selectedYear,
  selectedMonth,
  selectedDay,
  selectedHour,
  idEstabelecimento,
  setSelectedYear,
  setSelectedMonth,
  setSelectedDay,
  setSelectedHour
}) => {

  const [listDays, setListDays] = useState<DayItem[]>([]);
  const [listHours, setListHours] = useState<string[]>([]);
  const action = CalendarActions.getInstance();

  const handlePrevMonth = () => {
    let customDate = new Date(selectedYear, selectedMonth, selectedDay);
    customDate.setMonth(customDate.getMonth() - 1);
    setSelectedYear(customDate.getFullYear());
    setSelectedMonth(customDate.getMonth());
    setSelectedDay(1);
  }

  const handleNextMonth = () => {
    let customDate = new Date(selectedYear, selectedMonth, selectedDay);
    customDate.setMonth(customDate.getMonth() + 1);
    setSelectedYear(customDate.getFullYear());
    setSelectedMonth(customDate.getMonth());
    setSelectedDay(1);
  }

  useEffect(() => {
    let today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);
  
  const fetchAvailability = async () => {
    if(selectedMonth !== 0 && selectedMonth !== 0){
      const newListDays = await action.verifyAvailability(selectedYear, selectedMonth, idEstabelecimento);
      setListDays(newListDays);
      setSelectedDay(1);
      setListHours([]);
      setSelectedHour(null);
    }
  };

  const defineDaySelected = (item:DayItem) => {
    if(item.status && (selectedDay !== item.day)){
      setSelectedDay(item.day);
    } else {
      setSelectedDay(0);
    }
  }

  useEffect(() => {
    fetchAvailability();
  }, [selectedYear, selectedMonth]);

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
            <DateItemWeekDay>{item.weekDay}</DateItemWeekDay>
            <DateItemNumber>{item.day}</DateItemNumber>
          </DateItem>
        )}
      />

    </CalendarItem>
  );
}

export default Calendar