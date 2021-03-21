import {ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as Forms from './reducers/forms.reducer';
import {FormState} from './reducers/forms.reducer';

export interface State {
  forms: Forms.FormState;
}

export const reducers: ActionReducerMap<State> = {
  forms: Forms.reducer
};

const getFormsState = createFeatureSelector<FormState>('forms');

export const getForms = createSelector(
  getFormsState,
  state => state.forms
);

export const getCurrentForm = createSelector(
  getFormsState,
  state => state.currentForm
);

export const isLoad = createSelector(
  getFormsState,
  state => state.isLoad
);
