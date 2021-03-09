import {AfterContentInit, AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})

export class SecondComponent implements OnInit {

  dataAbout: FormGroup = this.formBuilder.group({
    country: [''],
    about: ['']
  });

  @Input() form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form.addControl('dataAbout', this.dataAbout);
  }

}
