export const inicitalState = {
  avatar: '',
  favorites: [],
  agendamentos: []
};

export const UserReducer = (state:any, action:any) => { 
  switch(action.type) {
    case 'setAvatar':
    return { ... state, avatar: action.payload.avatar };
    break;
    default:
      return state;
  }
}