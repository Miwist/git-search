import { UPDATE_INPUT } from '../Actions/input';

interface InputState {
  value: string;
}

const initialState: InputState = {
  value: '',
};

const inputReducer = (state: InputState = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export default inputReducer;