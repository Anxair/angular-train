import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html'
})

export class SecondComponent {

  dataAbout = new FormGroup({
    country: new FormControl(''),
    about: new FormControl('')
  });

}
