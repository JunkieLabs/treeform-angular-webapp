import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../../common/footer/footer.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: AboutUsComponent
  }
]);

@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    FooterModule,
    routes
  ]
})
export class AboutUsModule { }
