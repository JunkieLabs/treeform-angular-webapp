import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inner-gallery',
  templateUrl: './inner-gallery.component.html',
  styleUrls: ['./inner-gallery.component.scss'],
})
export class InnerGalleryComponent implements OnInit {
  _mFlexBorderSize = 6;
  _mFlexImageSize = 11;
  _mGalleryName = 'treeform';
  _mRefSelf: any;
  _mActiveCategory = 0;
  _mCategories = ['gardening', 'pots', 'office'];

  currentRoute = '';

  constructor(
    private el: ElementRef,
    private location: Location,
    private activeRoute: ActivatedRoute
  ) {
    const paramName = 'category';
    this._mRefSelf = this.el.nativeElement;
    this.currentRoute = this.activeRoute.snapshot.params[paramName] || '';
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
