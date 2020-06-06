import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { RoutingStateService } from './components/states/routingState.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'treeform-angular-webapp';
  mSubscriptions: Subscription[] = [];
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private routingState: RoutingStateService
  ) {
    this.routingState.loadRouting();
    this.addSvgIcons(iconRegistry, sanitizer);
  }

  ngOnDestroy() {
    this.mSubscriptions.forEach((s) => s.unsubscribe());
  }

  addSvgIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry
      .addSvgIcon(
        'menu',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg')
      )
      .addSvgIcon(
        'grass',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/grass.svg')
      )
      .addSvgIcon(
        'pin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pin.svg')
      ).addSvgIcon(
        'play',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/play.svg')
      )  .addSvgIcon(
        'arrow',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow.svg')
      )
      .addSvgIcon(
        'humidity',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/humidity.svg')
      )
      .addSvgIcon(
        'sun',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/sun.svg')
      )
      .addSvgIcon(
        'weather',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/weather.svg')
      );
  }
  //   iconRegistry
  //     .addSvgIcon(
  //       "home",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/ic_home.svg")
  //     )
  //     .addSvgIcon(
  //       "parking",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/ic_parking.svg")
  //     )
  //     .addSvgIcon(
  //       "person",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/ic_person.svg")
  //     )
  //     .addSvgIcon(
  //       "price",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/ic_price.svg")
  //     )

  //     .addSvgIcon(
  //       "qr-code",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/ic_qr_code.svg")
  //     )
  //     .addSvgIcon(
  //       "automobees",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/ic_automobees.svg")
  //     )
  //     .addSvgIcon(
  //       "search_new",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/search_new.svg")
  //     )
  //     .addSvgIcon(
  //       "menu",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/menu.svg")
  //     )
  //     .addSvgIcon(
  //       "call",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/call.svg")
  //     )
  //     .addSvgIcon(
  //       "mail",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/mail.svg")
  //     )
  //     .addSvgIcon(
  //       "facebook",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/facebook.svg")
  //     )
  //     .addSvgIcon(
  //       "instagram",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/instagram.svg")
  //     )
  //     .addSvgIcon(
  //       "twitter",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/twitter.svg")
  //     )
  //     .addSvgIcon(
  //       "linkedin",
  //       sanitizer.bypassSecurityTrustResourceUrl("assets/svg/linkedin.svg")
  //     )
  //     ;
  // }

  onActivate(e, outlet) {
    // console.log("Acc");
    outlet.scrollTop = 0;
  }
}
