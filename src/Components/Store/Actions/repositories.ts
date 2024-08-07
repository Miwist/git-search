export const UPDATE_REPOSITORIES = 'UPDATE_REPOSITORIES';

export const updateRepositories = (value: any) => ({
  type: UPDATE_REPOSITORIES,
  payload: value,
});

export const CHOISE_REPOSITORY = 'CHOISE_REPOSITORY';

export const choiseRepository = (value: any) => ({
  type: CHOISE_REPOSITORY,
  payload: value,
});

export const LOADING_REPOSITORY = 'LOADING_REPOSITORY';

export const loadingRepository = (value: boolean) => ({
  type: LOADING_REPOSITORY,
  payload: value,
});

export const STEP_REPOSITORY = 'STEP_REPOSITORY';

export const stepRepository = (value: number) => ({
  type: STEP_REPOSITORY,
  payload: value,
});

export const COUNT_REPOSITORY = 'COUNT_REPOSITORY';

export const countRepository = (value: number) => ({
  type: COUNT_REPOSITORY,
  payload: value,
});