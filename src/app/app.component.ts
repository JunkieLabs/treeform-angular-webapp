import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'treeform-angular-webapp';
  mSubscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.mSubscriptions.forEach(s => s.unsubscribe());
  }

  // addSvgIcons(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
