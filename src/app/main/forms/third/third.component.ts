import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

function validatePassword(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.get('password').value;
  const repeatPassword = control.get('repeatedPassword').value;
  if (password !== repeatPassword) {
    control.get('repeatedPassword').setErrors({wrongRepeatedPassword: true});
    return null;
  } else {
    control.get('repeatedPassword').setErrors(null);
    return null;
  }
}

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
})
export class ThirdComponent implements OnInit {

  dataPassword: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  hide = true;
  hideRep = true;

  @Output() onCreateForm = new EventEmitter<FormGroup>();

  ngOnInit(): void {
    this.dataPassword = this.formBuilder.group({
        password: ['', [Validators.required]],
        repeatedPassword: ['', [Validators.required]]
      }, {validators: validatePassword}
    );
    this.onCreateForm.emit(this.dataPassword);
  }


  getErrorMessage(): string {
    if (this.dataPassword.controls.password.hasError('required')) {
      return 'You must enter a value';
    }
    if (this.dataPassword.controls.repeatedPassword.hasError('required')) {
      return 'You must enter a value';
    }else if (this.dataPassword.controls.repeatedPassword.hasError('wrongRepeatedPassword')) {
      return 'Password do not match';
    }
  }
}
