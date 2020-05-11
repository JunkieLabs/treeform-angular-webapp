import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Renderer2, Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { DOCUMENT } from '@angular/common';
import { MatSidenav, MatSidenavContainer } from '@angular/material/sidenav';
import { ScrollEventService } from 'src/app/components/events/scroll-event';

@Component({
  selector: 'app-webapp-container',
  templateUrl: './webapp-container.component.html',
  styleUrls: ['./webapp-container.component.scss']
})
export class WebappContainerComponent implements OnInit {

  _mRouterLink = "/portfolio"
  _mNavMode = "side";
  _mNavOpen = false;
  _mShowMenu = false;

  panelOpenState = false;
  isExpanded = false;

  subscriptions: Subscription[] = [];
  mCurrentHeading = 1;

  @ViewChild('fixedContent', { static: true }) public fixedContent: ElementRef;

  @ViewChild('mainDrawer', { static: true }) sidenav: MatSidenav;

  @ViewChild('sideNavContainer', { static: true }) myScrollContainer: MatSidenavContainer;

  @ViewChild('contetnScroller', { static: true }) contentScroller: ElementRef;

  @Output() public sidenavToggle = new EventEmitter();
  @Output() sidenavClose = new EventEmitter();



  ngOnInit() {
    this.subscriptions[this.subscriptions.length] = this.scrollEventService.getActionMainEmitter().subscribe((heading: Number) => {
      this.mCurrentHeading = heading as number;
      this.scrollToHeader(heading);
    })


  }
  constructor(private location: Location,
    private router: Router,
    private scrollEventService: ScrollEventService,
    private media: MediaObserver,
    private ren: Renderer2,
    @Inject(DOCUMENT) private document: any) {

    this.media.media$.subscribe((mediaChange: MediaChange) => {
      this._mNavMode = this.getMode(mediaChange);
      console.log("sidena3:", this._mNavMode)
      this.updateSlideMode(mediaChange);

      // this.opened = this.getOpened(mediaChange);
      this.router.events.subscribe((val) => {
        if (this.location.path() != '') {
          let routePath = this.location.path();
          if (routePath.includes("portfolio") || routePath.includes("contact")) {
            this._mRouterLink = "/"
          } else {
            this._mRouterLink = "/portfolio"

          }
          return;
        } else {
        }
      });
    }
    );
  }


  navigateTo(heading: Number) {
    this.scrollEventService.emitHeadingEvent(heading)
    // this.closeDrawer()

  }
  scrollToHeader(heading: Number) {

    let headerClass: String = this.getHeaderClass(heading)
  }
  getHeaderClass(heading: Number): String {

    // switch (heading) {
    //   case ScrollEventService.SUB_HEADING.home:
    //     return '#home'

    //   default:
    //     break;
    // }
    return ''
  }



  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }


  onActivate(e, outlet) {

    this.contentScroller.nativeElement.scrollTop = 0;
    // this.myScrollContainer.scrollable.getElementRef().nativeElement.scrollTop= 0;
  }
  getMode(mediaChange: MediaChange): string {
    if (this.media.isActive('lt-md')) {

      //this._mNavOpen = false;
      return '';
    }
    else {

      //this._mNavOpen = false;
      return 'side';
    }
  }

  _slideMode = "over";
  _drawerOpened = true
  private updateSlideMode(mediaChange: MediaChange) {
    if (this.media.isActive('lt-md')) {
      this._slideMode = "over"
      this._drawerOpened = false

    } else {
      this._slideMode = "side"
      this._drawerOpened = false


    }
  }
 
  enteredButton = false;
  isMatMenuOpen = false;
  isMatMenu2Open = false;
  prevButtonTrigger;


  menuenter() {
    this.isMatMenuOpen = true;
    if (this.isMatMenu2Open) {
      this.isMatMenu2Open = false;
    }
  }

  menuLeave(trigger, button) {
    setTimeout(() => {
      if (!this.isMatMenu2Open && !this.enteredButton) {
        this.isMatMenuOpen = false;
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenuOpen = false;
      }
    }, 80)
  }

  menu2enter() {
    this.isMatMenu2Open = true;
  }

  menu2Leave(trigger1, trigger2, button) {
    setTimeout(() => {
      if (this.isMatMenu2Open) {
        trigger1.closeMenu();
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        this.enteredButton = false;
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.isMatMenu2Open = false;
        trigger2.closeMenu();
      }
    }, 100)
  }

  buttonEnter(trigger) {
    setTimeout(() => {
      if(this.prevButtonTrigger && this.prevButtonTrigger != trigger){
        this.prevButtonTrigger.closeMenu();
        this.prevButtonTrigger = trigger;
        this.isMatMenuOpen = false;
        this.isMatMenu2Open = false;
        trigger.openMenu()
      }
      else if (!this.isMatMenuOpen) {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
        trigger.openMenu()
      }
      else {
        this.enteredButton = true;
        this.prevButtonTrigger = trigger
      }
    })
  }

  buttonLeave(trigger, button) {
    setTimeout(() => {
      if (this.enteredButton && !this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } if (!this.isMatMenuOpen) {
        trigger.closeMenu();
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-focused');
        this.ren.removeClass(button['_elementRef'].nativeElement, 'cdk-program-focused');
      } else {
        this.enteredButton = false;
      }
    }, 100)
  }

}
