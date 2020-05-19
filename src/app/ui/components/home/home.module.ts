import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../../common/footer/footer.module';

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: HomeComponent
  }
]);

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    FooterModule,
    routes
  ]
})
export class HomeModule { }
