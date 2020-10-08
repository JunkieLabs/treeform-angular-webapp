import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InnerGalleryComponent } from './inner-gallery/inner-gallery.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../../common/footer/footer.module';
import { MatButtonModule } from '@angular/material/button';
import { Ng2GalleryModule } from 'src/app/components/ng2-gallery/ng2-gallery.module';
import { MatIconModule } from '@angular/material/icon';

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: InnerGalleryComponent
  }
]);

@NgModule({
  declarations: [InnerGalleryComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FooterModule,
    MatButtonModule,
    Ng2GalleryModule,
    MatIconModule,
    routes
  ]
})
export class InnerGalleryModule { }
