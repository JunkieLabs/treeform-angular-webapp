import { Directive, OnChanges, OnDestroy, AfterContentInit, Input, Renderer2, ElementRef, ChangeDetectorRef, Inject, SimpleChanges, HostListener, NgZone, Output, EventEmitter } from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
// import { Platform } from '@angular-mdc/web';
import { Subscription, fromEvent } from 'rxjs';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';

@Directive({
    selector: '[tbScrollVisibility]',
    exportAs: 'tbScrollVisibility'
})
export class TbScrollVisibility implements OnChanges, OnDestroy, AfterContentInit {



    private document: Document;
    private mClassActive: string;

    private mRefTarget: HTMLElement;

    private _scrollTargetSubscription: Subscription | null = null;
    mReflink: any;

    mInWindow = false

    mOffsetTop = -12
    mOffsetBottom = 240
    @Input()
    set tbScrollVisibityClass(data: string) {
        //const classes = Array.isArray(data) ? data : data.split(' ');
        //this.classes = classes.filter(c => !!c);
        this.mClassActive = data;

    }

    @Input("tbScrollRef") set scrollRef(ref: any) {
        // const link = Array.isArray(data) ? data[0] : data.split(" ")[0];
        // this.mReflink = link;


        if (ref && !ref.nativeElement) {
            this.mRefTarget = ref
        } else if (ref) {
            this.mRefTarget = ref.nativeElement
        }



    }

    @Input("tbScrollRefId") set scrollRefId(data: any) {
        const link = Array.isArray(data) ? data[0] : data.split(" ")[0];
        this.mReflink = link;


        // if(ref && !ref.nativeElement){
        //     this.mRefTarget = ref
        // }else if(ref){
        //     this.mRefTarget = ref.nativeElement
        // }



    }

    @Output("tbScrollVisibilityChange")
    onVisibilityChange = new EventEmitter<boolean>()


    private mTarget: any
    constructor(
        private _ngZone: NgZone,
        private renderer: Renderer2,
        private el: ElementRef,
        private _platform: Platform,
        private cdr: ChangeDetectorRef,
        @Inject(DOCUMENT) document: any) {
        this.document = <Document>document;
        // this.mTarget = this.el.nativeElement

    }


    ngAfterContentInit(): void {
        if (!this.mRefTarget) {
            this.mRefTarget = this.document.getElementById(this.mReflink);

        }
        // console.log("ref: ", this.mRefTarget);

        this._initScrollHandler()
        this.doSomething()


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
            fromEvent<Event>(this.mRefTarget || window, 'scroll')
                .subscribe((event) => this._ngZone.run(() => {
                    this.doSomething()
                })));
    }

    private update(): void {

        if (this.mInWindow) {
            this.addClass(this.mClassActive)
            // this.classes.forEach(
            //     c => this.renderer.addClass(this.el.nativeElement, c));
        } else {
            this.removeClass(this.mClassActive)
            // this.classes.forEach(
            //     c => this.renderer.removeClass(this.el.nativeElement, c));
        }
        this.cdr.detectChanges();

    }

    // @HostListener('scroll', ['$event'])
    // onScroll(event) {
    //     try {

    //         console.log(event);

    //         const top = event.target.scrollTop
    //         const height = this.el.nativeElement.scrollHeight
    //         const offset = this.el.nativeElement.offsetHeight

    //         // emit bottom event
    //         if (top > height - offset - 1) {
    //             //   this.scrollPosition.emit('bottom')
    //         }

    //         // emit top event
    //         if (top === 0) {
    //             //   this.scrollPosition.emit('top')
    //         }

    //     } catch (err) {
    //         console.log(err);

    //     }
    // }
    ngOnDestroy(): void {
        //throw new Error("Method not implemented.");
    }
    ngOnChanges(changes: SimpleChanges): void {
        //throw new Error("Method not implemented.");
    }

    doSomething() {

        // console.debug("event",   window.innerHeight, this.mRefTarget.scrollTop );
        // console.debug("event ", window.innerHeight, this.el.nativeElement.offsetTop - this.mRefTarget.scrollTop);

        let compareBottom = this.el.nativeElement.offsetTop - this.mRefTarget.scrollTop
        let isInWindow = false
        if (compareBottom < (window.innerHeight - this.mOffsetBottom) && (compareBottom - this.mOffsetTop) > 0) {
            // console.debug("screen: 1");
            isInWindow = true

        } else {
            isInWindow = false
        }

        if (this.mInWindow !== isInWindow) {
            this.mInWindow = isInWindow
            this.update()
            this.onVisibilityChange.emit(isInWindow)
        }

    }


    private addClass(classNames: string) {
        // console.log("adding class",this.el.nativeElement)
        if (!classNames) return
        let classes = classNames.split(' ');
        classes.forEach(
            c => this.renderer.addClass(this.el.nativeElement, c));
        //this.renderer.addClass(this.el.nativeElement,);
    }

    private removeClass(classNames: string) {
        if (!classNames) return
        let classes = classNames.split(' ');

        classes.forEach(
            c => this.renderer.removeClass(this.el.nativeElement, c));

    }



}
