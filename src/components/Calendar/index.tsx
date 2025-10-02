import { BackIcon, NextIcon } from "@/constants/icons";
import { CalendarItem, DateInfo, DateNextArea, DatePrevArea, DateTitle, DateTitleArea } from "./style";
import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import { DayItem } from "@/model/interfaces/general-interfaces";
import { CalendarActions } from "./actions";

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
    const newListDays = await action.verifyAvailability(selectedYear, selectedMonth, idEstabelecimento);
    setListDays(newListDays);
  };

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
        horizontal
        showsHorizontalScrollIndicator={false}
        data={days}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => ( 

          <Text>{item}</Text>
        )}
      />

    </CalendarItem>
  );
}

export default Calendar