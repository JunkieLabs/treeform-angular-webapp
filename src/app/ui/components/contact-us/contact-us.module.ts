import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../../common/footer/footer.module';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


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
    MatIconModule,
    MatDividerModule,
    routes
  ]
})
export class ContactUsModule { }
