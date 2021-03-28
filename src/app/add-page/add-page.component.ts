import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {logOut} from '../store/actions/forms.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.css']
})
export class AddPageComponent implements OnInit {

  constructor(private store: Store,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  clearStore(): void {
    this.store.dispatch(logOut());
    this.router.navigate(['/']);
  }
}
