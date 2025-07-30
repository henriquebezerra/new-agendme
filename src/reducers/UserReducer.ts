import { Authenticated } from "@/model/authenticated.model";

export const inicitalState = {
  avatar: '',
  favorites: [],
  agendamentos: [],
  user: new Authenticated('', '', ''),
};

export const UserReducer = (state:any, action:any) => { 
  switch(action.type) {
    case 'setAvatar':
      return { ... state, avatar: action.payload.avatar };
    break;
    case 'setUser':
      return { ... state, user: action.payload.user };
    default:
      return state;
  }
}