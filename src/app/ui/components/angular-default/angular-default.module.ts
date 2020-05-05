import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularDefaultComponent } from './angular-default/angular-default.component';
import { RouterModule } from '@angular/router';

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: AngularDefaultComponent
  }
]);


@NgModule({
  declarations: [AngularDefaultComponent],
  imports: [
    CommonModule,
    routes
  ]
})
export class AngularDefaultModule { }
