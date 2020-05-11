import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: TestComponent
  }
]);

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    routes
  ]
})
export class TestModule { }
