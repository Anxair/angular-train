import {createAction, createReducer, on} from '@ngrx/store';

export const formReducer = createReducer(
  {showDataForm: true},
  on(createAction('[Registration] Show Data Registration'), state => {
    console.log('original state is ' + JSON.stringify(state));
    return {
      ...state,
      showDataForm: !state.showDataForm
    };
  })
);
