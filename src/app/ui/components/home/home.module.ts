import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterModule } from '../../common/footer/footer.module';
import { ConnectUsComponent } from './connect-us/connect-us.component';
import { OurStoreComponent } from './our-store/our-store.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { VideoComponent } from './video/video.component';
import { HomeTopComponent } from './home-top/home-top.component';
import { MatVideoModule } from 'mat-video';

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: HomeComponent
  }
]);

@NgModule({
  declarations: [HomeComponent, ConnectUsComponent, OurStoreComponent, AdvantagesComponent, OurServicesComponent, VideoComponent, HomeTopComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    FooterModule,
    MatVideoModule,
    routes
  ]
})
export class HomeModule { }
