import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TbInpageLinkActive } from './tb-inpage-link-active.directive';

@NgModule({
  declarations: [TbInpageLinkActive],
  imports: [
    CommonModule
  ],
  exports: [TbInpageLinkActive]
})
export class TbInpageLinkModule { }
