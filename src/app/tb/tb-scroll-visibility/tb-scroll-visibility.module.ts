import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TbScrollVisibility } from './tb-scroll-visibility.directive';

@NgModule({
  declarations: [TbScrollVisibility],
  imports: [
    CommonModule
  ],
  exports:[TbScrollVisibility]
})
export class TbScrollVisibilityModule { }
