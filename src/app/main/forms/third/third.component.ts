import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
})

export class ThirdComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }

  dataPassword = this.formBuilder.group({
    password: [],
    repeatedPassword: []
  });
  hide = true;
  hideRep = true;

  @Input() form: FormGroup;

  ngOnInit(): void {
    this.form.addControl('dataPassword', this.dataPassword);
  }

  printForm(): void {
    console.log(this.form.value);
  }

}
