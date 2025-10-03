import {Estabelecimento} from "@/model/estabelecimento.model";
import { Servico } from "@/model/servico.model";
import { CustomModalStyle } from "@/types/general-type";

export interface Validation {
  message: string;
}

export interface DadosLocation {
  cidade: string;
  uf?: string | null;
  subregiao?: string | null;
}

export interface EstabelecimentoPops {
  estabelecimento:Estabelecimento;
}
export interface FileObject {
  objectKey?: string;
  size?:number;
  uri?: string;
}

export interface ServiceItemProps {
  title: string;
  servico: Servico;
  estabelecimento: Estabelecimento
}

export interface TestimonialsPops {
  idEstabelecimento: number;
}
export interface EmptyResultProps {
  message?: string;
  subMessage?: string;
  iconColor?: string;
  textColor?: string;
  searchIcon?: React.ReactNode;
}

export interface ScheduleProps {
  servico: Servico | null;
  estabelecimento: Estabelecimento;
}

export interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animationType?: 'slide' | 'fade' | 'none';
  transparent?: boolean;
  style?: CustomModalStyle;
  showCloseButton?: boolean;
}

export interface DayItem {
  status: boolean;
  weekDay: string;
  day: number;
}

export interface CalendarProps {
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