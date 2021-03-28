import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddPageComponent} from './add-page.component';
import {AddPageRoutingModule} from './add-page-routing.module';


@NgModule({
  declarations: [AddPageComponent],
  imports: [
    CommonModule,
    AddPageRoutingModule
  ]
})
export class AddPageModule {
}
