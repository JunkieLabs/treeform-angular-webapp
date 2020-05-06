import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TbWaterfallDirective } from './tb-waterfall.directive';

@NgModule({
  declarations: [TbWaterfallDirective],
  imports: [
    CommonModule
  ],
  exports : [TbWaterfallDirective]
})
export class TbWaterfallModule { }
