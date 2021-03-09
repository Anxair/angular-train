import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
  }
)
export class FirstComponent {

  constructor() {
    this.dataRegistration = new FormGroup({
      login: new FormControl('', {updateOn: 'blur'}),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  dataRegistration: FormGroup;


  getErrorMessage(): string {
    if (this.dataRegistration.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.dataRegistration.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  printForm(): void {
    console.log(this.dataRegistration.value);
  }

}
