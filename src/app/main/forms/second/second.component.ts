import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})

export class SecondComponent implements OnInit {

  dataAbout: FormGroup = this.formBuilder.group({
    country: [''],
    about: ['']
  });

  @Output() onCreateForm = new EventEmitter<FormGroup>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.onCreateForm.emit(this.dataAbout);
  }

  createForm(formGroup: FormGroup): void {
    this.dataAbout.addControl('dataPassword', formGroup);
    this.onCreateForm.emit(this.dataAbout);
  }
}
