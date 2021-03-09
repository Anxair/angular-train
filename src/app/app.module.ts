import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './main/main/main.component';
import {RouterModule} from '@angular/router';
import {FirstComponent} from './main/forms/first/first.component';
import {SecondComponent} from './main/forms/second/second.component';
import {ThirdComponent} from './main/forms/third/third.component';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {StoreModule} from '@ngrx/store';
import {formReducer} from './store/state/form.reducer';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    StoreModule.forRoot({}, {}),
    StoreModule.forFeature('dataRegistration', formReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
