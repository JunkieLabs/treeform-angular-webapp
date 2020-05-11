import { Injectable, EventEmitter } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class SideNavEventHandlerService {

    // static BREADCRUMBS = {
    //     standard: 'standard',
    //     course: 'sourse',
    //     book: 'book',
    //     chapter: 'chapter',
    //     chapterSection: 'chanpterSection',
    //     topic: 'topic',
    //     question: 'question'
    // };

    // static ROUTES = {
    //     portfolio: '/portfolio',
    //     // contact: '/contact',
    //     services: '/services',
    //     codelabs: '/libraries',
    //     social: '/social-reach',
    //     research: '/research',

    // };

    // static BREADCRUMBS_LABEL = {
    //     standard: 'Standards',
    //     course: 'Courses',
    //     book: 'Books',
    //     chapter: 'Chapters',
    //     chapterSection: 'Chapter Sections',
    //     topic: 'Topics',
    //     question: 'Questions'
    // };

    actionMainEmitter: EventEmitter<Boolean> = new EventEmitter<Boolean>();



    // static _getNewBreadcrumbSet(pBreadcrumb: Breadcrumb, prevSet: Breadcrumb[]) {

    //     const set: Breadcrumb[] = [];
    //     if (pBreadcrumb.key === SideNavEventHandlerService.BREADCRUMBS.standard) {
    //         set.push(pBreadcrumb);
    //         return set;
    //     } else if (pBreadcrumb.key === SideNavEventHandlerService.BREADCRUMBS.course) {
    //         const index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.standard);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.standard)); }
    //         set.push(pBreadcrumb);
    //         return set;
    //     } else if (pBreadcrumb.key === SideNavEventHandlerService.BREADCRUMBS.book) {
    //         let index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.standard);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.standard)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.course);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.course)); }

    //         set.push(pBreadcrumb);
    //         return set;
    //     } else if (pBreadcrumb.key === SideNavEventHandlerService.BREADCRUMBS.chapter) {
    //         let index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.standard);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.standard)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.course);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.course)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.book);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.book)); }

    //         set.push(pBreadcrumb);
    //         return set;
    //     } else if (pBreadcrumb.key === SideNavEventHandlerService.BREADCRUMBS.chapterSection) {

    //         let index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.standard);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.standard)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.course);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.course)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.book);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.book)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.chapter);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.chapter)); }

    //         set.push(pBreadcrumb);
    //         return set;
    //     } else if (pBreadcrumb.key === SideNavEventHandlerService.BREADCRUMBS.topic) {

    //         let index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.standard);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.standard)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.course);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.course)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.book);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.book)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.chapter);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.chapter)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.chapterSection);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.chapterSection)); }

    //         set.push(pBreadcrumb);
    //         return set;
    //     } else if (pBreadcrumb.key === SideNavEventHandlerService.BREADCRUMBS.question) {

    //         let index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.standard);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.standard)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.course);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.course)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.book);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.book)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.chapter);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.chapter)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.chapterSection);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.chapterSection)); }

    //         index = prevSet.findIndex((value) => value.key === this.BREADCRUMBS.topic);
    //         if (index >= 0) { set.push(prevSet[index]); } else { set.push(this._getBreadcrumb(this.BREADCRUMBS.topic)); }

    //         set.push(pBreadcrumb);
    //         return set;
    //     }


    // }


    // static _getBreadcrumb(key: String) {
    //     if (key === this.BREADCRUMBS.standard) {
    //         return new Breadcrumb(this.BREADCRUMBS_LABEL.standard, key, this.BREADCRUMBS_ROUTES.standard);
    //     } else if (key === this.BREADCRUMBS.course) {
    //         return new Breadcrumb(this.BREADCRUMBS_LABEL.course, key, this.BREADCRUMBS_ROUTES.course);
    //     } else if (key === this.BREADCRUMBS.book) {
    //         return new Breadcrumb(this.BREADCRUMBS_LABEL.book, key, this.BREADCRUMBS_ROUTES.book);
    //     } else if (key === this.BREADCRUMBS.chapter) {
    //         return new Breadcrumb(this.BREADCRUMBS_LABEL.chapter, key, this.BREADCRUMBS_ROUTES.chapter);
    //     } else if (key === this.BREADCRUMBS.chapterSection) {
    //         return new Breadcrumb(this.BREADCRUMBS_LABEL.chapterSection, key, this.BREADCRUMBS_ROUTES.chapterSection);
    //     } else if (key === this.BREADCRUMBS.topic) {
    //         return new Breadcrumb(this.BREADCRUMBS_LABEL.topic, key, this.BREADCRUMBS_ROUTES.topic);
    //     } else if (key === this.BREADCRUMBS.question) {
    //         return new Breadcrumb(this.BREADCRUMBS_LABEL.question, key, this.BREADCRUMBS_ROUTES.question);
    //     }

    // }

    constructor() {
    }

    /**
     *  @deprecated
     */
    emitMainEvent(isOpening: Boolean) {
        this.actionMainEmitter.emit(isOpening);
    }

    /**
     *  @deprecated
     */
    getEmitter(): EventEmitter<Boolean> {
        return this.actionMainEmitter;
    }


    emitActionMainEvent(isOpening: Boolean) {
        this.actionMainEmitter.emit(isOpening);
    }

    getActionMainEmitter(): EventEmitter<Boolean> {
        return this.actionMainEmitter;
    }

    // emitEditorBreadcrumbEvent(breadcrumb: Breadcrumb[]) {
    //     this.mEditorBreadCrumb = breadcrumb;
    //     this.editorBreadcrumbEmitter.emit(breadcrumb);
    // }


    // setBreadcrumbEnd(pBreadcrumb: Breadcrumb): Boolean {
    //     if (!pBreadcrumb) {
    //         return false;

    //     }
    //     console.log('braed: ', pBreadcrumb);


    //     const index = this.mEditorBreadCrumb.findIndex((value: Breadcrumb) => value.key === pBreadcrumb.key);

    //     if (index >= 0) {
    //         this.mEditorBreadCrumb[index] = pBreadcrumb;
    //         this.mEditorBreadCrumb = this.mEditorBreadCrumb.splice(0, index + 1);

    //     } else {
    //         // this.mEditorBreadCrumb = SideNavEventHandlerService._getNewBreadcrumbSet(pBreadcrumb, this.mEditorBreadCrumb);

    //     }

    //     this.emitEditorBreadcrumbEvent(this.mEditorBreadCrumb);

    //     // if (breadcrumb.key)


    // }

    // getEditorBreadcrumbEmitter(): EventEmitter<Breadcrumb[]> {
    //     return this.editorBreadcrumbEmitter;
    // }

    // getEditorBreadcrumb(): Breadcrumb[] {
    //     return this.mEditorBreadCrumb;
    // }





}
