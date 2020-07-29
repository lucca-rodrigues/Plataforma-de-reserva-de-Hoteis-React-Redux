import produce from 'immer';
export default function reserve(state = [], action){
  console.log(state);

  // FAZ A CHAMADA PARA A AÇÃO DO BOTÃO
  switch (action.type) {
    case 'ADD_RESERVE':
      return produce(state, draft => {
        // Pega o ID da reserva e modifica a quantidade caso já exista na lista
        const tripIndex = draft.findIndex(trip => trip.id === action.trip.id);
        if(tripIndex >= 0){
          draft[tripIndex].amount ++;
        }else{
          draft.push({
            ...action.trip,
            amount:1,
          });
        }
      });  
    default:
      return state;
  }
}