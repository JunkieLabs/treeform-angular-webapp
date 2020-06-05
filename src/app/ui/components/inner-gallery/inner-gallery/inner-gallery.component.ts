import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inner-gallery',
  templateUrl: './inner-gallery.component.html',
  styleUrls: ['./inner-gallery.component.scss'],
})
export class InnerGalleryComponent implements OnInit {
  flexBorderSize = 6;
  flexImageSize = 11;
  galleryName = 'treeform';
  // tslint:disable-next-line: variable-name
  _mRefSelf: any;
  // tslint:disable-next-line: variable-name
  _mActiveCategory = 0;
  // tslint:disable-next-line: variable-name
  _mCategories = ['gardening', 'pots', 'office'];

  currentRoute: string = '';

  constructor(
    private el: ElementRef,
    private location: Location,
    private activeRoute: ActivatedRoute
  ) {
    this._mRefSelf = this.el.nativeElement;
    this.currentRoute = this.activeRoute.snapshot.params['category'] || '';
  }

  ngOnInit(): void {
    this.getActiveRoute();
  }

  _mToggleCategory(e) {
    this._mActiveCategory = e;
  }

  onViewerVisibilityChanged(isVisible: boolean): void {
    // console.log(`viewer visible: ${isVisible}`)
  }

  _onNavigateBack() {
    this.location.back();
  }

  getActiveRoute() {
    const activeIndex = this._mCategories.indexOf(this.currentRoute);
    this._mActiveCategory = activeIndex;
  }
}
