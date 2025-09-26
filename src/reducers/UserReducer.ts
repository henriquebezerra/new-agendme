import { Authenticated } from "@/model/authenticated.model";

export const inicitalState = {
  avatar: '',
  favorites: [],
  agendamentos: [],
  user: new Authenticated(null,'', '', ''),
};

export const UserReducer = (state:any, action:any) => { 
  switch(action.type) {
    case 'setUser':
      return { ... state, user: action.payload.user };
    default:
      return state;
  }
}