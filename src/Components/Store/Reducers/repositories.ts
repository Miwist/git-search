import {
  UPDATE_REPOSITORIES,
  CHOISE_REPOSITORY,
  LOADING_REPOSITORY,
  STEP_REPOSITORY,
  COUNT_REPOSITORY,
} from "../Actions/repositories";

interface RepositoriesState {
  value: any;
  selected: any;
  loading: boolean;
  step: number;
  count: number;
}

const initialState: RepositoriesState = {
  value: [],
  selected: null,
  loading: false,
  step: 0,
  count: 5,
};

const repositoriesReducer = (
  state: RepositoriesState = initialState,
  action: any
) => {
  switch (action.type) {
    case UPDATE_REPOSITORIES:
      return { ...state, value: action.payload };
    case CHOISE_REPOSITORY:
      return { ...state, selected: action.payload };
    case LOADING_REPOSITORY:
      return { ...state, loading: action.payload };
    case STEP_REPOSITORY:
      return { ...state, step: action.payload };
    case COUNT_REPOSITORY:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default repositoriesReducer;
