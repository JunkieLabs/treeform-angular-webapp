import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { MatBottomSheetModule, MatToolbarModule } from "@angular/material";
import { RouterModule } from "@angular/router";
// import { MaterialModule } from "../../material.module";
// import { TbWaterfallModule } from "../../tb/tb-waterfall/tb-waterfall.module";
import { BlankContainerComponent } from "./blank-container/blank-container.component";
// import { DashboardContainerComponent } from "./dashboard-container/dashboard-container.component";
// import { AuthContainerComponent } from './auth-container/auth-container.component';
// import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    // MaterialModule,
    // MatToolbarModule,
    // // TbWaterfallModule,
    // MatBottomSheetModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    BlankContainerComponent,
    // DashboardContainerComponent,
    // AuthContainerComponent,
    // LandingPageContainerComponent
  ],
  exports: [BlankContainerComponent]
})
export class ContainerModule { }
