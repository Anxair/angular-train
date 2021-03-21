import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../../../service/data.service';
import {Store} from '@ngrx/store';
import {saveForm} from '../../../store/actions/forms.actions';
import {getCurrentForm, isLoad} from '../../../store';
import {Observable} from 'rxjs';

export interface DataForm {
  login: string;
  email: string;
  country: string;
  about: string;
  password: string;
  repeatedPassword: string;
}

export class DataFormClass implements DataForm {
  login: string;
  email: string;
  country: string;
  about: string;
  password: string;
  repeatedPassword: string;

  constructor(login: string, email: string, country: string, about: string, password: string, repeatedPassword: string) {
    this.login = login;
    this.email = email;
    this.country = country;
    this.about = about;
    this.password = password;
    this.repeatedPassword = repeatedPassword;
  }
}

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
  }
)
export class FirstComponent implements OnInit {

  constructor(private dataService: DataService,
              private store: Store) {
    this.dataRegistration = new FormGroup({
      login: new FormControl('', {updateOn: 'blur'}),
      email: new FormControl('', [Validators.required, Validators.email])
    });
    // this.store.dispatch(saveForm({
    //   form: new DataForm('Created login', '@test@test.by',
    //     'USA', 'la-la-la', '222', '222')
    // }));
    // this.store.dispatch(saveForm({
    //   form: new DataForm('Created login 2', '@test2@test.by',
    //     'USA', 'la-la-la', '333', '333')
    // }));
    this.store.subscribe(state => console.log(state));
  }

  $isLoad: Observable<boolean>;
  currentForm: DataForm;
  dataRegistration: FormGroup;

  ngOnInit(): void {
    this.$isLoad = this.store.select(isLoad);
  }


  getErrorMessage(): string {
    if (this.dataRegistration.controls.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.dataRegistration.controls.email.hasError('email') ? 'Not a valid email' : '';
  }

  saveForm(): void {
    if (this.dataRegistration.valid) {
      const dataRegistration = this.dataRegistration.controls.dataAbout as FormGroup;
      const dataPassword = dataRegistration.controls.dataPassword as FormGroup;
      this.store.dispatch(saveForm({
        form: new DataFormClass(this.dataRegistration.controls.login.value, this.dataRegistration.controls.email.value,
          dataRegistration.controls.country.value, dataRegistration.controls.about.value,
          dataPassword.controls.password.value, dataPassword.controls.repeatedPassword.value)
      }));
      this.dataRegistration.reset();

      // const data = new DataForm(this.dataRegistration.controls.login.value, this.dataRegistration.controls.email.value,
      //   dataRegistration.controls.country.value, dataRegistration.controls.about.value,
      //   dataPassword.controls.password.value, dataPassword.controls.repeatedPassword.value);
      // this.dataService.saveData(data);
    } else {
      console.log('sm-th wrong');
    }
  }

  getForm(): void {
    this.store.select(getCurrentForm).subscribe(value => {
      this.currentForm = value;
      this.dataRegistration.patchValue(this.currentForm);
      this.dataRegistration.controls.dataAbout.patchValue(this.currentForm);
      const dataAbout = this.dataRegistration.controls.dataAbout as FormGroup;
      dataAbout.controls.dataPassword.patchValue(this.currentForm);
    });
  }

  createForm(form: FormGroup): void {
    this.dataRegistration.addControl('dataAbout', form);
  }
}



