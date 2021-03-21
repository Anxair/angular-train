import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';

import {FormsActions, formSavedError, formSavedSuccess, saveForm} from '../actions/forms.actions';
import {Injectable} from '@angular/core';
import {DataService} from '../../../service/data.service';
import {catchError, concatMap, map} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class FormsEffects {
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {
  }

  saveForm$ = createEffect(() => {
    console.log('we are in effects');
    return this.actions$
      .pipe(
        ofType(saveForm),
        concatMap(action =>
          this.dataService.saveData(action.form).pipe(
            map(form => (formSavedSuccess({form}))),
            catchError(error => of(formSavedError({error}))
            ))
        ));
  });


}
