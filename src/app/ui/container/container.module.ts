import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
// import { MaterialModule } from "../../material.module";
// import { TbWaterfallModule } from "../../tb/tb-waterfall/tb-waterfall.module";
import { BlankContainerComponent } from "./blank-container/blank-container.component";
import { WebappContainerComponent } from './webapp-container/webapp-container.component';
import { TbWaterfallModule } from 'src/app/tb/tb-waterfall/tb-waterfall.module';
// import { DashboardContainerComponent } from "./dashboard-container/dashboard-container.component";
// import { AuthContainerComponent } from './auth-container/auth-container.component';
// import { LandingPageContainerComponent } from './landing-page-container/landing-page-container.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    // MaterialModule,
    // MatToolbarModule,
    TbWaterfallModule,
    // MatBottomSheetModule,
    ReactiveFormsModule,
    FormsModule,
    MatRippleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    RouterModule
  ],
  declarations: [
    BlankContainerComponent,
    WebappContainerComponent,
    // DashboardContainerComponent,
    // AuthContainerComponent,
    // LandingPageContainerComponent
  ],
  exports: [BlankContainerComponent, WebappContainerComponent]
})
export class ContainerModule { }
