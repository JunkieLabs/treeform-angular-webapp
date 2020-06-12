import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopPickComponent } from './top-pick/top-pick.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../../common/footer/footer.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SliderComponent } from './slider/slider.component';
import { DetailContentComponent } from './detail-content/detail-content.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: TopPickComponent
  }
]);

@NgModule({
  declarations: [TopPickComponent, SliderComponent, DetailContentComponent, ImageViewerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FooterModule,
    MatIconModule,
    MatDividerModule,
    SwiperModule,
    routes
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class TopPickModule { }
