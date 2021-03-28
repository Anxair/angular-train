import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'add-page',
    loadChildren: () => import('./add-page/add-page.module')
      .then((m) => m.AddPageModule),
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule {
}
