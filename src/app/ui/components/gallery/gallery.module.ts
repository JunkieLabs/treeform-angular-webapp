import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterModule } from '../../common/footer/footer.module';


export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    component: GalleryComponent
  }
]);

@NgModule({
  declarations: [GalleryComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FooterModule,
    routes
  ]
})
export class GalleryModule { }
