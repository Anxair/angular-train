import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
})

export class ThirdComponent {
  dataPassword = new FormGroup({
    password: new FormControl(''),
    repeatedPassword: new FormControl('')
  });

  hide = true;
  hideRep = true;
}
