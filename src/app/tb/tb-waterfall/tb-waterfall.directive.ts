import {
  Directive,
  OnChanges,
  AfterContentInit,
  OnDestroy,
  ElementRef,
  Input,
  Renderer2,
  ChangeDetectorRef,
  Inject,
  HostListener,
  SimpleChanges,
  NgZone,
  AfterViewChecked,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { Subscription, fromEvent } from 'rxjs';
import { Platform } from '@angular/cdk/platform';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[tbWaterfall]',
})
export class TbWaterfallDirective
  implements OnChanges, OnDestroy, AfterContentInit, AfterViewChecked {
  //private classes: string[] = [];
  private mClassActive: string;
  //private referenceLink: string;
  //private _mLinkedElement;
  private document: Document;
  private scrollListener: Function;
  private _mOffsetY: number = 0;

  //private mRefView: ElementRef;
  private mRefTarget: any;

  private _mIsActive: boolean = false;
  private _mIsActivePrev: boolean = false;
  mLink: any;
  _mLinkedElement: any;
  mRouteChanged: boolean;

  @Input()
  set waterfallActiveClass(data: string) {
    //const classes = Array.isArray(data) ? data : data.split(' ');
    //this.classes = classes.filter(c => !!c);
    this.mClassActive = data;
  }

  @Input()
  set waterfallReferenceTarget(target: HTMLElement) {
    //const link = Array.isArray(data) ? data[0] : data.split(" ")[0];
    //this.referenceLink = link;

    if (target !== this.mRefTarget) {
      this.mRefTarget = target
        ? target
        : this._platform.isBrowser
        ? window
        : undefined;
      this._initScrollHandler();
    }
    // console.log("target: ", this.mRefTarget);
  }

  @Input()
  set waterfallReferenceLink(data: string) {
    const link = Array.isArray(data) ? data[0] : data.split(' ')[0];
    this.mLink = link;

    console.log('waterfallReferenceLink: ', link);
    setTimeout(() => this._updateRefLink());

    // if (this.mLink) {
    //   this._mLinkedElement = this.document.getElementById(this.mLink);
    //   this._initScrollHandler();
    // }
  }

  @Input()
  set waterfallOffsetRef(ref: ElementRef) {
    if (ref.nativeElement.offsetHeight && ref.nativeElement.offsetHeight > 0) {
      this._mOffsetY = ref.nativeElement.offsetHeight;
    } else {
      this._mOffsetY = 2;
    }

    ///console.log(this._mOffsetY);
  }

  private _scrollTargetSubscription: Subscription | null = null;

  subscriptions: Subscription[] = [];

  _mCurrentState = '0we9wewew';
  constructor(
    private renderer: Renderer2,
    private location: Location,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _ngZone: NgZone,
    private el: ElementRef,
    private _platform: Platform,
    private cdr: ChangeDetectorRef,
    @Inject(DOCUMENT) document: any
  ) {
    this.document = <Document>document;

    // console.log(el);
    // console.log('inpage: ');
  }

  ngAfterContentInit() {
    this.subscriptions.push(
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((val) => {
          // if (this.location.path() != '') {
          let routePath = this.location.path();
          // console.log("TbWaterfallDirective route: 1 here ",val, routePath, this._mCurrentState);

          if (this._mCurrentState != routePath) {
            this._mCurrentState = routePath;

            // console.log("TbWaterfallDirective route: 2 here", routePath, this._mCurrentState);

            setTimeout(() => this._updateRefLink());
          }
          // return;
          // }
        })
    );
    // console.log('inpage: ' + this.link);

    //     this._mLinkedElement = this.document.getElementById(this.referenceLink);
    //    if (!this._mLinkedElement) {
    //         return;
    //     }

    //console.log(this._mLinkedElement);
    /*this.scrollListener = this.renderer.listen(this._mLinkedElement, 'scroll', (e) => {
        // console.log("scroll");
        // console.log(this._mLinkedElement.scrollTop);
        this.onScroll(this._mLinkedElement.scrollTop);
        return true;
    });*/
    //this._mLinkedElement = this.el.nativeElement.
    //throw new Error("Method not implemented.");
  }

  ngAfterViewChecked() {
    // console.log("tb-waterfall viewChecked");
  }

  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
    if (this._scrollTargetSubscription) {
      this._scrollTargetSubscription.unsubscribe();
    }
    if (this.subscriptions) {
      this.subscriptions.forEach((s) => s.unsubscribe());
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    //throw new Error("Method not implemented.");
  }

  private _updateRefLink() {
    if (this.mLink) {
      if (this._scrollTargetSubscription != null)
        this._scrollTargetSubscription.unsubscribe();
      this._mLinkedElement = this.document.getElementById(this.mLink);

      this._initScrollHandler();
    }
  }

  private _initScrollHandler(): void {
    if (this._scrollTargetSubscription) {
      this._scrollTargetSubscription.unsubscribe();
    }
    if (!this._platform.isBrowser) {
      return;
    }

    // console.log("_initScrollHandler suscribed: ", this._mLinkedElement);

    this._scrollTargetSubscription = this._ngZone.runOutsideAngular(() =>
      fromEvent<Event>(this.mRefTarget || window, 'scroll').subscribe((event) =>
        this._ngZone.run(() => {
          this.doSomethingTarget(event);
        })
      )
    );
  }

  doSomethingTarget(event) {
    // //console.debug("Scroll Event", event);
    // see András Szepesházi's comment below
    this.checkForChangesTarget(this.mRefTarget.scrollTop);
    this.updateForTarget();
  }

  private checkForChangesTarget(pageYOffset: any) {
    let positionY = pageYOffset;
    if (this._mLinkedElement) {
      let offsetTop = this._mLinkedElement.offsetTop;
      let offsetBottom = this._mLinkedElement.offsetHeight + offsetTop;
      // console.log("checkForChangesTarget 1 link", offsetTop, offsetBottom, positionY, this._mLinkedElement);

      if (offsetTop + this._mOffsetY < positionY && offsetBottom > positionY) {
        this._mIsActive = true;
        // console.log("active");
      } else {
        this._mIsActive = false;
        // console.log("inactive");
      }
    } else if (this.mRefTarget) {
      //console.log(this.mRefTarget);
      //console.log(this.mRefTarget.nativeElement);

      let offsetTop = this.mRefTarget.offsetTop;
      let offsetBottom = this.mRefTarget.offsetHeight + offsetTop;
      // console.log(offsetTop, offsetBottom);
      // console.log("checkForChangesTarget 2 link", offsetTop, offsetBottom, positionY, this._mLinkedElement);

      if (offsetTop + this._mOffsetY < positionY && offsetBottom > positionY) {
        this._mIsActive = true;
        // console.log("active");
      } else {
        this._mIsActive = false;
        // console.log("inactive");
      }
    }

    // if (this._mLinkedElement) {
    //     let offsetTop = this._mLinkedElement.offsetTop;
    //     let offsetBottom = this._mLinkedElement.offsetHeight + offsetTop;

    //     if (offsetTop+ this._mOffsetY < positionY && offsetBottom > positionY) {
    //         this._mIsActive = true;
    //        // console.log("active");

    //     } else {
    //         this._mIsActive = false;
    //        // console.log("inactive");
    //     }
    // }
  }

  private updateForTarget(): void {
    if (!this.mRefTarget) return;

    if (this._mIsActivePrev !== this._mIsActive) {
      this._mIsActivePrev = this._mIsActive;
      if (this._mIsActive) {
        this.addClass(this.mClassActive);
        // this.classes.forEach(
        //     c => this.renderer.addClass(this.el.nativeElement, c));
      } else {
        this.removeClass(this.mClassActive);
        // this.classes.forEach(
        //     c => this.renderer.removeClass(this.el.nativeElement, c));
      }
      this.cdr.detectChanges();
    }
  }

  private addClass(classNames: string) {
    // console.log(this.el.nativeElement)
    let classes = classNames.split(' ');
    classes.forEach((c) => this.renderer.addClass(this.el.nativeElement, c));
    //this.renderer.addClass(this.el.nativeElement,);
  }

  private removeClass(classNames: string) {
    let classes = classNames.split(' ');

    classes.forEach((c) => this.renderer.removeClass(this.el.nativeElement, c));
  }
}
