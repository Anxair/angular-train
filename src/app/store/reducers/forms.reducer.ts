import {DataForm} from '../../main/forms/first/first.component';
import {Action, createReducer, on} from '@ngrx/store';
import * as formActions from '../actions/forms.actions';

export interface FormState {
  forms: DataForm[];
  isLoad: boolean;
  currentForm: DataForm;
  error: string;
}

const initialState: FormState = {
  forms: [],
  isLoad: false,
  currentForm: null,
  error: ''
};

const formReducer = createReducer(
  initialState,
  on(formActions.saveForm, (state, action) => ({
    ...state,
    currentForm: action.form,
    isLoad: true,
    forms: [action.form, ...state.forms]
  })),
  on(formActions.getForm, state => ({
    ...state,
    currentForm: state.currentForm
  })),
  on(formActions.formSavedSuccess, (state, action) => ({
    ...state,
    currentForm: action.form,
    isLoad: false,
    forms: [action.form, ...state.forms]
  })),
  on(formActions.formSavedError, (state, action) => ({
    ...state,
    error: action.error,
    isLoad: false,
    currentForm: null
  }))
);

export function reducer(state: FormState | undefined, action: Action): FormState {
  return formReducer(state, action);
}
