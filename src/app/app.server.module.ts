import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutServerModule} from '@angular/flex-layout/server';

@NgModule({
  imports: [
    AppModule,
    FlexLayoutServerModule,
    ServerModule,
    ServerTransferStateModule,
    BrowserModule.withServerTransition({ appId: 'treeform-angular-webapp' }),
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
