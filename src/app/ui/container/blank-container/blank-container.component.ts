import { Component, OnInit, ViewChild, Inject, ElementRef, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-blank-container',
  templateUrl: './blank-container.component.html',
  styleUrls: ['./blank-container.component.scss']
})

export class BlankContainerComponent implements OnInit {

  _mRouterLink = "/portfolio"
  panelOpenState = false;
  isExpanded = false;


  @ViewChild('fixedContent',{ static: true })
  public fixedContent: ElementRef;
  subscriptions: Subscription[] = [];
  mCurrentHeading = 1;

  @ViewChild('contentScroller', {static: true}) contentScroller:ElementRef; 
  
  @Output() public sidenavToggle = new EventEmitter();
  @Output() sidenavClose = new EventEmitter();



  ngOnInit() {
    // this.subscriptions[this.subscriptions.length] =  this.scrollEventService.getActionMainEmitter().subscribe((heading: Number) => {
    //   this.mCurrentHeading = heading as number;
    //   this.scrollToHeader(heading);
    // })

  
  }
  constructor(private location: Location, private router: Router, 
     @Inject(DOCUMENT) private document: any
    ) {
    
    // console.log("router linktsasa: ", this.router.url);
    this.router.events.subscribe((val) => {
      if (this.location.path() != '') {
        let routePath = this.location.path();
        if (routePath.includes("portfolio") || routePath.includes("contact")) {
          this._mRouterLink = "/home"
        }else{
          this._mRouterLink = "/portfolio"
          
        }
        //this.updateRouteEnd(routePath);
        //console.log("Route: ", this._mRoute);
        //console.log("Sub Route: ", this._mSubRoute);
        return;
      } else {
      }

      // console.log("router linkt: ", this._mRouterLink);
      
    });

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


  onActivate(e, outlet){
        
    this.contentScroller.nativeElement.scrollTop = 0;
// this.myScrollContainer.scrollable.getElementRef().nativeElement.scrollTop= 0;
  }
}
