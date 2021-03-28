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
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import * as forms from '../app/store/reducers/forms.reducer';
import {reducers} from './store';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {EffectsModule} from '@ngrx/effects';
import {FormsEffects} from './store/effects/forms.effects';
import {clearState} from '../app/store/reducers/forms.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
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
    StoreModule.forRoot({...reducers, forms: forms.reducer}, { metaReducers: [clearState] }),
    EffectsModule.forRoot([FormsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
