import { SafePipe } from './safeurl.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';
import { ViewerComponent } from './viewer/viewer.component';
import { ImageService } from './services/image.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    GalleryComponent,
    ViewerComponent,
    SafePipe
  ],
  providers: [
    ImageService
  ],
  exports: [
    GalleryComponent,
    ViewerComponent
  ]
})
export class Ng2GalleryModule { }
