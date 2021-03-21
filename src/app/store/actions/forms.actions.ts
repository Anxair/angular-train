import {createAction, props} from '@ngrx/store';
import {DataForm} from '../../main/forms/first/first.component';

export enum FormsActions {
  SaveForm = '[Form] Save Form',
  GetForm = '[Form] Get Form',
  FormSavedSuccess = '[Form] Saved Success',
  FormSavedError = '[Form] Saved Error'

}

export const saveForm = createAction(
  FormsActions.SaveForm,
  props<{ form: DataForm }>()
);

export const getForm = createAction(
  FormsActions.GetForm
);

export const formSavedSuccess = createAction(
  FormsActions.FormSavedSuccess,
  props<{ form: DataForm }>()
);

export const formSavedError = createAction(
  FormsActions.FormSavedError,
  props<{ error: string }>()
);
