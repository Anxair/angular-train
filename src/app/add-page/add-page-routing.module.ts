import {AddPageComponent} from './add-page.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: AddPageComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AddPageRoutingModule {
}
