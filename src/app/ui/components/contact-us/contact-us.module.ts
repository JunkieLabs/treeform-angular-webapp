import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../../common/footer/footer.module';

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: ContactUsComponent
  }
]);

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FooterModule,
    routes
  ]
})
export class ContactUsModule { }
