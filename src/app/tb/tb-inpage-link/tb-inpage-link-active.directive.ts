import { Directive, OnChanges, OnDestroy, AfterContentInit, Input, Renderer2, ElementRef, ChangeDetectorRef, Inject, SimpleChanges, HostListener, NgZone } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
// import { Platform } from '@angular-mdc/web';
import { Subscription, fromEvent } from 'rxjs';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[tbInpageLinkActive]',
  exportAs: 'tbInpageLinkActive'
})
export class TbInpageLinkActive implements OnChanges, OnDestroy, AfterContentInit{
  

  
  private classes: string[] = [];
  private link: string;
  private _mLinkedElement;
  private document: Document;
  private scrollListener: Function;


  private _mIsActive: boolean = false;
  private _mIsActivePrev: boolean = false;

  private mTarget:any

  @Input()
  set tbInpageLinkActive(data: string[] | string) {
  //console.log("active: ", data);
  
      const classes = Array.isArray(data) ? data : data.split(' ');
      this.classes = classes.filter(c => !!c);

  }
  @Input()
  set tbInpageLink(data: string) {
    // console.log("inpagelink: ", data);
    
      const link = Array.isArray(data) ? data[0] : data.split(" ")[0];
      this.link = link;


  }

  @Input()
  set tbScrollTarget(target: any) {
    // console.log("subs: ", target);
    
      // this.mTarget = target
      if (target !== this.mTarget) {
        this.mTarget = target ? target : this._platform.isBrowser ? window : undefined;
        this._initScrollHandler();
      }

  }

  private _scrollTargetSubscription: Subscription | null = null;


  constructor(
    private _ngZone: NgZone,
  private renderer: Renderer2,
  private el: ElementRef,
  private _platform: Platform,
  private cdr: ChangeDetectorRef,
  @Inject(DOCUMENT) document: any) {
  this.document = <Document>document;
 }


 ngAfterContentInit(): void {

  // console.log('inpage: ' + this.link);
   if (!this.link) {
       return;
   }
   //this._mLinkedElement = this.el.nativeElement.querySelector(this.link);
   this._mLinkedElement = this.document.getElementById(this.link);
  // console.log(this._mLinkedElement);
   if (!this._mLinkedElement) {
       return;
   }

    //this.checkForChanges();
   this.update();
   //console.log(this._mLinkedElement);
   /*this.scrollListener = this.renderer.listen(this._mLinkedElement, 'scroll', (e) => {
       console.log("scroll");
       console.log(this._mLinkedElement.scrollTop);
       this.onScroll(this._mLinkedElement.scrollTop);
       return true;
   });*/
   //this._mLinkedElement = this.el.nativeElement.
   //throw new Error("Method not implemented.");
}
ngOnDestroy(): void {
   //throw new Error("Method not implemented.");
}
ngOnChanges(changes: SimpleChanges): void {
   //throw new Error("Method not implemented.");
}


//@HostListener('window:scroll', ['$event'])
doSomething(event) {
  //  console.debug("Scroll Event", document.body.scrollTop);
   // see András Szepesházi's comment below
   this.checkForChanges(this.mTarget.scrollTop);
   this.update();


}

private _initScrollHandler(): void {
  if (this._scrollTargetSubscription) {
    this._scrollTargetSubscription.unsubscribe();
  }
  if (!this._platform.isBrowser) {
    return;
  }

  // console.log("suscribed");
  

  this._scrollTargetSubscription = this._ngZone.runOutsideAngular(() =>
    fromEvent<Event>(this.mTarget || window, 'scroll')
      .subscribe((event) => this._ngZone.run((event) => {
        this.doSomething(event)
      })));
}



private checkForChanges(pageYOffset: any) {
   let positionY =pageYOffset;// window.pageYOffset;
  //  console.log("Scroll Event", positionY);
   if (this._mLinkedElement) {
       let offsetTop = this._mLinkedElement.offsetTop;
       let offsetBottom = this._mLinkedElement.offsetHeight + offsetTop;

      //  console.log("linked object: ", this._mLinkedElement.scrollTop);
      //  console.log("offset : ", this._mLinkedElement.offsetTop, this._mLinkedElement.offsetHeight);
       if (offsetTop <= positionY+2 && offsetBottom > positionY+2) {
           this._mIsActive = true;
          // console.log("active");

       } else {
           this._mIsActive = false;
          // console.log("inactive");
       }
   }
}

private update(): void {
   if (!this.link) return;

   if (this._mIsActivePrev !== this._mIsActive) {
       this._mIsActivePrev =this._mIsActive;
       if (this._mIsActive) {
           this.classes.forEach(
               c => this.renderer.addClass(this.el.nativeElement, c));
       } else {
           this.classes.forEach(
               c => this.renderer.removeClass(this.el.nativeElement, c));
       }
       this.cdr.detectChanges();
   }
}
 

}
