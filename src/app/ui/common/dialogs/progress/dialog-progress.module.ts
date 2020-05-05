import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MaterialModule } from './../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatMenuModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { DialogProgress } from './dialog-progress';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatIconModule
  ],
  declarations: [
    DialogProgress

    ],
  exports: [
    DialogProgress
  ],
  entryComponents:[
    DialogProgress
  ]
})
export class DialogProgressModule { }