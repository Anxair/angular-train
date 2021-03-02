import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
  }
)
export class FirstComponent {

  constructor(private store: Store<any>) {
  }

  dataRegistration = new FormGroup({
    login: new FormControl('', {updateOn: 'blur'}),
    email: new FormControl('', [Validators.required, Validators.email])
  });


  getErrorMessage(): string {
    if (this.dataRegistration.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.dataRegistration.controls.email.hasError('email') ? 'Not a valid email' : '';
  }


}
